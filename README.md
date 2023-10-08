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

Siga os passos abaixo para configurar o ambiente de desenvolvimento do backend da Livraria.

### 1. Clone o Repositório


```bash
git clone https://github.com/VilarimLucas/libraryApp.git
```
### 2.1 Configure o Backend NODE + EXPRESS
```powershell

cd libraryApp/backend

npm install express --save
npm install -g nodemon
npm install --save sequelize
npm install --save body-parser
npm install --save mysql2
npm install --save-dev sequelize-cli
npm install dotenv

npx sequelize db:create
npx sequelize db:migrate
```

### 2.2 Configure o Backend NODE + EXPRESS: ESLINT

```powershell

npx eslint --init
```
- ? <small>Need to install the following packages: eslint@8.51.0 Ok to proceed (y) : </small><b style="font-size: larger; color: blue;">y</b>

- ? <small>How would you like to use ESLint: </small><b style="font-size: larger; color: blue;">To check syntax, find problems, and enforce code style</b>

- ? <small>What type of modules does your project use: </small><b style="font-size: larger; color: blue;">ComonJS (require/exports)</b>

- ? <small>Which framework does your project use: </small><b style="font-size: larger; color: blue;">None of these</b>

- ? <small>Does your  project use TypeScript: </small><b style="font-size: larger; color: blue;">NO</b>

- ? <small>Where does your code run: </small><b style="font-size: larger; color: blue;">Node</b>

- ? <small>How would you like to define a style for your project: </small><b style="font-size: larger; color: blue;">Answer questions about your style</b>

- ? <small>What format do you want your config file to be in: </small><b style="font-size: larger; color: blue;">JSON</b>

- ? <small>What style of indentation do you use: </small><b style="font-size: larger; color: blue;">Spaces</b>

- ? <small>What quotes do you use for strings: </small><b style="font-size: larger; color: blue;">Single</b>

- ? <small>What line endings do you use: </small><b style="font-size: larger; color: blue;">Unix</b>

- ? <small>Do you require semicolons: </small><b style="font-size: larger; color: blue;">Yes</b>

- <small>eslint@latest</br> ? Would you like to install then now:  </small><b style="font-size: larger; color: blue;">Yes</b>

- ? <small>Do you require semicolons: </small><b style="font-size: larger; color: blue;">Yes</b>

- ? <small>Which package manager do you want to use: </small><b style="font-size: larger; color: blue;">npm</b>



### 3.1 Para rodar a API no modo DESENVOLVEDOR é necessário o seguinte comando no Powershell
```powershell

npm run dev
```

### 3.2 Para rodar a API
```powershell

npm start
```






