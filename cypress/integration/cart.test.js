describe("Shopping Bag", () => {
  before(() => {
    cy.visit("localhost:8080/");
  });

  it("Empty bag when no items added", () => {
    cy.get(".cart").click();
    cy.get(".empty-cart-msg").should("have.text", "Shopping bag is empty.");
    cy.get("#shopping-bag").should("include.text", "Items in Bag - 0");
    cy.get(".close-icon").click();
  });

  it("Adding an item hides cart empty messages", () => {
    cy.get("#prod-1-quantity").should("have.text", "In Stock: 5");
    cy.get("#prod-1-add").click();
    cy.get(".cart").click();
    cy.get("#prod-1-quantity").should("have.text", "In Stock: 4");
    cy.get(".empty-cart-msg").should("not.have.text", "Shopping bag is empty.");
    cy.get("#shopping-bag").should("not.include.text", "Items in Bag - 0");
  });

  it("Updates shopping bag count when item added", () => {
    cy.get(".cart-count").should("have.text", "1");
  });

  it("Removes an item", () => {
    cy.get(".remove-icon").click();
    cy.get(".empty-cart-msg").should("have.text", "Shopping bag is empty.");
    cy.get("#shopping-bag").should("include.text", "Items in Bag - 0");
    cy.get(".close-icon").click();
  });

  it("Updates shopping bag count when item removed", () => {
    cy.get(".cart-count").should("have.text", "0");
  });
});
