import { CadastroDePesquisadores } from '../cadastrodepesquisadores';
import { Pesquisador } from '../../common/pesquisador';

// IMPORTANT: Change from Publicação to pesquisador!

// describe("O cadastro de publicacoes", () => {
//   let cadastro: cadastroPublicacoes;
//   beforeEach(() => cadastro = new cadastroPublicacoes());

//   it("inicialmente está vazio", () => {
//     expect(cadastro.getPublicacoes().length).toBe(0);
//   })

//   it("nao cadastra publicacoes duplicadas", () => {
//     expect(cadastro.getPublicacoes().length).toBe(0);

//     let p1: Publicacao = new Publicacao("Requisitos de software para modelo de cascata",
//       [
//         "Paulo Medeiros de Miranda Neto",
//         "Márcio Aquino da Silva",
//         "Arthur Henrique Aquino"
//       ]);
//     let p2: Publicacao = new Publicacao("Requisitos de software para modelo de cascata",
//       [
//         "Paulo Medeiros de Miranda Neto",
//         "Márcio Aquino da Silva",
//         "Arthur Henrique Aquino"
//       ]);
//     cadastro.cadastrar(p1);
//     cadastro.cadastrar(p2);

//     expect(cadastro.getPublicacoes().length).toBe(1);

//     let novaPublicacao = cadastro.getPublicacoes()[0];
//     expect(novaPublicacao.titulo).toBe("Requisitos de software para modelo de cascata");
//     expect(novaPublicacao.pesquisadores).toBe([
//       "Paulo Medeiros de Miranda Neto",
//       "Márcio Aquino da Silva",
//       "Arthur Henrique Aquino"
//     ]);
//   })

//   it("cadastra publicacoes corretamente", () => {
//     expect(cadastro.getPublicacoes().length).toBe(0);

//     let publicacao: Publicacao = new Publicacao("Requisitos de software para modelo de cascata",
//       [
//         "Paulo Medeiros de Miranda Neto",
//         "Márcio Aquino da Silva",
//         "Arthur Henrique Aquino"
//       ]);
//     cadastro.cadastrar(publicacao);
//     expect(cadastro.getPublicacoes().length).toBe(1);

//     let novaPublicacao = cadastro.getPublicacoes()[0];
//     expect(novaPublicacao.titulo).toBe("Requisitos de software para modelo de cascata");
//     expect(novaPublicacao.pesquisadores).toBe([
//       "Paulo Medeiros de Miranda Neto",
//       "Márcio Aquino da Silva",
//       "Arthur Henrique Aquino"
//     ]);
//   })
// })