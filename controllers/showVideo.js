const path = require("path")
const fs = require("fs")

const pastaVideo = path.join(__dirname,"..","movies")

exports.showVideo=(req, res) => {
    const id = req.params.id
    const arquivoDoVideo = path.join(pastaVideo, `${id}.mp4`)

    // Verificar se o arquivo existe
    fs.existsSync(arquivoDoVideo)

    // Buscar detalhes do arquivo
    const detalhesDoArquivo = fs.statSync(arquivoDoVideo)
    // Pegar somente o  tamanho do arquivo
    const tamanhoDoVideo = detalhesDoArquivo.size

    const cabecalhoDaResposta = {
        'Content-Length': tamanhoDoVideo,
        'Content-Type': 'video/mp4'
    }

    res.writeHead(200, cabecalhoDaResposta)

    // Lendo o arquivo numa stream e retornando ele como resposta
    fs.createReadStream(arquivoDoVideo)   
    .pipe(res)    

}

