# Plataforma de Autonomia de Pedidos e Backoffice Carrefour

## Visão Geral

Projeto de **plataforma para melhoria da experiência do usuário na área logada e página de pedidos**, permitindo que clientes consultem detalhes com clareza e tenham autonomia para **cancelar, devolver ou trocar pedidos**.  

O sistema também visava **reduzir o contact rate para o SAC**, diminuindo custos operacionais, e **melhorar a experiência do atendente**, garantindo maior agilidade na resolução de problemas.  

A solução integra **frontend React**, **BFF** e **microsserviços na GCP**, oferecendo consistência e controle sobre diferentes tipos de produtos recebidos de sistemas distintos.

**Palavras-chave estratégicas:** experiência do usuário, autonomia de pedidos, reversa de pedidos, SAC, portal backoffice, microfrontends, React, BFF, GCP, microsserviços, validação de fluxos, integração de dados heterogêneos.

---

## Arquitetura

A arquitetura foi desenhada para **integrar frontend, BFF e microsserviços de pedidos**, garantindo clareza e autonomia para o usuário final, além de suporte eficiente para atendentes do SAC.

### Padrão Arquitetural

- Backend-for-Frontend (BFF) para unificação de APIs e integração de sistemas heterogêneos  
- Microsserviços de pedidos na **GCP**  
- Microfrontends para portal backoffice  
- Validação de fluxo de reversa baseada em status do pedido e forma de pagamento  

### Tecnologias e Serviços Utilizados

- **React** para construção da nova interface de usuário e página “Minha Conta”  
- **Node.js (BFF)** para orquestração de chamadas entre frontend e microsserviços  
- **GCP** para microsserviços de pedidos e processamento de dados  
- **Microfrontends** no portal backoffice para manutenção e melhorias de desempenho  
- Validações de fluxos de cancelamento, devolução e troca com base no status do pedido  

---

## Minhas Principais Contribuições

- Desenvolvimento do **fluxo de reversa** permitindo que clientes escolhessem forma de reembolso baseada na forma de pagamento  
- Melhorias na **página de “Minha Conta” e Pedidos**, aumentando autonomia e clareza do usuário  
- Manutenção e otimização do **portal backoffice**, reduzindo lentidão e impactando minimamente o dia a dia do SAC  
- Criação de **BFF** para unificação de dados de diferentes sistemas e produtos  
- Escolha estratégica de janelas de deploy para não impactar operação dos atendentes  

---

## Impacto

- Clientes com maior autonomia e clareza na gestão de pedidos  
- Redução do contact rate do SAC, diminuindo custos operacionais  
- Portal backoffice mais ágil, facilitando a resolução de problemas pelos atendentes  
- Integração eficiente de dados provenientes de sistemas heterogêneos  

> Plataforma de pedidos e backoffice com foco em autonomia do usuário, eficiência operacional e melhoria contínua da experiência do cliente.