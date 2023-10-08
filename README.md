# libraryApp
App desenvolvido na aula de Laboratório web 16-09-2023, API REST, aplicação NODE+EXPRESS

--------------------

# Backend do Projeto

Este é o backend do projeto Livraria. Este guia irá ajudá-lo a configurar o ambiente de desenvolvimento.

## Requisitos Prévios

- Node.js e npm instalados. Você pode baixá-los em [nodejs.org](https://nodejs.org/).
- MySQL: A configuração é local, mas pode ser facilmente reconfigurada no arquivo backend/config/config.json
    - [mySQL download](https://dev.mysql.com/downloads/installer/)
    - [Interface Workbench](https://dev.mysql.com/downloads/workbench/)

## Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento do backend do Cubo Mágico.

### 1. Clone o Repositório


```bash
git clone https://github.com/VilarimLucas/libraryApp.git
```
### 2. Configure o Backend NODE + EXPRESS
```powershell
cd libraryApp/backend

npm install express --save
npm install -g nodemon
npm install --save sequelize
npm install --save body-parser
npm install --save mysql2
npm install --save-dev sequelize-cli
npx sequelize db:create
npx sequelize db:migrate
```

### 3. Para rodar a API é necessário o seguinte comando no Powershell
```powershell

npm run dev
```







