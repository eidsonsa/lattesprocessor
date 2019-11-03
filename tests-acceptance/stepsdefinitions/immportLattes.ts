import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let xml2js = require('xml2js');
let fs = require('fs');

let getPublicacoes = async (xmlFile) => {
  let parser = new xml2js.Parser({ attrkey: "ATTR" });
  let xml_string = fs.readFileSync(xmlFile, "utf8");

  parser.parseString(xml_string, function(error, result) {
    if(error === null) {
        // implementacao depende do formato xml a ser recebido...
        // retornamos um array de titulos de publicacoes
    }
    else {
        return(null);
    }
  });
}

defineSupportCode(function ({ Given, When, Then }) {
  Given(/^Eu estou na tela de Importar Lattes$/, async () => {
      await browser.get("http://localhost:4200/");
      await expect(browser.getTitle()).to.eventually.equal('LattesProcessor');
      await $("a[name='importar-lattes']").click();
  })

  Given(/^As publicações "([^\"]*)" e "([^\"]*)" estão cadastradas no sistema$/, async (p1, p2) => {
      var allpublicacoes : ElementArrayFinder = element.all(by.name('publicacoslist'));
      await allpublicacoes;

      var publi1 = allpublicacoes.filter(elem =>
        elem.getText().then(text => text === p1));
      await publi1;
      await publi1.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
      
      var publi2 = allpublicacoes.filter(elem =>
        elem.getText().then(text => text === p2));
      await publi2;
      await publi2.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
  });

  Given(/^O arquivo "([^\"]*)" tem as publicações "([^\"]*)" e "([^\"]*)"$/, async (xmlFile, p1, p2) => {
      let publicacoesArray = getPublicacoes(xmlFile);
      await publicacoesArray;

      await expect(publicacoesArray[0].to.eventually.equal(p1));
      await expect(publicacoesArray[1].to.eventually.equal(p2));
      
  });

  When(/^Eu selecionar para fazer o upload do arquivo "([^\"]*)"$/, async (fileName) => {
      await $("input[name='file-path']").sendKeys(<string> fileName);
  });

  Then(/^O sistema tem as publicações "([^\"]*)", "([^\"]*)", "([^\"]*)" e "([^\"]*)"$/, async (p1, p2, p3, p4) => {
    var allpublicacoes : ElementArrayFinder = element.all(by.name('publicacoslist'));
    await allpublicacoes;

    var publi1 = allpublicacoes.filter(elem =>
      elem.getText().then(text => text === p1));
    await publi1;
    await publi1.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    
    var publi2 = allpublicacoes.filter(elem =>
      elem.getText().then(text => text === p2));
    await publi2;
    await publi2.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));

    var publi3 = allpublicacoes.filter(elem =>
      elem.getText().then(text => text === p3));
    await publi3;
    await publi3.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));

    var publi4 = allpublicacoes.filter(elem =>
      elem.getText().then(text => text === p4));
    await publi4;
    await publi4.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
  });
})