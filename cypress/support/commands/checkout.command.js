import { userData } from "../utils/data";

Cypress.Commands.add("Checkout", () => {
  cy.get('[data-test="shopping-cart-link"]').click();
  cy.get('[data-test="title"]').should("have.text", "Your Cart");
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="firstName"]').type(userData.firstName);
  cy.get('[data-test="lastName"]').type(userData.lastName);
  cy.get('[data-test="postalCode"]').type(userData.Address.cep);
  cy.get('[data-test="continue"]').click();
  cy.get('[data-test="title"]').should("have.text", "Checkout: Overview");
  cy.get('[data-test="finish"]').click();
  cy.get('[data-test="title"]').should("have.text", "Checkout: Complete!");
  cy.get('[data-test="complete-header"]').should(
    "have.text",
    "Thank you for your order!",
  );
  cy.get('[data-test="back-to-products"]').click();
});

Cypress.Commands.add("CheckoutFirstNameError", () => {
  cy.get('[data-test="shopping-cart-link"]').click();
  cy.get('[data-test="title"]').should("have.text", "Your Cart");
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="lastName"]').type(userData.lastName);
  cy.get('[data-test="postalCode"]').type(userData.Address.cep);
  cy.get('[data-test="continue"]').click();
  cy.get('[data-test="error"]').should(
    "have.text",
    "Error: First Name is required",
  );
});

Cypress.Commands.add("CheckoutLastNameError", () => {
  cy.get('[data-test="shopping-cart-link"]').click();
  cy.get('[data-test="title"]').should("have.text", "Your Cart");
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="firstName"]').type(userData.firstName);
  cy.get('[data-test="postalCode"]').type(userData.Address.cep);
  cy.get('[data-test="continue"]').click();
  cy.get('[data-test="error"]').should(
    "have.text",
    "Error: Last Name is required",
  );
});

Cypress.Commands.add("CheckoutPostalCodeError", () => {
  cy.get('[data-test="shopping-cart-link"]').click();
  cy.get('[data-test="title"]').should("have.text", "Your Cart");
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="firstName"]').type(userData.firstName);
  cy.get('[data-test="lastName"]').type(userData.lastName);
  cy.get('[data-test="continue"]').click();
  cy.get('[data-test="error"]').should(
    "have.text",
    "Error: Postal Code is required",
  );
});
