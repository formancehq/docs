---
title: Locking Model
---

# Locking Model: Ensuring Transaction Reliability

## What is the Locking Model?

The Locking Model in Formance Ledger ensures that your financial transactions remain accurate and consistent, even when many operations happen at the same time. Think of it as a traffic control system that prevents financial data collisions and keeps your money movements orderly and predictable.

## Why It Matters to You

When managing financial transactions, reliability is non-negotiable. The Locking Model provides:

- **Data Integrity**: Ensures your balances are always accurate
- **Consistent Results**: The same operation always produces the same outcome
- **Conflict Prevention**: Prevents issues when multiple users or systems try to move funds simultaneously
- **Regulatory Compliance**: Helps meet financial regulations that require accurate record-keeping

## How It Works for Your Business

### Guaranteed Transaction Safety

When you initiate a transaction in Formance Ledger, the system automatically:

1. **Reserves the Accounts**: Temporarily marks the affected accounts as "in use"
2. **Validates the Transaction**: Checks that all conditions are met (sufficient funds, valid accounts, etc.)
3. **Applies the Changes**: Updates all balances atomically (all changes happen together or none at all)
4. **Releases the Reservation**: Makes the accounts available for other transactions

This process happens in milliseconds and is completely transparent to you and your users.

### Handling Busy Periods

During high-traffic periods when many transactions occur simultaneously:

- The system automatically queues and processes transactions in a way that maintains consistency
- If two operations try to modify the same account at the exact same time, one will complete first while the other waits its turn
- In rare cases where conflicts can't be resolved automatically, the system will notify your application so you can retry the operation

## Real-World Benefits

### For Financial Applications

- **Payment Processing**: Ensure that customer payments are processed correctly even during high-volume periods
- **Account Management**: Maintain accurate balances across multiple user actions
- **Reconciliation**: Reduce the need for manual reconciliation by preventing data inconsistencies

### For Multi-Region Deployments

If your business operates across multiple regions or data centers, Formance Ledger provides:

- **Distributed Consistency**: Maintains transaction integrity across your entire infrastructure
- **Scalability**: Allows you to grow your transaction volume without sacrificing reliability
- **Resilience**: Continues to function correctly even if parts of your system experience temporary issues

## Best Practices

To get the most out of Formance Ledger's Locking Model:

1. **Design for Concurrency**: Structure your accounts and transactions to minimize contention on frequently used accounts
2. **Implement Retry Logic**: For high-volume scenarios, include automatic retry mechanisms in your application
3. **Monitor Performance**: Keep an eye on transaction throughput and response times to identify potential bottlenecks
4. **Consider Sharding**: For very large deployments, distribute your data across multiple ledgers based on logical business divisions

By leveraging these capabilities, your financial operations will remain reliable and consistent, even as your business scales.
