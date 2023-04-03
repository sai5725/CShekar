/// <reference types='cypress'/>

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

  it('Verify Login with invalid credentals', function () {
    cy.get('#email').type('as@gan.com')
    cy.get('[type="password"]').type('absssdd')
    cy.get('[type="submit"]').click()
    cy.url().should('include', '/abc')
  })

  it('Verify Login with valid credentals', function () {
    cy.get('#email').type()
    cy.get('[type="password"]').type()
    cy.get('[type="submit"]').click()
    cy.url().should('include', )
  })
})