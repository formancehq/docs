---
title: Installation
---
# Installation

Payments CLI is available as pre-compiled binaries for Linux, macOS and Windows. You can install it using the installers below, or download a release binary from the [releases page](https://github.com/numary/payments/releases).
```shell
# check your installation
payments version
```

### Homebrew
If you have [Homebrew](https://brew.sh/) installed on your computer, you can install the CLI by running:
```shell
brew install numary/tap/payments
```
To upgrade an existing installation of the Numary CLI, run:
```shell
brew upgrade payments
```

### Docker
We provide the Numary CLI as ready-to-use Docker container images. You can install the latest version of the CLI using the latest tag or a specific version passing the appropriate tag.
```shell
docker run -p 3068:3068 -v $HOME/numary:/root/.numary --env NUMARY_SERVER_HTTP_BIND_ADDRESS="0.0.0.0:3068" ghcr.io/numary/payments:latest
```
Open Numary API : http://127.0.0.1:3068

### Docker Compose
```shell
curl -L https://raw.githubusercontent.com/numary/payments/main/docker-compose.yml -o docker-compose.yml

docker-compose up -d
```
Open Numary UI : http://127.0.0.1:3078

### Install on APT Based
```shell
deb [trusted=yes] https://apt.fury.io/numary/ /
```
And run this command for install Numary :
```shell
apt update && apt install numary
```

### Install on RPM based
```shell
#/etc/yum.repos.d/numary.repo
[numary]
name=Numary Private Repo
baseurl=https://yum.fury.io/numary/
enabled=1
gpgcheck=0
```
And run this command for install Payments :
```shell
yum update && yum install payments
```

## Numary Cloud
If you want to try Numary without installing it, you can sign-up for a Numary Cloud account.

We're currently running an early-adopter program that will give you enough room to explore Numary for free and access to discounted credits should you want to target production usage. Please request your seat [here](https://airtable.com/shrFJDsRCJDxvrpD0).
