class LoginPage {

    userNameInputTxt() {
        return cy.get('#email')
    }

    passwordInputTxt() {
        return cy.get('[type="password"]')
    }

    continueBtn() {
        return cy.get('[type="submit"]')
    }  
 
}

export default LoginPage