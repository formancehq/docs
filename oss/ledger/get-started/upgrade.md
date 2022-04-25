---
title: Upgrade existing deployment
---

# Upgrade an existing deployment
## Prerequisites
### Confirm Clean Shutdown
Prior to upgrading, confirm that your `ledger` instance was cleanly shut down.
### Compatibility version
Verify that you meet the upgrade path requirements for your desired version and review the relevant [release notes](https://github.com/numary/ledger/releases) for any preparation instructions.
### Backup
Create a strong backup for your storage engine (SQLite or PostgreSQL)

## Upgrade process
- Download latest version of Numary Ledger
- ``numary storage scan``
- ``numary storage list``
- ``numary storage upgrade {LEDGER_NAME}``
- Start all `ledger` instance with new version of ledger binary