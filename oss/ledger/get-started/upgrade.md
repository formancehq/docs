---
title: Upgrade existing deployment
---

# Upgrade an existing deployment

## Supported upgrade paths

| Target version | Minimum current version | Downtime required |
|----------------|-------------------------|-------------------|
| 1.4.x          | 1.x                     | Yes               |
| 1.4.x          | 1.4.x                   | No                |
| 1.3.x          | 1.x                     | Yes               |
| 1.3.x          | 1.3.x                   | No                |
| 1.2.x          | 1.x                     | Yes               |
| 1.2.x          | 1.2.x                   | No                |
| 1.1.x          | 1.x                     | Yes               |
| 1.1.x          | 1.1.x                   | No                |

## Prerequisites

### Compatibility version
Verify that you meet the upgrade path requirements above for your desired version and review the relevant [release notes](https://github.com/numary/ledger/releases) for any preparation instructions.

## Upgrade a multi-nodes deployment

### Preparation

* Prior to upgrading, confirm that all your `ledger` instances were cleanly shut down
* Create a backup of your database (e.g. using pg_dump if you're using Postgres as your storage backend, or by copying the SQLite files otherwise)
* Choose a node where you'll be able to execute numary cli commands

### Upgrade
1. Download the desired version of Numary Ledger
2. Run ``numary storage scan``
3. Run ``numary storage list``
4. Run ``numary storage upgrade {LEDGER_NAME}``
5. Start all `ledger` instance with new version of ledger binary

## Upgrade a single-node deployment

### Preparation

* Prior to upgrading, confirm that your `ledger` instance was cleanly shut down
* Create a backup of your database 
* Choose a node where you'll be able to execute numary cli commands

### Backup
Create a backup for your storage engine (SQLite or PostgreSQL)

### Upgrade
1. Download the desired version of Numary Ledger
2. Run ``numary storage scan``
3. Run ``numary storage list``
4. Run ``numary storage upgrade {LEDGER_NAME}``
5. Start all `ledger` instance with new version of ledger binary
