class RegisterForm {
    elements ={
        titleInput: () => cy.get('#title'),
        titleFeedback: () => cy.get('#titleFeedback'),
        imageUrlInput: () => cy.get('#imageUrl'),
        urlFeedback: () => cy.get('#urlFeedback'),
        submitBtn: () => cy.get('#btnSubmit'),
        cardList: () => cy.get('#card-list')
    }

    typeTitle(text){
        if(!text) return;
        this.elements.titleInput().type(text)
      }
    typeUrl(text){
        if(!text) return;
        this.elements.imageUrlInput().type(text)
      }
    clickSubmit(){
        this.elements.submitBtn().click()
      }
}

export default RegisterForm;
//module.exports(RegisterForm);