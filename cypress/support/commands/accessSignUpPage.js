import { baseUrl } from "../utils/data";

Cypress.Commands.add("accessSignupPage", () => {
  cy.visit(baseUrl);
  cy.get(".login_logo").should("have.text", "Swag Labs");
});
