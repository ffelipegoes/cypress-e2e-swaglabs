## Resumo do Projeto

Este projeto consiste na automação de testes end-to-end utilizando Cypress para o site Swag Labs, com foco na validação dos principais fluxos críticos da aplicação.

A solução foi desenvolvida seguindo boas práticas de QA Automation, com estrutura modular e escalável, permitindo fácil manutenção e evolução dos testes. Além disso, foi integrada a um pipeline de CI/CD utilizando GitHub Actions, garantindo a execução automática dos testes a cada alteração no código.

---

## Boas Práticas Aplicadas

- Separação de testes por feature (Login, Checkout, Produtos, Logout)
- Criação de custom commands reutilizáveis
- Organização dos comandos em múltiplos arquivos (melhor desacoplamento)
- Uso de dados dinâmicos com faker para simulação de cenários reais
- Estrutura orientada à escalabilidade e manutenção
- Execução automatizada em pipeline CI/CD (GitHub Actions)
- Execução cross-browser (Chrome e Firefox)

---

## Cobertura de Testes

Os cenários implementados cobrem fluxos positivos e negativos, incluindo:

- Autenticação de usuários
- Adição e remoção de produtos no carrinho
- Finalização de compras (checkout)
- Validação de comportamentos esperados e tratamento de erros

O objetivo é garantir maior confiabilidade da aplicação e detectar regressões de forma automatizada.
