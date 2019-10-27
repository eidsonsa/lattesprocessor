import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({ Given, And, When, Then }) {
    Given(/^Eu estou na página “Estudos Comparativos” $/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('LattesProcessor');
        await $("a[name='estudosComparativos']").click();
    })

    And(/^O professor “Paulo” tem “3” artigos “A1”, 2 artigos “A2” e 1 artigo “B1””$/, async () => {
        
    });

    And(/^O professor “Sílvio” tem “3” artigos “A1”, 2 artigo “A2” e 1 artigos “B4”$/, async () => {
        
    });

    And(/^Eu escolho o método “critérios de avaliação personalizados”$/, async () => {
        await $("input[name='CriteriosPersonalizados'").click();
    });

    When(/^Eu gero o ranking$/, async () => {
        await $("button[name='gerarRanking']").click();
    });

    Then(/^Paulo” fica na primeira linha com “44” pontos, por ordem de prioridade, e “Sílvio” na segunda com “29” pontos, por ordem de prioridade.$/, async () => {
        
    });

}) 