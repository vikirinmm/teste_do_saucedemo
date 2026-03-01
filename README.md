# 🧪 Automação de Testes — SauceDemo com Cypress

Projeto de automação de testes end-to-end utilizando **Cypress**, desenvolvido com foco em validar os principais fluxos de uma aplicação web de e-commerce (SauceDemo).

## 🎯 Objetivo

Garantir a qualidade das funcionalidades críticas do sistema, cobrindo cenários positivos e negativos do fluxo de autenticação e compras.

---

## 🛠️ Tecnologias utilizadas

* Cypress
* JavaScript
* Node.js

---

## 📂 Estrutura do projeto

```
cypress/
 ├── e2e
 │   ├── login
 │   ├── compras
 │   ├── erros
 ├── fixtures
 │   └── usuarios.json
 ├── support
 │   ├── commands.js
 │   └── e2e.js
```

---

## ✅ Cenários automatizados

### 🔐 Login

* Login com credenciais válidas
* Login com credenciais inválidas
* Validação de mensagens de erro

### 🛒 Compras

* Compra de um item
* Compra de múltiplos itens
* Validação do carrinho
* Finalização de compra com sucesso

### ⚠️ Cenários negativos

* Checkout com campos obrigatórios vazios
* Validação de mensagens de erro no formulário

---

## ▶️ Como executar o projeto

### 1️⃣ Clonar o repositório

```bash
git clone <url-do-repositorio>
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Abrir o Cypress

```bash
npx cypress open
```

---

## 💡 Boas práticas aplicadas

* Uso de seletores estáveis (`data-test`)
* Comandos customizados para reutilização
* Separação de cenários por feature
* Uso de fixtures para dados de teste
* Validações explícitas de UI e navegação

---

## 📈 Aprendizados

Este projeto reforçou conceitos importantes de automação de testes, como:

* Estruturação de suites
* Escrita de cenários E2E
* Testes positivos e negativos
* Manutenção e legibilidade de código

---

## 👨‍💻 Autor

Vinícius Antônio Moreira Lemes
Estudante de Análise e Desenvolvimento de Sistemas
Interesse em Qualidade de Software e Automação de Testes
