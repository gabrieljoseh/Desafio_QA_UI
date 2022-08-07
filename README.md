# Desafio_QA_UI
O projeto tem como finalidade testar de forma automatizada 2 cenários para a validação de um login, são eles teste de login válido e teste de login inválido.Foi utilizado o site https://front.serverest.dev/ como cenário de teste para a criação dos cadastros.

### Dowload e clone do projeto:

Para fazer o download do projeto através de uma pasta .zip basta clicar no link https://github.com/gabrieljoseh/Desafio_QA_UI/archive/refs/heads/main.zip, ou também é possível clonar a pasta do projeto através do terminal de sua máquina através da linha de comando abaixo:
```
git clone https://github.com/gabrieljoseh/Desafio_QA_UI.git
```

# Instalação das ferramentas que serão usadas durante o processo:

## VS Code

Para escrever os códigos foi utilizado o editor de texto VS Code, apenas por preferência pessoal, porém pode ser usado qualquer outro editor de texto ou o próprio terminal da máquina tanto para usuários de Windowns como para usuáros de Linux.

Para fazer o download do VS Code basta seguir os passos abaixo:

- Baixar o instalador do VS Code através do link https://https://code.visualstudio.com/download, e escolha o sistema operacional de sua máquina;
- Execute o arquivo que foi baixado(instalação normal seguir com "next" até executar a instalação);
- Após realizar a instalação o editor de texto já está apto para uso;

## NodeJs

- Baixar o instalador do NodeJS através do link https://https://nodejs.org/en/download/, e escolha o sistema operacional de sua máquina;
- Execute o arquivo que foi baixado(instalação normal seguir com "next" até executar a instalação);
- Após terminar de carregar a barra de instalação o NodeJS já estará instalado, para verificar se foi instalado com sucesso basta digitar no terminal o comando **node -v** se o terminal retornar algo do tipo **v16.16.0**, por exemplo, a instalação está ok.
- Verificar também se o npm está instalado usando o comando **npm -v**, o terminal retornará a versão do npm se estiver tudo ok, lembrando que ao instalar o NodeJS o npm já vem no pacote.

## Cypress

- Abra a pasta que foi baixada ou clonada, no terminal de comandos da sua máquina;
- Execute o comando abaixo para realizar a instalação do cypress;

```
npm install --save-dev cypress cypress-cucumber-preprocessor
```

Foi utilizado o Cypress com o Cucumber de preprocessor;

Depois de realizar todos os comandos descritos acima e instalar tudo o que foi mostrado, já está tudo pronto para rodar os testes.

## Teste automatizado com Cypress

- Para abrir a interface do cypress basta executar o comando abaixo:

```
npm run cypress:open
```
Ao abrir o Cypress pela primeira vez será necessário ser feita algumas configurações, que serão detalhadas abaixo;

- Após executar o comando acima irá abrir a primeira tela de interação do cypress, selecionar a opção **E2E Testing**, conforme mostrado na figura abaixo;

![image](https://user-images.githubusercontent.com/110433514/183308411-5245c976-8c0c-445f-bf23-d7ebff49dd55.png)

- Após selecionar a opção **E2E Testing**, selecionar o Chrome como browser e depois clicar em **Start E2E Testing in Chrome**;

![image](https://user-images.githubusercontent.com/110433514/183309294-39341744-0cb4-4b8c-b803-cb4df028a683.png)

- Ao selecionar está opção será aberta uma página do Cypress no Chrome, onde será executado o teste, na opção **Specs**, clique no arquivo **login.cy.js**(esse é o arquivo onde está o código que irá rodar o teste pretendido), segue imagem de exemplo;

![image](https://user-images.githubusercontent.com/110433514/183308877-fc5f0fc9-1ecb-4c0f-8612-2d550b22711d.png)

-Depois de clicar no arquivo **login.cy.js**, o Cypress irá executar o teste do login mostrando no check que os testes passaram.

![image](https://user-images.githubusercontent.com/110433514/183309055-d052164e-6980-4e23-93d3-3cce686b40a6.png)


#### Dessa forma temos o teste finalizado e feito de forma totalmente automatizado com o Cypress.




