### **Funcionalidades**
---

### **Cadastro de Usuários**

- [] Deve ser possivel o usuário realizar um cadastro.
 - [] O usuário não precisa estar autenticado no sistema para se cadastrar.
 - [] Não deve ser possível realizar o cadastro de um usuário sem username e senha.
 - [] Não deve ser possivel realizar um cadastro de username já existente
 - [] Não deve ser possível o usuário cadastrar a érmissão de administrador

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


