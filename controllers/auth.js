const {response} = require('express');


const crearUsuario = (req, res = response) => {
    const {name, email, password} = req.body;
    res.json({
        "ok": true,
        "msg": "Registros",
        name,
        email,
        password
    })
}

const loginUsuario = (req, res) => {
    res.json({
        "ok": true,
        "msg": "Login"
    })
}

const revalidarToken =  (req, res) => {
    res.json({
        "ok": true,
        "msg": "renew"
    })
}




module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}