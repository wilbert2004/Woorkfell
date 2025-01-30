const express = require('express');
const router = require('../controllers/userController');  // Asegúrate de que la ruta sea correcta
const app = express();

app.use('/api', router); // Usa las rutas definidas en el enrutador
module.exports = router;
