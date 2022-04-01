
const getEventos = (req,res) =>{

    res.json({
        ok:true,
        mrg: "getEventos"
      })

}

const crearEventos = (req,res) =>{

    res.json({
        ok:true,
        mrg: "crearEventos"
      })

}


const actualizarEventos = (req,res) =>{
    res.json(
        {
             //123456789
            ok:true,
            mrg: "actualizarEventos"
        })
}

const eliminarEventos = (req,res) =>{
    res.json(
        {
             //123456789
            ok:true,
            mrg: "eliminarEventos"
        })
}

module.exports = {
    getEventos,
    eliminarEventos,
    actualizarEventos,
    crearEventos
}