class LoginPage {

    userNameInputTxt() {
        return cy.get('#email').clear()
    }

    passwordInputTxt() {
        return cy.get('[type="password"]').clear()
    }

    loginBtn() {
        return cy.get('[type="submit"]')
    }  
 
}

export default LoginPage