///<reference types="cypress"/>
describe("Successfully Login", () => {
  beforeEach(() => {
    cy.accessSignupPage();
  });

  it("Login", () => {
    cy.login();
  });
});
