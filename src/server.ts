import express from "express";

const app = express();

app.get("/",(request, response) => {
    return response.send("A aplicação esta funcionando!");
})

app.listen(3000,()=> {console.log(`Server is running on PORT 3000`)});