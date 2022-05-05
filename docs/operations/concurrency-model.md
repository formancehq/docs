---
title: Concurrency Model
---
# Concurrency Model
## Single node

While we are gradually adding constructs to introduce the concept of a cluster in the ledger, Numary 1.0.x is designed to be running as a single instance on a single node.

Optimistic locking is used on the storage backend to ensure consistency and avoid two running ledgers of committing without seeing each other writes. This leads to two important considerations:

* zero downtime upgrades of Numary are not yet possible
* you should avoid to run 2 instances at the same time to avoid 4.x errors
