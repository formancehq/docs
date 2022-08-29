# Helm

To ease your future deployment of a Formance Stack component, we provide you officials helm charts. To use it, install the Formance repository.

    helm repo add formance https://numary.github.io/helm/
    helm repo update

You can find all the charts in the GitHub repository [numary/helm](https://github.com/numary/helm).

> Important note: if you want to use the Formance helm charts you'll need some databases and tools.
> We recommand using those softwares:
> - PostgreSQL with [AWS Aurora](https://aws.amazon.com/rds/aurora/)
> - [MongoDB Atlas](https://www.mongodb.com/atlas) 
> - [RedPanda](https://redpanda.com/) or [Kafka](https://kafka.apache.org/)
> - [OpenSearch](https://opensearch.org/)
> - [Traefik](https://traefik.io/)

## Cluster requirements

Kubernetes version: >= 1.22

[Helm 3](https://helm.sh/docs/)

## Formance stack component

### Ledger

Requirements: 
- PostgreSQL
- Redis
- RedPanda or Kafka

Values : [Ledger README.md](https://github.com/numary/helm/blob/main/charts/ledger/README.md)

    helm install ledger formance/ledger

### Control

Requirements:
- All Formance components 

Values : [Control README.md](https://github.com/numary/helm/blob/main/charts/control/README.md)

    helm install control formance/control

### Payments

Requirements:
- MongoDB
- RedPanda or Kafka

Values : [Payments README.md](https://github.com/numary/helm/blob/main/charts/payments/README.md)

    helm install payments formance/payments

### Search

Requirements:
- OpenSearch
- Kafka

Values : [Search README.md](https://github.com/numary/helm/blob/main/charts/search/README.md)


    helm install search formance/search

### Gateway

Values : [Gateway README.md](https://github.com/numary/helm/blob/main/charts/gateway/README.md)

    helm install gateway formance/gateway

## Formance stack Helm chart

**For development purpose only**

To help you to deploy the Formance stack to test all of ours products, we provide you a Helm Chart who have all the components in dependencies.

We *do not* provide databases and tools so you have to install it.

Values : [Stack README.md](https://github.com/numary/helm/blob/main/charts/stack/README.md)

    helm install stack formance/stack
