describe('E2E: Pi Payment System', () => {
  beforeEach(() => {
    // Visit your app's homepage before each test
    cy.visit('/');
  });

  /**
   * Test: Successfully completing a payment
   */
  it('should allow the user to complete a Pi payment', () => {
    // Step 1: Log in (if authentication is required)
    cy.get('#loginButton').click();
    cy.get('#username').type('test-user');
    cy.get('#password').type('password123');
    cy.get('#submitLogin').click();

    // Step 2: Initiate a payment
    cy.get('#payButton').click();

    // Step 3: Enter payment details
    cy.get('#amountInput').type('3.14');
    cy.get('#memoInput').type('E2E Test Payment');
    cy.get('#submitPayment').click();

    // Step 4: Verify that the payment was created successfully
    cy.contains('Payment created successfully').should('be.visible');

    // Step 5: Verify backend payment status
    cy.request('GET', '/api/payments').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('status', 'completed');
    });
  });

  /**
   * Test: Handling invalid payment details
   */
  it('should display an error for invalid payments', () => {
    // Step 1: Initiate a payment
    cy.get('#payButton').click();

    // Step 2: Enter invalid payment details
    cy.get('#amountInput').type('0'); // Invalid amount
    cy.get('#memoInput').type('Invalid Payment Test');
    cy.get('#submitPayment').click();

    // Step 3: Verify the error message is displayed
    cy.contains('Invalid payment amount').should('be.visible');
  });

  /**
   * Test: Handling network errors during payment
   */
  it('should handle network errors gracefully', () => {
    // Mock a network error for `submitPayment`
    cy.intercept('POST', '/api/pi/submitPayment', {
      statusCode: 500,
      body: { message: 'Internal Server Error' },
    }).as('submitPaymentError');

    // Step 1: Initiate a payment
    cy.get('#payButton').click();

    // Step 2: Enter valid payment details
    cy.get('#amountInput').type('3.14');
    cy.get('#memoInput').type('Network Error Test');
    cy.get('#submitPayment').click();

    // Step 3: Wait for the mocked API response and verify error handling
    cy.wait('@submitPaymentError');
    cy.contains('Something went wrong. Please try again.').should('be.visible');
  });

  /**
   * Test: Mocking the entire payment flow
   */
  it('should mock the Pi payment process successfully', () => {
    // Mock API calls for createPayment and submitPayment
    cy.intercept('POST', '/api/pi/createPayment', {
      statusCode: 200,
      body: { paymentId: 'mock-payment-id' },
    }).as('createPayment');

    cy.intercept('POST', '/api/pi/submitPayment', {
      statusCode: 200,
      body: { txid: 'mock-txid' },
    }).as('submitPayment');

    cy.intercept('POST', '/api/pi/completePayment', {
      statusCode: 200,
      body: { status: 'completed', paymentId: 'mock-payment-id', txid: 'mock-txid' },
    }).as('completePayment');

    // Step 1: Initiate a payment
    cy.get('#payButton').click();

    // Step 2: Enter valid payment details
    cy.get('#amountInput').type('3.14');
    cy.get('#memoInput').type('Mocked Payment Test');
    cy.get('#submitPayment').click();

    // Step 3: Wait for all mocked responses and verify
    cy.wait('@createPayment').its('response.statusCode').should('eq', 200);
    cy.wait('@submitPayment').its('response.statusCode').should('eq', 200);
    cy.wait('@completePayment').its('response.statusCode').should('eq', 200);

    // Step 4: Verify UI updates
    cy.contains('Payment completed successfully').should('be.visible');
  });

  /**
   * Test: Full cleanup after tests
   */
  afterEach(() => {
    // Cleanup test data
    cy.request('DELETE', '/api/payments/cleanup', { testRun: true }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log('Test data cleaned up.');
    });
  });
});
