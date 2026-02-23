# IX – Plataforma Interna de Gerenciamento de Terceirizados para Clínicas

## Visão Geral

Projeto de **plataforma interna SaaS para gerenciamento de trabalhadores terceirizados em clínicas**, permitindo listar profissionais, suas especialidades, valores por laudo e disponibilidade.  

O sistema possibilita que a clínica **escolha o melhor funcionário para cada atividade**, enquanto todo o **processo de pagamento e escrita de laudos** é realizado diretamente na plataforma.  

**Palavras-chave estratégicas:** SaaS, gerenciamento de profissionais, alocação de tarefas, pagamentos online, transações seguras, NestJS, Next.js, PostgreSQL, Stripe, Resend, e-mails transacionais, autenticação complexa, múltiplos tipos de acesso, experiência de usuário.

---

## Arquitetura

A arquitetura foi desenhada para **oferecer uma solução completa de backend e frontend**, escalável e segura para uso interno e público.

### Padrão Arquitetural

- Backend em **NestJS** com arquitetura modular e API REST  
- Frontend em **Next.js**, contemplando área administrativa e interface pública  
- Banco de dados relacional **PostgreSQL** para persistência de informações  
- Integração com **Stripe** para pagamentos e faturamento  
- **Resend** para envio de e-mails transacionais em eventos do sistema (pedido criado, aprovado, em construção, finalizado)  
- **Autenticação complexa** com diferentes tipos de acesso e permissões de usuários internos e externos  

### Tecnologias e Serviços Utilizados

- **NestJS** para backend modular e escalável  
- **Next.js** para frontend administrativo e público  
- **PostgreSQL** como banco de dados principal  
- **Stripe** para processamento de pagamentos  
- **Resend** para envio de e-mails transacionais  
- Sistema de autenticação robusto com múltiplos níveis de permissões  

---

## Minhas Principais Contribuições

- Construção da aplicação completa **end-to-end**, incluindo backend, frontend, integração com Stripe e Resend  
- Implementação do fluxo de pagamento e gestão de pedidos dentro da plataforma  
- Desenvolvimento de funcionalidades de listagem e filtro de trabalhadores por especialidade, valor e disponibilidade  
- Configuração e disparo de **e-mails transacionais via Resend** para notificações automáticas  
- Implementação de **autenticação complexa**, garantindo diferentes tipos de acesso e permissões  
- Contato direto com o cliente para levantamento de requisitos e ajustes de funcionalidades  

---

## Impacto

- Permite à clínica escolher o profissional mais adequado para cada tarefa  
- Centraliza pagamentos e gestão de laudos na própria plataforma  
- Reduz complexidade administrativa e aumenta eficiência operacional  
- Plataforma escalável para múltiplos usuários e clínicas, com controle seguro de permissões  

> Sistema SaaS completo para gerenciamento interno de trabalhadores terceirizados, com foco em eficiência operacional, automação de pagamentos, autenticação segura e experiência do usuário.