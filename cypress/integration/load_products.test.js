describe("Load Products", () => {
  before(() => {
    cy.visit("localhost:8080/");
  });
  it("Loads first and last product", () => {
    cy.get("#prod-1-name").should(
      "have.text",
      "Almond Toe Court Shoes, Patent Black"
    );
    cy.get("#prod-13-name").should(
      "have.text",
      "Mid Twist Cut-Out Dress, Pink"
    );
  });

  it("Adds item to cart and adjusts stock count & cart count", () => {
    cy.get(".cart-count").should("have.text", "0");
    cy.get("#prod-1-add").click();
    cy.get("#prod-1-quantity").should("have.text", "In Stock: 4");
    cy.get(".cart-count").should("have.text", "1");
  });
});
