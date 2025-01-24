describe("E2E: Pi Payment Flow", () => {
  it("should allow a user to make a Pi payment", () => {
    // Visit the frontend app
    cy.visit("http://localhost:3000"); // Replace with your app's URL

    // Authenticate the user (mock this if needed)
    cy.get("#loginButton").click();
    cy.get("#username").type("test-user");
    cy.get("#password").type("password123");
    cy.get("#submitLogin").click();

    // Trigger payment flow
    cy.get("#payButton").click();

    // Fill in payment details
    cy.get("#amountInput").type("3.14");
    cy.get("#memoInput").type("E2E Test Payment");
    cy.get("#submitPayment").click();

    // Verify payment creation
    cy.contains("Payment created successfully").should("be.visible");

    // Check backend logs or network calls for validation
    cy.request("GET", "/api/payments").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("status", "completed");
    });
  });
});
