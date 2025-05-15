---
title: Concurrency Model
---

# Concurrency Model: Reliable Financial Transactions at Scale

## What is the Concurrency Model?

The Concurrency Model in Formance Ledger ensures that your financial transactions remain accurate and reliable even when hundreds or thousands of operations happen simultaneously. It's like having a sophisticated traffic management system that keeps all your financial data flowing smoothly without collisions or inconsistencies.

## Why It Matters to Your Business

In today's fast-paced financial world, your systems need to handle multiple transactions simultaneously without compromising accuracy. The Concurrency Model provides:

- **Transaction Reliability**: Ensures every transaction completes correctly, even during peak loads
- **Data Consistency**: Maintains accurate balances across all accounts at all times
- **Scalable Operations**: Allows your business to grow without sacrificing transaction reliability
- **Conflict Resolution**: Automatically manages competing transactions to prevent errors

## How It Works for You

![flow](/img/advanced/concurrency-model.png)

### Multi-Layer Protection

The Concurrency Model uses a multi-layered approach to ensure transaction reliability:

1. **Preventive Controls**: Temporarily reserves accounts during transactions to prevent conflicts
2. **Verification Checks**: Confirms that no changes occurred during processing
3. **Automatic Conflict Resolution**: Identifies and manages any competing transactions

This layered approach works silently in the background, ensuring your financial operations remain reliable without requiring any special handling from your applications.

## Real-World Benefits

### For Payment Platforms

- **High-Volume Processing**: Reliably process thousands of payments per second
- **Peak Period Handling**: Maintain consistent performance during high-traffic events like Black Friday
- **Transaction Integrity**: Ensure that funds are never double-spent or lost in transit

### For Financial Applications

- **Account Management**: Keep customer account balances accurate even with concurrent withdrawals and deposits
- **Marketplace Operations**: Process buyer and seller transactions simultaneously without conflicts
- **Reporting Accuracy**: Generate financial reports with consistent point-in-time data

## Scaling Your Business

As your business grows, the Concurrency Model scales with you:

### Single-Region Deployments

For businesses operating in a single region, the system automatically:
- Manages transaction ordering
- Prevents conflicts between simultaneous operations
- Ensures consistent results across all transactions

### Multi-Region Deployments

For global businesses operating across multiple regions, the system provides:
- **Distributed Coordination**: Synchronizes transactions across all your deployment regions
- **Consistent Performance**: Maintains reliable transaction processing regardless of location
- **Regional Resilience**: Continues operating even if one region experiences issues

## Best Practices

To maximize the benefits of the Concurrency Model:

1. **Implement Retry Logic**: Configure your applications to automatically retry transactions that encounter conflicts
2. **Monitor Transaction Volumes**: Keep an eye on your transaction patterns to identify potential bottlenecks
3. **Consider Data Distribution**: For very large deployments, distribute your data strategically across multiple ledgers

By leveraging these capabilities, your financial operations will remain reliable and consistent, even as your transaction volumes grow exponentially.
