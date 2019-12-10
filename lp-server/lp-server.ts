import express = require('express');
import bodyParser = require("body-parser");

const multer = require('multer');
const upload = multer({ dest: './uploads' });

const fs = require('fs');

import { QualisFactory } from './qualisfactory';
import { Qualis } from '../common/qualis';
import { CadastroDePesquisadores } from './cadastrodepesquisadores';
import { LattesFactory } from './lattesFactory';
import { Pesquisador } from '../common/pesquisador';

var lpserver = express();
let cadatroPesq = new CadastroDePesquisadores();
const lattesFactory = new LattesFactory(cadatroPesq);

// add services here

let qualisFactory : QualisFactory = new QualisFactory();
let qualisService : Qualis = new Qualis();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

lpserver.use(allowCrossDomain);

lpserver.use(bodyParser.json());

// ========== REQUESTS ==========

// add reqs here

lpserver.post('/qualis/adicionar', upload.single('qualisFile'), (req: express.Request, res: express.Response) => {
    let fileEnconding : string = fs.readFileSync(req.file.path, 'binary');
    qualisFactory = new QualisFactory();
    qualisFactory.readXls(fileEnconding);
    if (qualisFactory.fileContent) {
      qualisFactory.makeQualis();
      qualisService.copyFrom(qualisFactory.getQualis());
      if (qualisService.getQualis().size > 0) {
          res.send({"success" : "planilha cadastrada com sucesso"});
      } else res.send({"failure" : "nenhuma entrada adicionada"});
    } else res.send({"failure" : "planilha com formatacao invalida"});
})

lpserver.delete('/qualis/apagar', (req: express.Request, res: express.Response) => {
  qualisService = new Qualis();
  if (qualisService.getQualis().size == 0) {
    res.send({"success" : "Tabela qualis apagada"});
  } else res.send({"failure" : "Erro ao apagar a tabela"});
})

lpserver.get('/qualis', (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify(Array.from(qualisService.getQualis())));
})

lpserver.post('/qualis/avaliacao', (req: express.Request, res: express.Response) => {
  let periodico : string = req.body.periodico;
  if (qualisService.assertKey(periodico)) {
    res.send({"success" : qualisService.getAvaliacao(periodico)});
  } else res.send({"failure" : "periodico nao possui avaliacao"});
})
lpserver.post('/pesquisador/adicionar', upload.array('lattesFiles', 12), (req: express.Request, res: express.Response) => {
  let error = false;

  for(let i = 0; i < req.files.length; i++) {
    let xml_string = fs.readFileSync(req.files[i].path, 'utf8');
    let p =  lattesFactory.importLattes(xml_string);

    if(p === null) {
      error = true;
    }
  }

  if(!error) {
    res.send({
      success: 'arquivos foram importados com sucesso',
    })

    return;
  }

  res.send({
    failure: 'houve um erro ao importar os arquivos',
  })

});

lpserver.get('/pesquisadores/', (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify(cadatroPesq.getPesquisadores()));
});

lpserver.get('/estudos-comparativos', (req: express.Request, res: express.Response) => {
  let pesquisadores: Pesquisador[] = cadatroPesq.getPesquisadores();
  //let pesquisadores: any = [{"nome":"Paulo Henrique Monteiro Borba","orgao":"","publicacoes":[{"titulo":"States as Specifications","periodico":"I Simp�sio Brasileiro de Linguagens de Programa��o (SBLP 1996)"},{"titulo":"An Operational Semantics for FOOPS","periodico":"Information Systems Correctness And Reusability (ISCORE 1994)"}]}, {"nome":"Eidson Jaco","orgao":"","publicacoes":[{"titulo":"States as Specifications","periodico":"I Simp�sio Brasileiro de Linguagens de Programa��o (SBLP 1996)"},{"titulo":"An Operational Semantics for FOOPS","periodico":"Information Systems Correctness And Reusability (ISCORE 1994)"}]}];
  let pesos: number[] = <number[]> req.body;
  let ranking: any = [];

  if(typeof pesos[0] != "number"||typeof pesos[1] != "number"||typeof pesos[2] != "number" || typeof pesos[3] != "number"|| typeof pesos[4] != "number"|| typeof pesos[5] != "number"|| typeof pesos[6] != "number"|| typeof pesos[7] != "number"){
    res.send("Pesos inválidos");
  }

  pesquisadores.forEach((pesq: any) => {
    let sumPont = 0;
    pesq.publicacoes.forEach((publi: any) => {
      let currentPont = 0
      let nota = qualisService.getAvaliacao(publi.periodico)
      // let nota;
      // // inicio codigo imbecil para teste
      //   if (publi.periodico == "I Simp�sio Brasileiro de Linguagens de Programa��o (SBLP 1996)"){
      //     nota = 'A2'
      //   }
      //   else if (publi.periodico == "Information Systems Correctness And Reusability (ISCORE 1994)"){
      //     nota = 'A1'
      //   }
      //   else if (publi.periodico == "I Simp�sio Brasileiro de Linguagens de Programa��o (SBLP 1996)"){
      //     nota = 'C'
      //   }
      //   else if (publi.periodico == "Information Systems Correctness And Reusability (ISCORE 1994)"){
      //     nota = 'B2'
      //   }
      // // fim codigo imbecil para teste

      if (nota == 'A1'){
        currentPont = pesos[0];
      } else if (nota == 'A2') {
        currentPont = pesos[1];
      } else if (nota == 'B1') {
        currentPont = pesos[2];
      } else if (nota == 'B2') {
        currentPont = pesos[3];
      } else if (nota == 'B3') {
        currentPont = pesos[4];
      } else if (nota == 'B4') {
        currentPont = pesos[5];
      } else if (nota == 'B5') {
        currentPont = pesos[6];
      } else if (nota == 'C') {
        currentPont = pesos[7];
      } else {
        currentPont = 0;
      }
      sumPont += currentPont;
    });
    
    ranking.push({
        pesquisador: pesq,
        pontos: sumPont,
    })

  });
  ranking.sort((a: any, b: any) => (a.pontos > b.pontos) ? 1 : (a.pontos == b.pontos) ? ((a.pesquisador > b.pesquisador) ? 1 : -1) : -1)

  res.send(ranking)
})

var server = lpserver.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
  server.close();
}

export { server, closeServer }