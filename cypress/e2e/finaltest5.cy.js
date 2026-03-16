describe('registration', () => {
  beforeEach(() => {
    cy.fixture('example').as('data')
  })
  it('Registration with empty fields', function () {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.contains('შესვლა').click({ force: true })
    cy.contains('გაიარეთ რეგისტრაცია').click({ force: true })
    cy.get('#Path_10302').click()
    cy.get('.regsub').scrollIntoView().click()
    cy.get('.error').should('be.visible') 
    //cy.contains('გთხოვთ შეავსოთ ველი').should('be.visible') არ მუშაობს.

   })
})