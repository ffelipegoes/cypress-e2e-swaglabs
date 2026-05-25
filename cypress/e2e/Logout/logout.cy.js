///<reference types="cypress"/>
describe("Successfully Logout", () => {
  beforeEach(() => {
    cy.accessSignupPage();
    cy.login();
  });

  it("Logout", () => {
    cy.logout();
  });
});
