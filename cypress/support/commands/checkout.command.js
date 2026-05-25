import { userData } from "../utils/data";

Cypress.Commands.add("AddToCart", () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
});

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
