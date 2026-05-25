import { baseUrl, credentials } from "../utils/data";

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
