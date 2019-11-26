Feature: Importar Lattes
As a: Pesquisador de um grupo de pesquisa
I want to: Importar arquivos xml contendo o currículo lattes de pesquisadores
So that: Seja possível realizar um ranqueamento dos pesquisadores, departamentos e grupos de pesquisa, baseado em suas publicações.

Scenario: Fazer upload de único xml com sucesso
Given eu estou na página de “Importar Lattes”
And as publicações “Requisitos de software para modelo de cascata” e “Estudo sobre Metodologias de Desenvolvimento Ágil” estão cadastradas no sistema,
And o arquivo “paulo_lattes.xml” tem as publicações “An extended triangulation to the Marching Cubes 33 algorithm” e “An IoT sensor and scenario survey for data researchers”
When eu selecionar para fazer o upload do arquivo “paulo_lattes.xml”
Then eu vejo uma mensagem de sucesso na tela
And o sistema tem as publicações “Requisitos de software para modelo de cascata”, “Estudo sobre Metodologias de Desenvolvimento Ágil”,  “An extended triangulation to the Marching Cubes 33 algorithm” e “An IoT sensor and scenario survey for data researchers”.

Scenario: Fazer upload de múltiplos xml com sucesso
Given eu estou na página de “Importar Lattes”
And as publicações “Requisitos de software para modelo de cascata” e “Estudo sobre Metodologias de Desenvolvimento Ágil” estão cadastradas no sistema,
And o arquivo “a_lattes.xml” tem a publicação “An extended triangulation to the Marching Cubes 33 algorithm”
And o arquivo “b_lattes.xml” tem a publicação “An IoT sensor and scenario survey for data researchers”
When eu selecionar para fazer o upload dos arquivos “a_lattes.xml” e “b_lattes.xml”
Then eu vejo uma mensagem de sucesso na tela
And o sistema tem as publicações “Requisitos de software para modelo de cascata”, “Estudo sobre Metodologias de Desenvolvimento Ágil”,  “An extended triangulation to the Marching Cubes 33 algorithm” e “An IoT sensor and scenario survey for data researchers”.

Scenario: fazer upload sem arquivos selecionados
Given eu estou na tela de “Importar Lattes”
And as publicações “Requisitos de software para modelo de cascata” e “Estudo sobre Metodologias de Desenvolvimento Ágil” estão cadastradas no sistema,
When eu selecionar para fazer o upload, sem nenhum arquivo selecionado
Then eu estou na página de “Importar Lattes”
And eu vejo uma mensagem de erro na tela
And apenas as publicações “Requisitos de software para modelo de cascata” e “Estudo sobre Metodologias de Desenvolvimento Ágil” estão cadastradas no sistema.

Scenario: Fazer upload de um xml com formato inválido
Given eu estou na página de “importar Lattes”
And as publicações “Requisitos de software para modelo de cascata” e “Estudo sobre Metodologias de Desenvolvimento Ágil” estão cadastradas no sistema
And o arquivo “teste_lattes.xml” tem um formato inválido
When eu selecionar para fazer o upload do arquivo “teste_lattes.xml”
Then eu vejo um alerta de erro na tela
And apenas as publicações “Requisitos de software para modelo de cascata” e “Estudo sobre Metodologias de Desenvolvimento Ágil” estão cadastradas no sistema.
