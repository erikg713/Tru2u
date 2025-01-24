Cypress.Commands.add('login', (username, password) => {
  cy.get('#loginButton').click();
  cy.get('#username').type(username);
  cy.get('#password').type(password);
  cy.get('#submitLogin').click();
});

Cypress.Commands.add('initiatePayment', (amount, memo) => {
  cy.get('#payButton').click();
  cy.get('#amountInput').type(amount);
  cy.get('#memoInput').type(memo);
  cy.get('#submitPayment').click();
});
