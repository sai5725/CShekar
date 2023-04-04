/// <reference types='cypress'/>

import LoginPage from '../pageobjects/loginPage'

describe('Login:', function () {
  beforeEach(function () {
    cy.cleanup();
    Cypress.config('baseUrl');
    cy.visit('/');
    cy.fixture('data').then((data) => {
      this.data = data;
    });
  })

    

  const loginPage = new LoginPage()

  it.only('Verify Login with invalid credentals', function () {
    loginPage.userNameInputTxt().type(this.data.userName)
    loginPage.passwordInputTxt().type(this.data.password)
    loginPage.continueBtn().click()
    cy.url().should('include', '/abc')
  })

  it('Verify Login with valid credentals', function () {
    loginPage.userNameInputTxt().type('as@gan.com')
    loginPage.passwordInputTxt().type('absssdd')
    loginPage.continueBtn().click()
    cy.url().should('include', )
  })
})