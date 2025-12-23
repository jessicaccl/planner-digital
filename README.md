# Planner Glow ✨

> Organize suas prioridades diárias, foque no que importa e mantenha a produtividade com leveza.

## 🔗 Projeto no ar
[👉 Clique aqui para acessar o projeto](https://plannerglowdigital.netlify.app/)

O **Planner Glow** é uma aplicação web de gerenciamento de tarefas focada em bem-estar e produtividade. Diferente de listas de tarefas comuns, ele integra um design visualmente agradável ("Glow UI"), categorização inteligente e um player de música lo-fi embutido para auxiliar na concentração.

![./src/assets/dashboard.jpg](./assets/preview-desktop.png)

## 📸 Visão Geral

O projeto possui um layout moderno e totalmente responsivo, adaptando-se perfeitamente de desktops a dispositivos móveis.

### Principais Funcionalidades

* **Gerenciamento de Tarefas:** Adicione, conclua e exclua tarefas com facilidade.

  ![./src/assets/novatarefa.jpg](./assets/preview-desktop.png)

* **Palavra do Dia:** Um card de inspiração diária com versículos que podem ser trocados aleatoriamente ao clicar no botão de atualizar.
* **Categorização Inteligente:** Separe suas tarefas em:
    * 💼 **Meus Negócios** (Roxo)
    * 🧸 **Família & Kids** (Rosa)
    * ☕ **Tempo pra Mim** (Laranja)
* **Ordenação Cronológica:** As tarefas são organizadas automaticamente por horário. 
* **Music Player Integrado:** Um player minimalista na barra lateral com estação de rádio focada em produtividade. 
* **Glow UI:** Efeitos de iluminação nos cards baseados na cor da categoria ao passar o mouse.
* **Saudação Dinâmica:** O cabeçalho se adapta para exibir a data atual e uma saudação personalizada.

### 🧭 Navegação & Sidebar Inteligente
A barra lateral foi totalmente refatorada para oferecer a melhor experiência de usuário (UX) em qualquer dispositivo:

  ![./src/assets/sidebarmobile.jpeg](./assets/preview-desktop.png)

* **Comportamento Responsivo (Desktop):**
    * A barra possui dois estados: **Expandida** (280px) e **Recolhida** (80px).
    * No modo recolhido, os textos desaparecem e os ícones são centralizados automaticamente, otimizando o espaço de tela para o conteúdo principal.
    * O conteúdo da página (`Main`) se ajusta dinamicamente à largura da barra, com transições suaves (`smooth transition`).

* **Adaptação Mobile:**
    * Em telas menores, a sidebar se transforma em uma **Gaveta (Drawer)** oculta.
    * Acionamento via botão "Hambúrguer" flutuante.
    * Inclui um **Overlay** escuro no fundo para focar a atenção no menu quando aberto.

      ![./src/assets/prioridadesmobile.jpeg](./assets/preview-desktop.png)

* **🎵 Music Player Integrado:**
    * Player de música Lo-Fi embutido diretamente na navegação.
    * Controles de Play/Pause, Próxima/Anterior e exibição da faixa atual.
    * O player se oculta inteligentemente quando a barra está recolhida para manter o visual limpo.

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido com as melhores práticas do ecossistema React:

* **[React](https://reactjs.org/)** (Vite) - Biblioteca para interfaces de usuário.
* **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para maior segurança e escalabilidade.
* **[Styled Components](https://styled-components.com/)** - Estilização CSS-in-JS para componentes isolados e dinâmicos.
* **[React Router DOM](https://reactrouter.com/)** - Gerenciamento de rotas e navegação SPA.
* **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones leve e moderna.

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar o Planner Glow na sua máquina local:

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado em sua máquina.

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone [https://github.com/seu-usuario/planner-digital.git](https://github.com/seu-usuario/planner-digital.git)

2. **Entre na pasta do projeto**
cd planner-digital

3. **Instale as dependências**
npm install

4. **Inicie o servidor de desenvolvimento**
npm run dev

5. **Acesse no navegador**
O projeto estará rodando em http://localhost:5173 (ou a porta indicada no terminal)



