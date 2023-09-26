const pg = require("pg")

const database = new pg.Client("postgres://lbfhwcvc:eLlVMIU7yALI1B168llYYrlxNM47pKjH@silly.db.elephantsql.com/lbfhwcvc")

database.connect((erro)=>{
if(erro){
    return console.log("Não deu bpm de SQL")
}else {
    return console.log("DEU BOM SQL")
}

})

module.exports = database