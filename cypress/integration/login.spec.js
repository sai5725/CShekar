/// <reference types='cypress'/>

import LoginPage from '../pageobjects/loginPage'

describe('Login:', function () {
  beforeEach(function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.cleanup()
    cy.viewport(1536, 960)
    Cypress.config('baseUrl')
    cy.visit('/')
    cy.fixture('data').then(data => {
      this.data = data
    })
  })

  const loginPage = new LoginPage()

  it('Verify Login with invalid credentals', function () {
    loginPage.userNameInputTxt().type('as@gan.com')
    loginPage.passwordInputTxt().type('absssdd')
    loginPage.loginBtn().click()
    cy.url().should('include', '/abc')
  })

  it('Verify Login with valid credentals', function () {
    loginPage.userNameInputTxt().type('as@gan.com')
    loginPage.passwordInputTxt().type('absssdd')
    loginPage.loginBtn().click()
    cy.url().should('include', )
  })
})