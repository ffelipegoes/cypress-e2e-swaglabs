///<reference types="cypress"/>

describe("Successfully tests", () => {
  beforeEach(() => {
    cy.accessSignupPage();
    cy.login();
  });

  it("CheckoutFlow", () => {
    cy.AddToCart();
    cy.Checkout();
  });
  it("RemovingProducts", () => {
    cy.AddToCart();
    cy.RemovingProducts();
  });

  it("RemovingProductsOnCart", () => {
    cy.AddToCart();
    cy.RemovingProductsOnCart();
  });
});

describe("Invalid login", () => {
  beforeEach(() => {
    cy.accessSignupPage();
  });
  it("loginFail", () => {
    cy.loginFail();
  });
});
