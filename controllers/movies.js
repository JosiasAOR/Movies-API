const path = require("path");
const fs = require("fs");

exports.moviesGet = (req, res) => {
    console.log(req.params.id)
    const id = req.params.id
  const pastaMovies = path.join(__dirname, "..", "movies");

  const arquivoDoVideo = path.join(pastaMovies, `${id}.mp4`);
  console.log(arquivoDoVideo, "detalhes");

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
