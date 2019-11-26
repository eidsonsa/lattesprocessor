import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let xml2js = require('xml2js');
let fs = require('fs');

// IMPORTANT: Remember to change to Pesquisador!

// let getPublicacoes = async (xmlFile) => {
//   let parser = new xml2js.Parser({ attrkey: "ATTR" });
//   let xml_string = fs.readFileSync(xmlFile, "utf8");

//   parser.parseString(xml_string, function (error, result) {
//     if (error === null) {
//       // implementacao depende do formato xml a ser recebido...
//       // retornamos um array de titulos de publicacoes
//       // caso o formato seja inválido, retorne -1
//     } else {
//       return (-1);
//     }
//   });
// }

// defineSupportCode(function ({ Given, When, Then }) {
//   Given(/^eu estou na tela de "Importar Lattes"$/, async () => {
//     await browser.get("http://localhost:4200/");
//     await expect(browser.getTitle()).to.eventually.equal('LattesProcessor');
//     await $("a[name='importar-lattes']").click();
//   })

//   Given(/^as publicações "([^\"]*)" e "([^\"]*)" estão cadastradas no sistema$/, async (p1, p2) => {
//     var allpublicacoes: ElementArrayFinder = element.all(by.name('publicacoes-list'));
//     await allpublicacoes;

//     var publi1 = allpublicacoes.filter(elem =>
//       elem.getText().then(text => text === p1));
//     await publi1;
//     await publi1.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));

//     var publi2 = allpublicacoes.filter(elem =>
//       elem.getText().then(text => text === p2));
//     await publi2;
//     await publi2.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
//   });

//   Given(/^o arquivo "([^\"]*)" tem as publicações "([^\"]*)" e "([^\"]*)"$/, async (xmlFile, p1, p2) => {
//     let publicacoesArray = getPublicacoes(xmlFile);
//     await publicacoesArray;

//     await expect(publicacoesArray[0].to.eventually.equal(p1));
//     await expect(publicacoesArray[1].to.eventually.equal(p2));

//   });

//   When(/^eu selecionar para fazer o upload do arquivo "([^\"]*)"$/, async (fileName) => {
//     await $("input[name='file-path']").sendKeys(<string>fileName);
//   });

//   Then(/^o sistema tem as publicações "([^\"]*)", "([^\"]*)", "([^\"]*)" e "([^\"]*)"$/, async (p1, p2, p3, p4) => {
//     var allpublicacoes: ElementArrayFinder = element.all(by.name('publicacoes-list'));
//     await allpublicacoes;

//     var publi1 = allpublicacoes.filter(elem =>
//       elem.getText().then(text => text === p1));
//     await publi1;
//     await publi1.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));

//     var publi2 = allpublicacoes.filter(elem =>
//       elem.getText().then(text => text === p2));
//     await publi2;
//     await publi2.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));

//     var publi3 = allpublicacoes.filter(elem =>
//       elem.getText().then(text => text === p3));
//     await publi3;
//     await publi3.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));

//     var publi4 = allpublicacoes.filter(elem =>
//       elem.getText().then(text => text === p4));
//     await publi4;
//     await publi4.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
//   });

//   // Segundo cenario
//   Given(/^eu estou na tela de "Importar Lattes"$/, async () => {
//     await browser.get("http://localhost:4200/");
//     await expect(browser.getTitle()).to.eventually.equal('LattesProcessor');
//     await $("a[name='importar-lattes']").click();
//   })

//   Given(/^as publicações "([^\"]*)" e "([^\"]*)" estão cadastradas no sistema$/, async (p1, p2) => {
//     var allpublicacoes: ElementArrayFinder = element.all(by.name('publicacoes-list'));
//     await allpublicacoes;

//     var publi1 = allpublicacoes.filter(elem =>
//       elem.getText().then(text => text === p1));
//     await publi1;
//     await publi1.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));

//     var publi2 = allpublicacoes.filter(elem =>
//       elem.getText().then(text => text === p2));
//     await publi2;
//     await publi2.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
//   });

//   Given(/^o arquivo "([^\"]*)" tem a publicação "([^\"]*)"$/, async (xmlFile, p) => {
//     let publicacoesArray = getPublicacoes(xmlFile);
//     await publicacoesArray;

//     await expect(publicacoesArray[0].to.eventually.equal(p));
//   });

//   Given(/^o arquivo "([^\"]*)" tem a publicação "([^\"]*)"$/, async (xmlFile, p) => {
//     let publicacoesArray = getPublicacoes(xmlFile);
//     await publicacoesArray;

//     await expect(publicacoesArray[0].to.eventually.equal(p));
//   });

//   When(/^eu selecionar para fazer o upload dos arquivos "([^\"]*)" e "([^\"]*)"$/, async (fileName1, fileName2) => {
//     let stringPaths = `${fileName1}, ${fileName2}`;
//     await $("input[name='multiple-file-paths']").sendKeys(<string>stringPaths);
//   });

