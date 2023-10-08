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

- ? <small style="font-weight: lighter">Need to install the following packages: eslint@8.51.0 Ok to proceed (y) : </small><b style="font-size: larger; color: #0366d6" >y</b>

- ? <small style="font-weight: lighter">How would you like to use ESLint: </small><b style="font-size: larger; color: #0366d6" >To check syntax, find problems, and enforce code style</b>

- ? <small style="font-weight: lighter">What type of modules does your project use: </small><b style="font-size: larger; color: #0366d6" >ComonJS (require/exports)</b>

- ? <small style="font-weight: lighter">Which framework does your project use: </small><b style="font-size: larger; color: #0366d6" >None of these</b>

- ? <small style="font-weight: lighter">Does your  project use TypeScript: </small><b style="font-size: larger; color: #0366d6" >NO</b>

- ? <small style="font-weight: lighter">Where does your code run: </small><b style="font-size: larger; color: #0366d6" >Node</b>

- ? <small style="font-weight: lighter">How would you like to define a style for your project: </small><b style="font-size: larger; color: #0366d6" >Answer questions about your style</b>

- ? <small style="font-weight: lighter">What format do you want your config file to be in: </small><b style="font-size: larger; color: #0366d6" >JSON</b>

- ? <small style="font-weight: lighter">What style of indentation do you use: </small><b style="font-size: larger; color: #0366d6" >Spaces</b>

- ? <small style="font-weight: lighter">What quotes do you use for strings: </small><b style="font-size: larger; color: #0366d6" >Single</b>

- ? <small style="font-weight: lighter">What line endings do you use: </small><b style="font-size: larger; color: #0366d6" >Unix</b>

- ? <small style="font-weight: lighter">Do you require semicolons: </small><b style="font-size: larger; color: #0366d6" >Yes</b>

- <small style="font-weight: lighter">eslint@latest</br> ? Would you like to install then now:  </small><b style="font-size: larger; color: #0366d6" >Yes</b>

- ? <small style="font-weight: lighter">Do you require semicolons: </small><b style="font-size: larger; color: #0366d6" >Yes</b>

- ? <small style="font-weight: lighter">Which package manager do you want to use: </small><b style="font-size: larger; color: #0366d6" >npm</b>



### 3.1 Para rodar a API no modo DESENVOLVEDOR é necessário o seguinte comando no Powershell
```powershell

npm run dev
```

### 3.2 Para rodar a API
```powershell

npm start
```






