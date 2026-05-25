// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { credentials, baseUrl, userData } from "./utils/data";

Cypress.Commands.add("accessSignupPage", () => {
  cy.visit(baseUrl);
  cy.get(".login_logo").should("have.text", "Swag Labs");
});

Cypress.Commands.add("login", () => {
  cy.get('input[placeholder="Username"]').type(credentials.standardUser);
  cy.get('input[placeholder="Password"]').type(credentials.password);
  cy.get(".submit-button").click();
  cy.get(".title").should("have.text", "Products");
});

Cypress.Commands.add("loginFail", () => {
  cy.get('input[placeholder="Username"]').type(credentials.standardUser);
  cy.get('input[placeholder="Password"]').type(credentials.wrongPassword);
  cy.get(".submit-button").click();
  cy.get('[data-test="error"]').should(
    "have.text",
    "Epic sadface: Username and password do not match any user in this service",
  );
});

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

Cypress.Commands.add("RemovingProducts", () => {
  cy.get('[data-test="remove-sauce-labs-backpack"]').click();
  cy.get(".btn_primary").should("have.text", "Add to cart");
});

Cypress.Commands.add("RemovingProductsOnCart", () => {
  cy.get('[data-test="remove-sauce-labs-backpack"]').click();
  cy.get(".btn_primary").should("have.text", "Add to cart");
  cy.get('[data-test="shopping-cart-link"]').click();
  cy.get('[data-test="title"]').should("have.text", "Your Cart");
  cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
  cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click();
  cy.get('[data-test="remove-sauce-labs-onesie"]').click();
  cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click();
  cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
  cy.get('[data-test="continue-shopping"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should(
    "have.text",
    "Add to cart",
  );
});
