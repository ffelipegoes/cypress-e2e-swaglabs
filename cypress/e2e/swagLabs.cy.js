///<reference types="cypress"/>

describe('Testes no Sauce Demo', () => {

  beforeEach(()=>{
    cy.accessSignupPage()
  })

  it('passes', () => {

    cy.login()
  })

})