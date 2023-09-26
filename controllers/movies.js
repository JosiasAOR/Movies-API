const database = require("../model/db");
const path = require("path");
const fs = require("fs");

exports.exibirVideos = (req, res) => {
  database.query(`SELECT * FROM SUA_TABELA ;`).then(
    (resultado) => {
      res.status(200).send({ tarefas: resultado.rows });
    },
    (erro) => {
      res.status(500).send({ erro: erro });
    }
  );
};

const pastaVideo = path.join(__dirname, "..", "movies");

exports.reproduzir = (req, res) => {
  const id = req.params.id;
  const arquivoDoVideo = path.join(pastaVideo, `${id}.mp4`);

  // Verificar se o arquivo existe
  fs.existsSync(arquivoDoVideo);

  // Buscar detalhes do arquivo
  const detalhesDoArquivo = fs.statSync(arquivoDoVideo);
  // Pegar somente o  tamanho do arquivo
  const tamanhoDoVideo = detalhesDoArquivo.size;

  const cabecalhoDaResposta = {
    "Content-Length": tamanhoDoVideo,
    "Content-Type": "video/mp4",
  };

  res.writeHead(200, cabecalhoDaResposta);

  // Lendo o arquivo numa stream e retornando ele como resposta
  fs.createReadStream(arquivoDoVideo).pipe(res);
};
