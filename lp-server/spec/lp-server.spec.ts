import request = require("request-promise");
import { closeServer } from '../lp-server';

var base_url = "http://localhost:3000/";

describe("O servidor", () => {
  var server: any;

  beforeAll(() => { server = require('../lp-server') });

  afterAll(() => { server.closeServer() });

  // add server tests here

  // IMPORTANT: Remember to change to Pesquisador
  
  // it("inicialmente retorna uma lista de publicações vazia", () => {
  //   return request.get(base_url + "publications")
  //     .then(body =>
  //       expect(body).toBe("[]")
  //     )
  //     .catch(e =>
  //       expect(e).toEqual(null)
  //     );
  // })

  // it("ignora publicacoes duplicadas", () => {
  //   let publicacao = {
  //     "json": {
  //       "titulo": "Requisitos de software para modelo de cascata",
  //       "pesquisadores": [
  //         "Paulo Medeiros de Miranda Neto",
  //         "Márcio Aquino da Silva",
  //         "Arthur Henrique Aquino"
  //       ]
  //     }
  //   };

  //   let respostaInicial = `{
  //     "titulo": "Requisitos de software para modelo de cascata",
  //     "pesquisadores": [
  //       "Paulo Medeiros de Miranda Neto",
  //       "Márcio Aquino da Silva",
  //       "Arthur Henrique Aquino"
  //     ]
  //   }`;

  //   return request.post(base_url + "publications", publicacao).then(body => {
  //     expect(body).toEqual({ failure: "publicacao ja cadastrada" });
  //     return request.get(base_url + "publications").then(body => expect(body).toBe(respostaInicial)).catch(e => expect(e).toEqual(null));
  //   });
  // })

  // it("cadastra publicacoes corretamente", () => {
  //   let publicacao = {
  //     "json": {
  //       "titulo": "Requisitos de software para modelo de cascata",
  //       "pesquisadores": [
  //         "Paulo Medeiros de Miranda Neto",
  //         "Márcio Aquino da Silva",
  //         "Arthur Henrique Aquino"
  //       ]
  //     }
  //   };

  //   let resposta = `{
  //     "titulo": "Requisitos de software para modelo de cascata",
  //     "pesquisadores": [
  //       "Paulo Medeiros de Miranda Neto",
  //       "Márcio Aquino da Silva",
  //       "Arthur Henrique Aquino"
  //     ]
  //   }`;

  //   return request.post(base_url + "publications", publicacao).then(body => {
  //     expect(body).toEqual({ success: "publicacao cadastrada com sucesso" });
  //     return request.get(base_url + "publications").then(body => expect(body).toBe(resposta)).catch(e => expect(e).toEqual(null));
  //   });
  // })

})