---
title: Concurrency model
---

# Concurrency model

The Formance Ledger uses a concurrency model that ensures transactions remain accurate and consistent even when multiple operations happen simultaneously. This document explains how this model works and how to configure it for your deployment.

## How the concurrency model works

Transactions in the ledger are fully atomic and serialized through two ordered concurrency-control mechanisms that prevent race conditions:

1. Pre-commit locking: Locks account balances before transaction processing
2. Optimistic locking: Verifies no changes occurred during processing

![flow](/img/advanced/concurrency-model.png)

### Pre-commit locking

The pre-commit locking mechanism acquires locks on affected accounts before a transaction is committed. This prevents multiple transactions from modifying the same accounts simultaneously. The ledger implements this using PostgreSQL's row-level locking with the `FOR UPDATE` clause:

```sql
SELECT * FROM balances WHERE account = $1 FOR UPDATE
```

This ensures that no other transaction can modify the same balances until the current transaction is committed or rolled back.

### Optimistic locking

Even with pre-commit locking, the ledger uses optimistic locking during the commit phase as an additional safeguard. This mechanism:

1. Reads the current state of affected accounts
2. Performs transaction operations
3. Verifies the state hasn't changed before committing

If another transaction modified the same accounts during processing, the transaction is aborted and a 409 Conflict response is returned. Your application should handle these conflicts by implementing retry logic.

## Handling conflicts

When a conflict occurs during transaction processing, the ledger returns a [409 Conflict response](../api#tag/transactions/operation/createTransaction). Your application should:

1. Catch the 409 response
2. Wait briefly (using exponential backoff for repeated conflicts)
3. Retry the transaction

Example retry logic in pseudocode:

```
function executeTransaction(transaction) {
  maxRetries = 3
  retryCount = 0
  
  while (retryCount < maxRetries) {
    try {
      response = ledgerAPI.createTransaction(transaction)
      return response
    } catch (error) {
      if (error.status === 409) {
        retryCount++
        if (retryCount >= maxRetries) {
          throw new Error("Max retries exceeded")
        }
        // Exponential backoff
        waitTime = 100 * Math.pow(2, retryCount)
        sleep(waitTime)
      } else {
        throw error
      }
    }
  }
}
```

## Multi-instance deployments

For deployments with multiple ledger instances, you should:

1. Use a load balancer to distribute traffic across instances
2. Implement retry logic in your client applications to handle 409 Conflict responses

A complete example using three ledger instances with a reverse proxy is available in the [multi-node example](https://github.com/formancehq/ledger/blob/main/examples/multi-node/docker-compose.yml).

## Performance considerations

The concurrency model has performance implications you should be aware of:

1. **Account contention**: Frequently modified accounts can become bottlenecks
   - Consider distributing transactions across multiple accounts when possible
   - For high-volume accounts, batch operations when appropriate

2. **Transaction size**: Larger transactions lock more accounts
   - Keep transactions focused on related operations
   - Split unrelated operations into separate transactions

## Monitoring and troubleshooting

To ensure your concurrency model is working effectively:

1. Monitor the rate of 409 Conflict responses
   - A high rate may indicate excessive contention on specific accounts
   - Consider restructuring your account hierarchy or transaction patterns

2. Track transaction latency
   - Increasing latency may indicate locking contention
   - Analyze which accounts are most frequently involved in conflicts
