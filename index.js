const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Servidor Express escuchando en el puerto ${port}`)
});