//   Then(/^o sistema tem as publicações "([^\"]*)", "([^\"]*)", "([^\"]*)" e "([^\"]*)"$/, async (p1, p2, p3, p4) => {
//     var allpublicacoes: ElementArrayFinder = element.all(by.name('publicacoes-list'));
//     await allpublicacoes;

//     var publi1 = allpublicacoes.filter(elem =>
//       elem.getText().then(text => text === p1));
//     await publi1;
//     await publi1.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));

//     var publi2 = allpublicacoes.filter(elem =>
//       elem.getText().then(text => text === p2));
//     await publi2;
//     await publi2.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));

//     var publi3 = allpublicacoes.filter(elem =>
//       elem.getText().then(text => text === p3));
//     await publi3;
//     await publi3.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));

//     var publi4 = allpublicacoes.filter(elem =>
//       elem.getText().then(text => text === p4));
//     await publi4;
//     await publi4.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
//   });

//   // Terceiro cenario
//   Given(/^eu estou na tela de "Importar Lattes"$/, async () => {
//     await browser.get("http://localhost:4200/");
//     await expect(browser.getTitle()).to.eventually.equal('LattesProcessor');
//     await $("a[name='importar-lattes']").click();
//   })

//   Given(/^as publicações "([^\"]*)" e "([^\"]*)" estão cadastradas no sistema$/, async (p1, p2) => {
//     var allpublicacoes: ElementArrayFinder = element.all(by.name('publicacoes-list')).then((itens) => {
//       expect(itens.length).toBe(2);
//     });

//     await allpublicacoes;

//     var publi1 = allpublicacoes.filter(elem =>
//       elem.getText().then(text => text === p1));
//     await publi1;
//     await publi1.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));

//     var publi2 = allpublicacoes.filter(elem =>
//       elem.getText().then(text => text === p2));
//     await publi2;
//     await publi2.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
//   });

//   When(/^eu selecionar para fazer o upload, sem nenhum arquivo selecionado$/, async () => {
//     await $("input[name='file-path']").sendKeys(<string>'');
//   });

//   Then(/^eu estou na página de "([^\"]*)"$/, async (title) => {
//     expect(browser.getTitle()).to.eventually.equal(title);
//   });

//   Then(/^apenas as publicações "([^\"]*)" e "([^\"]*)" estão cadastradas no sistema$/, async (p1, p2) => {
//     var allpublicacoes: ElementArrayFinder = element.all(by.name('publicacoes-list')).then((itens) => {
//       expect(itens.length).toBe(2);
//     });
//     await allpublicacoes;

//     var publi1 = allpublicacoes.filter(elem =>
//       elem.getText().then(text => text === p1));
//     await publi1;
//     await publi1.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));

//     var publi2 = allpublicacoes.filter(elem =>
//       elem.getText().then(text => text === p2));
//     await publi2;
//     await publi2.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
//   });

//   // Quarto Cenario
//   Given(/^eu estou na tela de "Importar Lattes"$/, async () => {
//     await browser.get("http://localhost:4200/");
//     await expect(browser.getTitle()).to.eventually.equal('LattesProcessor');
//     await $("a[name='importar-lattes']").click();
//   })

//   Given(/^as publicações "([^\"]*)" e "([^\"]*)" estão cadastradas no sistema$/, async (p1, p2) => {
//     var allpublicacoes: ElementArrayFinder = element.all(by.name('publicacoes-list')).then((itens) => {
//       expect(itens.length).toBe(2);
//     });

//     await allpublicacoes;

//     var publi1 = allpublicacoes.filter(elem =>
//       elem.getText().then(text => text === p1));
//     await publi1;
//     await publi1.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));

//     var publi2 = allpublicacoes.filter(elem =>
//       elem.getText().then(text => text === p2));
//     await publi2;
//     await publi2.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
//   });

//   Given(/^o arquivo "([^\"]*)" tem um formato inválido$/, async (xmlFile) => {
//     let publicacoesArray = getPublicacoes(xmlFile);
//     await publicacoesArray;

//     expect(publicacoesArray).toEqual(-1);
//   });

//   When(/^eu selecionar para fazer o upload do arquivo "([^\"]*)"$/, async (fileName) => {
//     await $("input[name='file-path']").sendKeys(<string>fileName);
//   });

//   Then(/^apenas as publicações "([^\"]*)" e "([^\"]*)" estão cadastradas no sistema$/, async (p1, p2) => {
//     var allpublicacoes: ElementArrayFinder = element.all(by.name('publicacoes-list')).then((itens) => {
//       expect(itens.length).toBe(2);
//     });
//     await allpublicacoes;

//     var publi1 = allpublicacoes.filter(elem =>
//       elem.getText().then(text => text === p1));
//     await publi1;
//     await publi1.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));

//     var publi2 = allpublicacoes.filter(elem =>
//       elem.getText().then(text => text === p2));
//     await publi2;
//     await publi2.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
//   });
// })