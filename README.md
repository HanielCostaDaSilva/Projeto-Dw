# Projeto de Desenvolvimento Web

## :star2: Tema:
* Busca e gerenciamento de endereços MAC

## Integrantes:
* Mateus Eduardo :boy:
* Ramon Lucas :man:
* Júlio Cézar :boy:

## Estrutura do Projeto

/Raíz \
  ├── /public             # Contém os arquivos de front-end (HTML, CSS, JS, imagens) \
  │     ├── /html         # Arquivos HTML que representam as páginas da aplicação \
  │     ├── /css          # Arquivos de estilo (CSS) para estilizar as páginas \
  │     ├── /js           # Scripts JavaScript para manipulação de front-end \
  │     ├── /images       # Imagens utilizadas no front-end \
  ├── /src                # Diretório de código-fonte do back-end \
  │     ├── /database     # Scripts relacionados ao banco de dados, incluindo seeders \
  │     └── express.mjs   # Arquivo principal que configura o servidor Express.js \
  ├── package.json        # Arquivo de dependências e scripts NPM \
  └── package-lock.json   # Arquivo gerado automaticamente para bloquear as versões dos pacotes 

## Descrição do Projeto:
Este projeto visa desenvolver um site para a pesquisa de endereços MAC. O sistema permitirá aos usuários buscar informações sobre o fabricante associado a um endereço MAC específico. Além disso, os usuários poderão se logar no sistema e salvar um histórico de suas buscas para futuras referências.

## Requisitos
    * Um servidor local (por exemplo o Node.js ou live Server) para ter acesso as páginas HTML e a API de autenticação.

## Instalação
    * Clone este repositório - git clone [url]
    * Instale todas as dependências - npm install morgan prisma express cors
    * Inicialize o servidor - npm run dev

## Funcionalidades:
- **Pesquisa de Endereços MAC**: Permite aos usuários procurar informações sobre fabricantes baseando-se no endereço MAC inserido.
- **Login de Usuários**: Sistema de autenticação para que os usuários possam acessar suas contas e funcionalidades personalizadas.
- **Histórico de Buscas**: Armazena e exibe um histórico das buscas realizadas pelos usuários após o login.

## Utilização

1. Acesse a Página Principal
    * Abra **localhost:40000/home** em um navegador web.
2. Faça buscas referentes a identificação de fabricantes, apartir do Mac
    * Exemplo: **00:15:00:A1:C1** ou **00-15-00-A1-C1**
3. Deseja salvar as buscas? 
    * Realize o cadastro **/cadastro**
4. Acesse o login
    * Abra a página **/login**
5. Contato
    * Página de interação com o usuário final para receber Sugestões **/contato**
6. Mensagens de erro
    * Caso acesse com as credencias incorretas, mensagens de erro será exibida. 

## Links:
* [Descrição do Projeto](https://ifpb.github.io/dw/project/)

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/seu-repositorio)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1C.svg?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
