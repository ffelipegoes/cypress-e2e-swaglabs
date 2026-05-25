///<reference types="cypress"/>
describe("Removing Products on Cart", () => {
  beforeEach(() => {
    cy.accessSignupPage();
    cy.login();
  });
  it("RemovingProductsOnCart", () => {
    cy.AddToCart();
    cy.RemovingProductsOnCart();
  });
});
