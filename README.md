# test-cypress-vanilla-js-web-app
# 🧪 Testes End-to-End com Cypress para Registro de Imagens
Este repositório apresenta a automação de testes end-to-end utilizando **Cypress** e **JavaScript** como parte do meu portfólio profissional. Ele foi desenvolvido para validar funcionalidades de uma aplicação web simples de registro de imagens, baseada no projeto do [Erick Wendel](https://github.com/ErickWendel), disponível [neste repositório](https://github.com/ErickWendel/vanilla-js-web-app-example).

---

## 🌟 Objetivo do Projeto
O objetivo é garantir que todas as funcionalidades relacionadas ao **Registro de Imagens** na aplicação sejam validadas por meio de testes automatizados. A aplicação testada é acessível através deste link: [vanilla-js-web-app-example](https://erickwendel.github.io/vanilla-js-web-app-example/).

Os cenários de teste foram escritos utilizando a abordagem **BDD (Behavior-Driven Development)** com o padrão **Gherkin**, para facilitar a comunicação e entendimento das funcionalidades validadas.

---

## 📂 Estrutura do Repositório
O repositório está dividido em duas partes principais:
1. **`complete-project/`**: Contém o projeto completo, incluindo todos os cenários de teste.
2. **`in-class-project/`**: Contém o projeto desenvolvido durante a aula do curso, com apenas o primeiro cenário de teste implementado.

Além disso, há uma pasta **`.github/workflows`** na raiz do repositório, configurada para executar testes automaticamente utilizando o **GitHub Actions**. Os arquivos disponíveis são: 
- **`cypress-complete-project.yml`**: Configuração para executar os testes do projeto completo.
- **`cypress-in-class-project.yml`**: Configuração para executar os testes do projeto feito durante a aula.

---

## 🚀 Cenários de Teste
Os testes automatizados cobrem os seguintes cenários:

### **1. Submitting an image with invalid inputs**
- **Descrição**: Testa o comportamento da aplicação ao tentar enviar uma imagem sem preencher os campos ou com dados inválidos.
- **Validações**:
  - Mensagens de erro específicas para os campos de título e URL.
  - Ícones de alerta nos campos com problemas.

---

### **2. Submitting an image with valid inputs using enter key**
- **Descrição**: Testa a funcionalidade de envio de imagens com entradas válidas, utilizando a tecla Enter.
- **Validações**:
  - Ícones de validação nos campos de título e URL ao inserir valores válidos.
  - Atualização da lista de imagens registradas após o envio.
  - Persistência do item no `localStorage`.
  - Limpeza dos campos após o envio.

---

### **3. Submitting an image and updating the list**
- **Descrição**: Testa o envio de imagens com entradas válidas utilizando o botão de envio e verifica a atualização da lista de imagens.
- **Validações**:
  - Atualização dinâmica da lista de imagens registradas.
  - Persistência do novo item no `localStorage`.
  - Limpeza dos campos após o envio.

---

### **4. Refreshing the page after submitting an image clicking in the submit button**
- **Descrição**: Testa a persistência dos dados após atualizar a página.
- **Validações**:
  - O item enviado continua visível na lista de imagens registradas mesmo após um refresh da página.

---

## 🛠️ Tecnologias Utilizadas
- **Cypress**: Framework de testes end-to-end.
- **JavaScript**: Linguagem de programação para escrita dos testes.
- **HTML/CSS**: Base da aplicação testada.
- **GitHub Actions**: Integração contínua para automação dos testes.
- **LocalStorage**: Persistência de dados para simular uma aplicação real.

---

## 🧪 Executando os Testes Localmente
### **1. Clone o repositório**

```
git clone https://github.com/araissaalmeida/test-cypress-vanilla-js-web-app.git
```

### **2. Instale as dependências**
- Para o projeto completo: 

```
cd complete-project
npm install
```
- Para o projeto da aula: 
```
cd in-class-project
npm install
```

### **3. Execute os testes**
- Para abrir a interface do Cypress:

```
npm run cypress:web
```

- Para executar os testes em modo headless:

```
npm run cypress:headless
```

---

## 💡 O que foi aprendido neste projeto?
Validação de entradas: Garantir que os campos de formulário tratam corretamente entradas válidas e inválidas.
Persistência de dados: Testar a integração com o localStorage para garantir que os dados registrados são armazenados e recuperados corretamente.
Interações dinâmicas: Verificar a atualização dinâmica da interface após ações do usuário.
Automação orientada a cenários: Uso de padrões BDD para criar cenários claros e comunicativos.

---

## 📌 LinkedIn
📧 [Raíssa Almeida dos Anjos 🐞](https://www.linkedin.com/in/raissaalmeidadosanjos/)

---

## 🔗 Referências
Curso do [Erick Wendel](https://github.com/ErickWendel) no YouTube: [Automatize Testes End-to-End com Cypress](https://www.youtube.com/watch?v=56N0P67ffIA)

---

## 🌟 Feedback
Se você gostou deste projeto ou tem sugestões de melhorias, fique à vontade para abrir uma issue ou me enviar uma mensagem. 🚀

---