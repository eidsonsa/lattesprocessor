Feature:
Como um professor, aluno ou pesquisador
Eu quero realizar estudos comparativos com os pesquisadores, departamentos e grupos de pesquisas
Para fazer um ranking com eles e suas produções

Scenario: Comparar pesquisadores com quantidades diferentes de artigos pelo método “quantidade de artigos”
Given Eu estou na página “Estudos Comparativos”
And O professor “Paulo” tem “36” artigos e o professor “Sílvio” tem “32” artigos 
And Eu escolho o método “quantidade de artigos”
When Eu gero o ranking
Então “Paulo” fica na primeira linha com “36” artigos e “Sílvio” na segunda com “32” artigos.

Scenario: Comparar pesquisadores sem especificar os pesos pelo método “critérios de avaliação personalizados”
Given Eu estou na página “Estudos Comparativos”
And O professor “Paulo” tem “3” artigos “A1”, 2 artigos “A2” e 1 artigo “B1”
And O professor “Sílvio” tem “3” artigos “A1”, 2 artigo “A2” e 1 artigos “B4”
And Eu escolho o método “critérios de avaliação personalizados”
When Eu gero o ranking
Then Paulo” fica na primeira linha com “44” pontos, por ordem de prioridade, e “Sílvio” na segunda com “29” pontos, por ordem de prioridade.
