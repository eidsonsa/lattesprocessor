import { Pesquisador } from '../common/pesquisador';
import { CadastroDePesquisadores } from './cadastrodepesquisadores';
import { Publicacao } from '../common/publicacao';

let xml2js = require('xml2js');

export class LattesFactory {
  cadastroPesq: CadastroDePesquisadores;

  // injecting
  constructor(c: CadastroDePesquisadores) {
    this.cadastroPesq = c;
  }

  // Read publicacoes from a xml of a lattes
  importLattes(xml_string: string): Pesquisador {
    let resp = null;

    let parser = new xml2js.Parser({ attrkey: "ATTR" });
    parser.parseString(xml_string, (error: any, result: any) => {
      if (error === null) {
        let tempPesquisador = new Pesquisador();

        // gets name from xml and sets on temporary pesquisador
        let name = result['CURRICULO-VITAE']['DADOS-GERAIS'][0].ATTR['NOME-COMPLETO'];
        tempPesquisador.nome = name;

        let bibliography = result['CURRICULO-VITAE']['PRODUCAO-BIBLIOGRAFICA'][0];
        let events = bibliography['TRABALHOS-EM-EVENTOS'][0]['TRABALHO-EM-EVENTOS'];
        let articles = bibliography['ARTIGOS-PUBLICADOS'][0]['ARTIGO-PUBLICADO'];

        // Still missing forEach for journals. Needed??
        // let journals = bibliography['TEXTOS-EM-JORNAIS-OU-REVISTAS'][0]['TEXTO-EM-JORNAL-OU-REVISTA'];

        // Create publicacoes by the xml and add them to the pesquisador
        events.forEach((e: any) => {
          let publiName = e['DADOS-BASICOS-DO-TRABALHO'][0].ATTR['TITULO-DO-TRABALHO'];
          let publiPeriodic = e['DETALHAMENTO-DO-TRABALHO'][0].ATTR['NOME-DO-EVENTO'];
          let publi = new Publicacao(publiName, publiPeriodic);
          tempPesquisador.addPublicacao(publi);
        });

        articles.forEach((a: any) => {
          let publiName = a['DADOS-BASICOS-DO-ARTIGO'][0].ATTR['TITULO-DO-ARTIGO'];
          let publiPeriodic = a['DETALHAMENTO-DO-ARTIGO'][0].ATTR['TITULO-DO-PERIODICO-OU-REVISTA'];
          let publi = new Publicacao(publiName, publiPeriodic);
          tempPesquisador.addPublicacao(publi);
        });

        resp = this.cadastroPesq.addPesquisador(tempPesquisador);
      }
    });

    return resp;
  }
}