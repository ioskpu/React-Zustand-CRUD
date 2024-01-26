const express = require('express');
const moongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const marcasRoutes = require('./routes/marcasRoutes');
const tiposRoutes = require('./routes/tiposRoutes');


const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

//comnectar a la base de datos mongodb
moongoose.connect('mongodb://localhost:27017/zuztand', {
     useNewUrlParser: true, useUnifiedTopology: true 
})
.then(() => console.log('Conectado correctamente con Mongodb'))

.catch(error => console.error('error al conectar con Mongodb', error));

//importar rutas
app.use('/api', marcasRoutes);
app.use('/api', tiposRoutes);z

app.listen(port, () => {
    console.log(`Servidor Express escuchando en el puerto ${port}`)
});