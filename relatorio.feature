Feature: Geração de relatórios a partir dos ranqueamentos
Como usuário
Quero acessar a página de ranqueamento
Assim posso gerar relatórios a partir do ranking dos pesquisadores

Scenario: Gerar com sucesso o relatório
Given que estou na “página de ranqueamento”
And há no sistema os pesquisadores “Paulo” com 2 periódicos avaliados em “A1” e “João com 1 periódico avaliado em “A1”
And eu adiciono “1*A1” como fórmula para ranqueamento
And eu seleciono “Pesquisadores” como tipo do relatório
When eu seleciono a opção gerar relatório
Then eu posso ver uma opção para baixar o relatório
And continuo na “página de ranqueamento”

