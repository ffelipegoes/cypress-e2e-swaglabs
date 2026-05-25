Cypress.Commands.add("AddToCart", () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
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

Cypress.Commands.add("CheckCartState", () => {
  cy.get('[data-test="shopping-cart-badge"]').should("be.visible");
});
