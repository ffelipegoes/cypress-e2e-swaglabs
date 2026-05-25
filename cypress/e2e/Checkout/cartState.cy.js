///<reference types="cypress"/>
describe("Cart State", () => {
  beforeEach(() => {
    cy.accessSignupPage();
    cy.login();
    cy.AddToCart();
    cy.logout();
    cy.login();
  });
  it("CheckoutCartSavingBeforeLogout", () => {
    cy.CheckCartState();
  });
});
