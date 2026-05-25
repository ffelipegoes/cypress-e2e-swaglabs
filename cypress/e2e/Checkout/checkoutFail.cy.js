///<reference types="cypress"/>
describe("Checkout Problems", () => {
  beforeEach(() => {
    cy.accessSignupPage();
    cy.login();
  });
  it("CheckoutFirstNameError", () => {
    cy.AddToCart();
    cy.CheckoutFirstNameError();
  });

  it("CheckoutSecondNameError", () => {
    cy.AddToCart();
    cy.CheckoutLastNameError();
  });

  it("CheckoutPostalCodeError", () => {
    cy.AddToCart();
    cy.CheckoutPostalCodeError();
  });
});
