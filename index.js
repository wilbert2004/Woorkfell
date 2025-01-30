const express = require('express');
const cors = require('cors');
const db = require('./db/connection'); // Importar la conexión a MySQL
const userRoutes = require('./routes/userRoutes');



require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes); // Prefijo para rutas de usuario

// Servidor corriendo
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
