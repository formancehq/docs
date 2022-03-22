---
title: Concurrency Model
---
# Concurrency Model
For Concurrency / Race Condition problems, we have two different mechanisms on the Ledger:
- Optimistic locking
- Lock via Redis

In both cases, the goal is to not be able to write data until the transaction has been fully committed.

## How does the lock work in the Ledger ?
![](/img/advanced/concurrency-model.png)

## Recommendation for a multi-instance deployment
When deploying multiple instances of the Ledger, it is important to have a shared lock between the different instances.   
Otherwise, you could have conflict problems.    
However, we have integrated an Optimistic Locking system that allows to return an error if this happens. ([Response 409](/api/ledger/#operation/createTransaction))

To share a lock between several instances of the Ledger, you can add a Redis server / Cluster. 