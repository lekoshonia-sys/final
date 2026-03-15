describe('authorization', () => {

it('wrong password', () => {

cy.visit('https://zootopia.ge/ka')
cy.contains('შესვლა').click({ force: true })  
cy.get('input[name="login_email"]').type('leko@gmail.com', { force: true })
cy.get('input[name="login_password"]').type('nanikodadu', { force: true })
cy.get('button[type="submit"]').last().click({ force: true })
cy.contains ('პაროლის აღდგენა').should('be.visible')
cy.contains ('არასწორი ელფოსტა').should('not.exist')
})
})