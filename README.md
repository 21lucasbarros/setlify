# Setlify - Landing Page

Este projeto consiste em uma **Landing Page responsiva** desenvolvida para oferecer um **e-book gratuito sobre Setup Social**. Criada com foco em estratégias de **Marketing Digital**, a página tem como principal objetivo **coletar dados dos usuários de forma eficiente e amigável**, destacando o formulário de cadastro de maneira clara e objetiva.

---

## 📌 Objetivo

Criar uma landing page visualmente atrativa e funcional, com destaque para o formulário de cadastro, que coleta dados relevantes do usuário em troca de um e-book gratuito sobre como montar o setup ideal para redes sociais.

---

## 🗂 Estrutura do Projeto

```
21lucasbarros-setlify/
├── index.html         # Estrutura da página
├── style.css          # Estilização com foco em responsividade e visual clean
├── script.js          # Lógica de validação de formulário e integração com ViaCEP
└── assets/            # Imagens e ícones utilizados
```

---

## 🖥 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- [Remixicon](https://remixicon.com/) para ícones
- [ViaCEP API](https://viacep.com.br/) para preenchimento automático do endereço

---

## 🧩 Funcionalidades

### Página Principal

- Título e subtítulo explicativo
- Destaques visuais com ícones ilustrando os tópicos do e-book
- Imagem de apoio demonstrando o conteúdo do produto

### Formulário de Cadastro

Inclui os seguintes campos:

- **Nome completo** (Obrigatório)
- **Idade** (Obrigatória e entre 18 e 100 anos)
- **Telefone** (com máscara automática)
- **CEP** (com máscara e integração automática com ViaCEP)
- **Rua**
- **Número**
- **Bairro**
- **Cidade**
- **Estado**

### Funcionalidade extra:

- Máscara de entrada para **Telefone** e **CEP**
- Preenchimento automático de endereço via **API do ViaCEP**
- Validação em tempo real dos campos obrigatórios com exibição de mensagens de erro
- Exibição de tela de agradecimento após envio válido do formulário

---

## 📲 Como executar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/21lucasbarros-setlify.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd 21lucasbarros-setlify
   ```
3. Abra o arquivo `index.html` em seu navegador preferido.

---
