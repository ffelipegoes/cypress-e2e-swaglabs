///<reference types="cypress"/>
describe("Successfully Login", () => {
  beforeEach(() => {
    cy.accessSignupPage();
    cy.login();
  });
  it("CheckoutFlow", () => {
    cy.AddToCart();
    cy.Checkout();
  });
});
