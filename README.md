# 🛒 Lista de Compras

Aplicativo de lista de compras desenvolvido em **React Native** utilizando **Expo** e **JavaScript**.

O projeto foi desenvolvido como atividade acadêmica com o objetivo de praticar conceitos fundamentais do desenvolvimento de aplicações mobile, principalmente o gerenciamento de estados com `useState` e a renderização eficiente de listas utilizando `FlatList`.

---

## 📌 Sobre o projeto

O **Lista de Compras** é uma aplicação mobile desenvolvida para permitir que o usuário cadastre produtos que deseja comprar e visualize todos os itens adicionados de maneira organizada.

A aplicação possui uma interface simples, moderna e intuitiva, buscando facilitar a utilização e proporcionar uma boa experiência ao usuário.

O projeto também foi estruturado buscando separar a lógica da aplicação dos estilos visuais, mantendo o código organizado e de fácil manutenção.

---

## 🎯 Objetivos

O desenvolvimento da aplicação teve como principais objetivos:

- Praticar o desenvolvimento de interfaces com React Native;
- Utilizar estados para armazenar informações que podem sofrer alterações;
- Implementar listas dinâmicas utilizando `FlatList`;
- Trabalhar com entrada de dados através do `TextInput`;
- Utilizar eventos de interação do usuário;
- Criar uma interface visual personalizada;
- Organizar o código em diferentes arquivos;
- Aplicar boas práticas básicas de desenvolvimento.

---

## ✨ Funcionalidades

### ➕ Adicionar produtos

O usuário pode digitar o nome de um produto no campo de entrada e adicioná-lo à lista através do botão `+`.

Também é possível adicionar o produto utilizando o teclado do dispositivo.

### 📋 Listagem de produtos

Todos os produtos cadastrados são apresentados dinamicamente utilizando o componente `FlatList`.

Cada produto recebe uma numeração de acordo com sua posição na lista.

### 🔢 Contador de itens

A aplicação possui um contador que informa automaticamente a quantidade de produtos cadastrados.

O texto também é adaptado de acordo com a quantidade:

- `0 itens`
- `1 item`
- `2 itens`
- `5 itens`

### 🛒 Estado de lista vazia

Quando nenhum produto foi adicionado, a aplicação apresenta uma mensagem informando que a lista está vazia.

### 🎨 Interface personalizada

A interface foi desenvolvida com uma identidade visual baseada em tons de verde, utilizando cartões, espaçamentos, bordas arredondadas e elementos visuais para melhorar a organização das informações.

### 📱 Layout responsivo

Os componentes foram organizados utilizando os recursos de layout do React Native, permitindo que a aplicação se adapte a diferentes tamanhos de tela.

---

## 🧰 Tecnologias utilizadas

### React Native

Framework utilizado para o desenvolvimento da interface da aplicação mobile.

### Expo

Plataforma utilizada para facilitar o desenvolvimento, execução e testes da aplicação React Native.

### JavaScript

Linguagem utilizada na implementação da aplicação.

### React Hooks

O projeto utiliza o Hook `useState` para gerenciamento das informações da aplicação.

### FlatList

Componente utilizado para renderizar dinamicamente os produtos cadastrados.

### StyleSheet

Utilizado para organização dos estilos da aplicação.

---

## 🧠 Conceitos aplicados

Durante o desenvolvimento foram aplicados diversos conceitos fundamentais do React Native.

### useState

O `useState` é utilizado para armazenar e atualizar os dados que mudam durante a utilização da aplicação.

São utilizados dois estados principais:

```javascript
const [item, setItem] = useState('');
const [lista, setLista] = useState([]);
