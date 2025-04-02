
Este projeto implementa uma automação de testes usando Microsoft Playwright para validar diferentes etapas de uma aplicação de seguro de veículos. Ele foi projetado para rodar localmente e integrado com GitHub Actions para pipelines CI/CD.

Objetivo
Garantir a qualidade da aplicação de seguro, validando as funcionalidades das abas e Campos

Enter Vehicle Data
Enter Insurant Data

Estrutura do Projeto
# Template Test - Automação de Testes para Aplicação de Seguro de Veículos

Projeto de exemplo para realização de testes

## Pré-requisitos:
- [NodeJS-18+](https://nodejs.org/en/download/ "NodeJS")
- [selenium] npm install selenium-webdriver linguagem Java Script 

## Ferramentas utilizadas:
- [VSCode](https://code.visualstudio.com/download/ "VSCode")
- 

## Estrutura de pastas

<pre>
📦TESTESITE  
 ┣ 📂allure-report 
 ┃ ┣ 📂data
 ┃ ┃  ┣ behaviors.csv 
 ┃ ┃  
 ┃ ┣ 📂node_modules
 ┃ ┃   ┗ 📜.bin
 ┃ ┗ 📂page_objects 
 ┃ ┃   ┣ 📜InsurantDataPage.js 
 ┃ ┃   ┃ 📜VehicleDataPage.js 
 ┃ ┣ 📂Selenium   
 ┃ ┃   ┣ 📜.gitattributes      
 ┃ ┃   ┃  
 ┃ ┣ 📂tests
 ┃     ┣ 📜AutomacaoPreencherCampo.js
 ┣ 📜package-lock.json  
 ┣ 📜package.json  
 ┗ 📜README.md  
 </pre>
 
## Tutorial, Instalação e Execução

### Executar este projeto em sua maquina

* Em um terminal, dentro da pasta do projeto, execute o seguinte comando:

**Instalar as dependências:**  
```
npm i
```

### Utilizando comandos para executar os testes 

* Em um terminal execute um dos comandos abaixo para abrir:
```
node tests/AutomacaoPreencherCampo.js 

```

npx allure open


### Trabalhando com reports do Allure:  
Uma execução que gera reports do Allure irá criar uma pasta chamada 'allure-results' dentro da raiz do projeto. Se esta pasta existir e possuir arquivos válidos, você pode visualizar os resultados usando:

npx allure open

npx allure generate allure-results --clean

```
npm run allure:report

```
Depois que você rodar esse comando uma pasta 'allure-report' será criada na raiz do projeto. Para ver os resultados dela, então rode:

```
npm run allure:open
```
Para encerrar o servidor Allure, lembre-se de usar a combinação 'Ctrl + C', ou equivalente.

Finalmente, para remover os resultados Allure do seu projeto, rode o comando:

```
npm run allure:clean



