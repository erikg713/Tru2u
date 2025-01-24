describe("E2E: Pi Payment Full-Stack Flow", () => {
  beforeEach(() => {
    // Set up environment and visit the app
    cy.visit("http://localhost:3000"); // Replace with your app's URL
  });

  it("should allow the user to complete a Pi payment", () => {
    // Step 1: Log in (mock or real flow)
    cy.get("#loginButton").click();
    cy.get("#username").type("test-user");
    cy.get("#password").type("password123");
    cy.get("#submitLogin").click();

    // Step 2: Initiate the payment
    cy.get("#payButton").click();

    // Step 3: Fill payment details
    cy.get("#amountInput").type("3.14");
    cy.get("#memoInput").type("E2E Test Payment");
    cy.get("#submitPayment").click();

    // Step 4: Verify payment creation
    cy.contains("Payment created successfully").should("be.visible");

    // Step 5: Verify backend transaction status
    cy.request("GET", "/api/payments").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq("completed");
    });
  });

  it("should handle invalid payment gracefully", () => {
    // Step 1: Initiate the payment
    cy.get("#payButton").click();

    // Step 2: Fill invalid payment details
    cy.get("#amountInput").type("0"); // Invalid amount
    cy.get("#memoInput").type("Invalid Payment Test");
    cy.get("#submitPayment").click();

    // Step 3: Verify error message
    cy.contains("Invalid payment amount").should("be.visible");
  });
});
