describe('authorization', () => {

it('wrong email format', () => {

cy.visit('https://zootopia.ge/ka')
cy.contains('შესვლა').click({ force: true })  
cy.get('input[name="login_email"]').type('lekogmail.com', { force: true })
cy.get('input[name="login_password"]').type('nanikodadu12', { force: true })
cy.get('button[type="submit"]').last().click({ force: true })
cy.contains ('პაროლის აღდგენა').should('be.visible')
cy.contains ('არასწორი ელფოსტა').should('not.exist')


})
})