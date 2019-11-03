Feature: Importar Lattes
As a: Pesquisador de um grupo de pesquisa
I want to: Importar arquivos xml contendo o currículo lattes de pesquisadores
So that: Seja possível realizar um ranqueamento dos pesquisadores, departamentos e grupos de pesquisa, baseado em suas publicações.

Scenario: Fazer upload de único xml com sucesso
Given eu estou na página de “importar Lattes”
And as publicações “Requisitos de software para modelo de cascata” e “Estudo sobre Metodologias de Desenvolvimento Ágil” estão cadastradas no sistema,
And o arquivo “paulo_lattes.xml” tem as publicações “An extended triangulation to the Marching Cubes 33 algorithm” e “An IoT sensor and scenario survey for data researchers”
When eu selecionar para fazer o upload do arquivo “paulo_lattes.xml”
Then eu vejo uma mensagem de sucesso na tela
And o sistema tem as publicações “Requisitos de software para modelo de cascata”, “Estudo sobre Metodologias de Desenvolvimento Ágil”,  “An extended triangulation to the Marching Cubes 33 algorithm” e “An IoT sensor and scenario survey for data researchers”.