describe("Invalid login", () => {
  beforeEach(() => {
    cy.accessSignupPage();
  });
  it("loginFail", () => {
    cy.loginFail();
  });
});
