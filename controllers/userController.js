const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const bcrypt = require('bcrypt');

// Registrar usuario
const registerUser = async (req, res) => {
    const { full_name, email, password, position_id } = req.body;
    const role = 'ejecutador';

    if (!full_name || !email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = `INSERT INTO users (full_name, email, password, role, position_id) VALUES (?, ?, ?, ?, ?)`;
        db.query(sql, [full_name, email, hashedPassword, role, position_id || null], (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error al registrar el usuario', error: err });
            }
            console.log('Usuario registrado con éxito:', result);
            res.status(201).json({ message: 'Usuario registrado con éxito', userId: result.insertId });
        });
    } catch (error) {
        res.status(500).json({ message: 'Error interno', error });
    }
};

const updatePasswords = async () => {
    const sql = `SELECT idUser, password FROM users WHERE password NOT LIKE '$2a$%'`;
    db.query(sql, async (err, users) => {
        if (err) {
            console.error('Error al obtener usuarios:', err);
            return;
        }

        console.log('Usuarios encontrados:', users);

        if (users.length === 0) {
            console.log('No hay contraseñas sin cifrar.');
            return;
        }

        for (const user of users) {
            try {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                const updateSql = `UPDATE users SET password = ? WHERE idUser = ?`;
                db.query(updateSql, [hashedPassword, user.idUser], (err) => {
                    if (err) {
                        console.error('Error al actualizar la contraseña:', err);
                    } else {
                        console.log(`Contraseña de usuario ${user.idUser} actualizada correctamente.`);
                    }
                });
            } catch (error) {
                console.error('Error al cifrar la contraseña:', error);
            }
        }
    });
};

updatePasswords();

// Iniciar sesión de usuario
const loginUser = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const sql = `SELECT * FROM users WHERE email = ?`;
    db.query(sql, [email], async (err, result) => {
        if (err) return res.status(500).json({ error: err });

        console.log('Resultado de la consulta:', result);

        if (result.length === 0) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        const user = result[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        console.log('Comparación de contraseña:', passwordMatch);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        res.status(200).json({
            message: 'Inicio de sesión exitoso',
            user: {
                idUser: user.idUser,
                full_name: user.full_name,
                role: user.role,
                position_id: user.position_id,
            },
        });
    });
};

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
