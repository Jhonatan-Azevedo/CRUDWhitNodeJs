const express = require('express');
// const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }))
userRoute(app);

app.get('/', (req, res) => {
    res.send("Hello world for express");
});

app.listen(port, () => {
    console.log("API Rodando na porta 3000");
})