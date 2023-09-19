### **Funcionalidades**
---

### **Cadastro de Usuários**

- [x] Deve ser possivel o usuário realizar um cadastro.
 - [x] O usuário não precisa estar autenticado no sistema para se cadastrar.
 - [x] Não deve ser possível realizar o cadastro de um usuário sem username e senha.
 - [x] Não deve ser possivel realizar um cadastro de username já existente
 - [x] Não deve ser possível o usuário cadastrar a érmissão de administrador
---
### **Adicionando logs**

Usado a depedência Winston 

npm i winston
npm i @types/winston -D  << para instalar as tipagens dele por estramos usando type script

## Dependencias

npm i express
npm add typescript ts-node nodemon -D

## precissei rodar esta comando quando adicionei o express
npm i --save-dev @types/express

E preciso depois inicializar o type script 

npx tsc --init

ele irá criar nosso ts config

-- criar na raiz o arquivo nodemon.json
nele diz que todo arquivo terminado com .ts será executado pelo ts-node

### start app

npm run dev


