const database = require('../model/db')


exports.exibirVideos=(req, res) => {
database.query(`SELECT * FROM SUA_TABELA ;`).then(

(resultado)=>{
    res.status(200).send({tarefas: resultado.rows});
}, (erro)=>{
    res.status(500).send({erro: erro})
}


)
}