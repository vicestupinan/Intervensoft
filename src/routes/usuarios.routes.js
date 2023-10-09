import { Router } from "express";
import pool from "../database.js";

const router = Router();

router.get('/add', (req, res) => {
    res.render('usuarios/add');
});

router.post('/add', async(req, res) => {
    try {
        const {nombre, cedula, telefono} = req.body;
        const newUser = {
            nombre,
            cedula,
            telefono
        }
        await pool.query('INSERT INTO usuarios SET ?', [newUser]);
        res.redirect('/list');
    } 
    catch (err) {
        res.status(500).json({message:err.message});
    }
});

router.get('/list', async(req, res) => {
    try{
        const [result] = await pool.query('SELECT * FROM usuarios');
        res.render('usuarios/list', {usuarios: result})
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

export default router;