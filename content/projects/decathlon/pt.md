# Hub de Integração e Sincronização de Dados em Tempo Real (Arquitetura Orientada a Eventos)

## Visão Geral

Projeto de **plataforma de sincronização e integração de dados em tempo real**, baseada em **Arquitetura Orientada a Eventos (Event-Driven Architecture)** e **microsserviços na AWS**, com foco em **alta disponibilidade, escalabilidade e consistência eventual**.

A solução foi desenvolvida para consumir grandes volumes de dados provenientes de um **ERP legado (SAP)**, processar eventos em alta escala e distribuir dados consolidados de forma resiliente para múltiplos domínios corporativos.

**Palavras-chave estratégicas:** integração de dados corporativos, sincronização em tempo real, arquitetura orientada a eventos, microsserviços AWS, Apache Kafka, AWS Lambda, DynamoDB, processamento assíncrono, alta disponibilidade, sistemas distribuídos.

---

## Arquitetura

A arquitetura foi desenhada seguindo princípios de **microsserviços desacoplados**, comunicação assíncrona e tolerância a falhas.

### Padrão Arquitetural

- Microsserviços
- Event-Driven Architecture
- Processamento assíncrono e orientado a eventos
- Consistência eventual em ambiente distribuído

### Tecnologias e Serviços Utilizados

- **Apache Kafka** para ingestão e streaming de eventos do ecossistema SAP.
- **Amazon SQS (Simple Queue Service)** para filas desacopladas e controle de fluxo.
- **Amazon SNS (Simple Notification Service)** para roteamento seguro e publicação de mensagens.
- **Dead Letter Queues (DLQ)** para tratamento estruturado de falhas.
- **AWS Lambda (Serverless)** para processamento e transformação sob demanda.
- **Amazon DynamoDB (NoSQL)** para armazenamento de alta performance com leituras em milissegundos.
- Modelagem de dados utilizando **Single-Table Design** e otimização de chaves de partição.

---

## Minhas Principais Contribuições

- Desenvolvimento de **microsserviços orientados a eventos** com alto throughput.
- Integração entre fluxos híbridos (**Kafka + mensageria nativa AWS**).
- Modelagem eficiente no DynamoDB visando performance e escalabilidade.
- Implementação de mecanismos de resiliência como:
  - Retentativas automáticas
  - Dead Letter Queues
  - Circuit breakers
  - Tratamento estruturado de exceções
- Garantia de confiabilidade e estabilidade em ambiente distribuído.

---

## Impacto

- Redução do tempo de propagação de dados entre sistemas.
- Maior confiabilidade na sincronização entre domínios corporativos.
- Arquitetura escalável preparada para crescimento do volume transacional.
- Plataforma resiliente com tolerância a falhas e recuperação automatizada.

> Arquitetura orientada a eventos aplicada com foco em escalabilidade, resiliência e entrega contínua de valor.