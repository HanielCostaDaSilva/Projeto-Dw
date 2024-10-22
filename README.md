# Projeto de Desenvolvimento Web

## :star2: Tema
* Busca e gerenciamento de endereços MAC

## Descrição do Projeto
Este projeto visa desenvolver um site para a pesquisa de endereços MAC. O sistema permitirá aos usuários buscar informações sobre o fabricante associado a um endereço MAC específico. Além disso, os usuários poderão se logar no sistema e salvar um histórico de suas buscas para futuras referências.

## Requisitos
* Um servidor local (por exemplo o Node.js ou live Server) para ter acesso as páginas HTML e a API de autenticação.

## Funcionalidades
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

## Demonstração
<div style="text-align: center">
  <img alt="demo" 
  height="75%" width="75%" 
  src="https://raw.githubusercontent.com/MateusEDSS/Projeto-Dw/main/public/front/images/image.png">
</div>


## Instalação
#### 1. Clone este repositório  
```git
git clone https://github.com/MateusEDSS/Projeto-Dw.git
```
#### 2. Instale todas as dependências 
 ```bash
 npm install morgan prisma express cors bcrypt
 ```
#### 3. Inicialize o servidor 
 ```bash
 npm run dev
 ```

## Estrutura do Projeto
```bash
/Raíz 
  ├── /public             # Contém os arquivos de front-end (HTML, CSS, JS, imagens) 
  │     ├── /html         # Arquivos HTML que representam as páginas da aplicação 
  │     ├── /css          # Arquivos de estilo (CSS) para estilizar as páginas 
  │     ├── /js           # Scripts JavaScript para manipulação de front-end 
  │     ├── /images       # Imagens utilizadas no front-end 
  ├── /src                # Diretório de código-fonte do back-end 
  │     ├── /database     # Scripts relacionados ao banco de dados, incluindo seeders 
  │     └── express.mjs   # Arquivo principal que configura o servidor Express.js 
  ├── package.json        # Arquivo de dependências e scripts NPM 
  └── package-lock.json   # Arquivo gerado automaticamente para bloquear as versões dos pacotes 
```

## Links
* [Descrição do Projeto](https://ifpb.github.io/dw/project/)

## Tags
<!-- [![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/seu-repositorio) -->
![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1C.svg?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)


## Integrantes

<table width="100%" align="center">
<tbody>
<tr>
<td align="center"><img src="https://avatars.githubusercontent.com/MateusEDSS" alt="Mateus Eduardo" width="100" height="100"></td>
<td align="center"><img src="https://avatars.githubusercontent.com/ramonlbb" alt="Ramon Lucas" width="100" height="100"></td>
<td align="center"><img src="https://avatars.githubusercontent.com/Julio-Cezar4" alt="Júlio Cézar" width="100" height="100"></td>
</tr>
<tr>
<td align="center">Mateus Eduardo :boy:</td>
<td align="center">Ramon Lucas :man:</td>
<td align="center">Júlio Cézar :boy:</td>
</tr>