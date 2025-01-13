Feature: Image Registration  | Funcionalidade: Registro de Imagens

  Scenario: Submitting an image with invalid inputs  | Cenário: Enviando uma imagem com entradas inválidas
    Given I am on the image registration page  | Dado que estou na página de registro de imagens
    When I enter "" in the title field  | Quando eu insiro "" no campo de título
    Then I enter "" in the URL field  | Então eu insiro "" no campo de URL
    Then I click the submit button  | Então eu clico no botão de envio
    Then I should see "Please type a title for the image" message above the title field  | Então devo ver a mensagem "Por favor, insira um título para a imagem" acima do campo de título
    And I should see "Please type a valid URL" message above the imageUrl field  | E devo ver a mensagem "Por favor, insira uma URL válida" acima do campo de URL
    And I should see an exclamation icon in the title and URL fields  | E devo ver um ícone de exclamação nos campos de título e URL
  
  Scenario: Submitting an image with valid inputs using enter key  | Cenário: Enviando uma imagem com entradas válidas usando a tecla Enter
    Given I am on the image registration page  | Dado que estou na página de registro de imagens
    When I enter "Alien BR" in the title field  | Quando eu insiro "Alien BR" no campo de título
    Then I should see a check icon in the title field  | Então devo ver um ícone de verificação no campo de título
    When I enter "https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg" in the URL field  | Quando eu insiro "https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg" no campo de URL
    Then I should see a check icon in the imageUrl field  | Então devo ver um ícone de verificação no campo de URL
    Then I can hit enter to submit the form  | Então posso pressionar Enter para enviar o formulário
    And the list of registered images should be updated with the new item  | E a lista de imagens registradas deve ser atualizada com o novo item
    And the new item should be stored in the localStorage  | E o novo item deve ser armazenado no localStorage
    Then The inputs should be cleared  | Então os campos de entrada devem ser limpos

  Scenario: Submitting an image and updating the list  | Cenário: Enviando uma imagem e atualizando a lista
    Given I am on the image registration page  | Dado que estou na página de registro de imagens
    Then I have entered "BR Alien" in the title field  | Então eu inseri "BR Alien" no campo de título
    Then I have entered "https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg" in the URL field  | Então eu inseri "https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg" no campo de URL
    When I click the submit button  | Quando eu clico no botão de envio
    And the list of registered images should be updated with the new item  | E a lista de imagens registradas deve ser atualizada com o novo item
    And the new item should be stored in the localStorage  | E o novo item deve ser armazenado no localStorage
    Then The inputs should be cleared  | Então os campos de entrada devem ser limpos

  Scenario: Refreshing the page after submitting an image clicking in the submit button  | Cenário: Atualizando a página após enviar uma imagem clicando no botão de envio
    Given I am on the image registration page  | Dado que estou na página de registro de imagens
    Then I have submitted an image by clicking the submit button  | Então enviei uma imagem clicando no botão de envio
    When I refresh the page  | Quando atualizo a página
    Then I should still see the submitted image in the list of registered images  | Então ainda devo ver a imagem enviada na lista de imagens registradas
