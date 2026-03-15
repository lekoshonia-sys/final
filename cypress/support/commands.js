Cypress.Commands.add('login', (email, password) => {
    cy.get('input[name="login_email"]').type(email, { force: true })
    cy.get('input[name="login_password"]').type(password, { force: true })
    cy.get('button[type="submit"').last().click({ force: true })
})

