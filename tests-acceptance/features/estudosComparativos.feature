Feature:
Como um professor, aluno ou pesquisador
Eu quero realizar estudos comparativos com os pesquisadores, departamentos e grupos de pesquisas
Para fazer um ranking com eles e suas produções

Scenario: Comparar pesquisadores sem especificar os pesos pelo método “critérios de avaliação personalizados”
Given eu estou na página “Estudos Comparativos”
And eu escolho o método “critérios de avaliação personalizados”
And o professor “Paulo” tem “3” artigos “A1”, 2 artigos “A2” e 1 artigo “B1”
And o professor “Sílvio” tem “3” artigos “A1”, 2 artigo “A2” e 1 artigos “B4”
And eu não atribuo pesos a esses critérios de avaliação
When eu gero o ranking
Then automaticamente são atribuídos os pesos “8” para “A1”, “7” para “A2”, “6” para “B1”, “5” para “B2”, “4” para “B3”, “3” para “B4”, “2” para “B5” e “1” para “C”
And “Paulo” fica na primeira linha com “44” pontos e “Sílvio” na segunda com “29” pontos.

