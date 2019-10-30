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

    And(/^O professor "([^\"]*)" tem "(\d*)" artigos “A1”, "(\d*)" artigos “A2” e "(\d*)" artigo “B1”$/, async (prof, qtdA1, qtdA2, qtdB1) => {
        
    });

    And(/^O professor "([^\"]*)" tem "(\d*)" artigos “A1”, "(\d*)" artigo “A2” e "(\d*)" artigos “B4”$/, async (prof, qtdA1, qtdA2, qtdB4) => {
        
    });

    And(/^Eu escolho o método “critérios de avaliação personalizados”$/, async () => {
        await $("input[name='CriteriosPersonalizados'").click();
    });

    When(/^Eu gero o ranking$/, async () => {
        await $("button[name='gerarRanking']").click();
    });

    Then(/^"([^\"]*)" fica na primeira linha com "(\d*)" pontos e "([^\"]*)" na segunda com "(\d*)" pontos, por ordem de prioridade.$/, async (prof1, pontos1, prof2, pontos2) => {
        
    });

    And(/^O professor "([^\"]*)" tem "(\d*)" artigos e o professor "([^\"]*)" tem "(\d*)" artigos”$/, async (prof1, qtd1, prof2, qtd2) => {
        
    });

    And(/^Eu escolho o método “quantidade de artigos””$/, async () => {
        await $("input[name='CriteriosPersonalizados'").click();
    });

    Then(/^"([^\"]*)" fica na primeira linha com "(\d*)" artigos e "([^\"]*)" na segunda com "(\d*)" artigos.$/, async (prof1, qtd1, prof2, qtd2) => {
        
    });

    And(/^And eu atribuo os pesos "(\d*)" para “A1”, "(\d*)" para “A2”, "(\d*)" para “B1”, "(\d*)" para “B2”, "(\d*)" para “B3”, "(\d*)" para “B4”, "(\d*)" para “B5” e "(\d*)" para “C”$/, async(A1, A2, B1, B2, B3, B4, B5, C) => {
        await $("input[name='a1']").sendKeys(A1);
        await $("input[name='a2']").sendKeys(A2);
        await $("input[name='b1']").sendKeys(B1);
        await $("input[name='b2']").sendKeys(B2);
        await $("input[name='b3']").sendKeys(B3);
        await $("input[name='b4']").sendKeys(B4);
        await $("input[name='b5']").sendKeys(B5);
        await $("input[name='c']").sendKeys(C);
    });
}) 