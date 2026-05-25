///<reference types="cypress"/>
describe("Removing Products", () => {
  beforeEach(() => {
    cy.accessSignupPage();
    cy.login();
  });
  it("RemovingProducts", () => {
    cy.AddToCart();
    cy.RemovingProducts();
  });
});
