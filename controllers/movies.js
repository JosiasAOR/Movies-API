const path = require("path");
const fs = require("fs")

exports.moviesGet = (req, res) => {
    const pastaMovies = path.join(__dirname,"..", "movies") 

  const arquivoDoVideo = path.join(pastaMovies, "meuVideo.mp4");
  console.log(arquivoDoVideo, "detalhes")

  if (fs.existsSync(arquivoDoVideo)) {
    const detalhesDoArquivo = fs.statSync(arquivoDoVideo);

    const tamanhoDoVideo = detalhesDoArquivo.size;

    const cabecalhoDaResposta = {
      "Content-Length": tamanhoDoVideo,
      "Content-Type": "video/mp4",
    };

    res.writeHead(200, cabecalhoDaResposta);

    fs.createReadStream(arquivoDoVideo).pipe(res);
  } else {
    res.status(404).send("Arquivo de vídeo não encontrado");
  }
};
