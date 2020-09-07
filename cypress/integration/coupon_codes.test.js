describe("Load Products", () => {
  before(() => {
    cy.visit("localhost:8080/");
  });

  it("Fiveoff promo code", () => {
    cy.get("#prod-1-add").click();
    cy.get(".cart").click();
    cy.get(".total-amt").should("have.text", "Total: £99.00");
    cy.get(".discounted-total-amt").should("not.exist");
    cy.get(".strikethrough").should("not.exist");
    cy.get("input.coupon").type("fiveoff");
    cy.get(".strikethrough").should("exist");
    cy.get(".discounted-total-amt").should(
      "have.text",
      "Discounted Total: £94.00"
    );
    cy.get("input.coupon").clear();
  });

  it("Tenner promo code", () => {
    cy.get(".total-amt").should("have.text", "Total: £99.00");
    cy.get(".discounted-total-amt").should("not.exist");
    cy.get(".strikethrough").should("not.exist");
    cy.get("input.coupon").type("tenner");
    cy.get(".strikethrough").should("exist");
    cy.get(".discounted-total-amt").should(
      "have.text",
      "Discounted Total: £89.00"
    );
  });

  it("tenner promo code errors if bag is less than £50", () => {
    cy.get(".remove-icon").click();
    cy.get(".close-icon").click();
    cy.get("#prod-2-add").click();
    cy.get(".cart").click();
    cy.get(".coupon-msg").should(
      "have.text",
      "Sorry, to get £10 off, your purchase must exceed $50!"
    );
    cy.get("input.coupon").clear();
  });

  it("Flipflop promo code works", () => {
    cy.get(".remove-icon").click();
    cy.get(".close-icon").click();
    cy.get("#prod-1-add").click();
    cy.get(".cart").click();
    cy.get(".total-amt").should("have.text", "Total: £99.00");
    cy.get(".discounted-total-amt").should("not.exist");
    cy.get(".strikethrough").should("not.exist");
    cy.get("input.coupon").type("flipflop");
    cy.get(".strikethrough").should("exist");
    cy.get(".discounted-total-amt").should(
      "have.text",
      "Discounted Total: £84.00"
    );
  });
  it("Flipflop promo code fails is no foot wear in cart", () => {
    cy.get("input.coupon").clear();
    cy.get(".remove-icon").click();
    cy.get(".close-icon").click();
    cy.get("#prod-6-add").click();
    cy.get(".cart").click();
    cy.get(".total-amt").should("have.text", "Total: £167.00");
    cy.get(".discounted-total-amt").should("not.exist");
    cy.get(".strikethrough").should("not.exist");
    cy.get("input.coupon").type("flipflop");
    cy.get("#shopping-bag").should(
      "include.text",
      "Purchase must include footwear for coupon to apply"
    );
    cy.get("#prod-4-add").click();
    cy.get("#shopping-bag").should(
      "not.include.text",
      "Purchase must include footwear for coupon to apply"
    );
    cy.get("#shopping-bag").should("include.text", "Discounted Total: £171.00");
    cy.get(".strikethrough").should("exist");
  });
  it("Flipflop promo code fails if cart is less than £75", () => {
    cy.get(".remove-icon")
      .first()
      .click();
    cy.get(".close-icon").click();
    cy.get(".coupon-msg").should(
      "include.text",
      "Purchase must exceed £75 for coupon to apply"
    );
  });
});
