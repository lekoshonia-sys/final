describe('registration', () => {
  beforeEach(() => {
    cy.fixture('example').as('data')
  })
  it('registration with valid data', function () {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.contains('შესვლა').click({ force: true })
    cy.contains('გაიარეთ რეგისტრაცია').click({ force: true })
    cy.get('input[name="first_name"]').type(this.data.validUser.firstNameandlastName, { force: true })
    cy.get('input[name="personal_id"]').type(this.data.validUser.personalID, { force: true })
    cy.get('input[name="reg_email"]').type(this.data.validUser.email, { force: true })
    cy.get('input[name="phone"]').type(this.data.validUser.phone, { force: true })
    cy.get('input[name="reg_password"]').type(this.data.validUser.password, { force: true })
    cy.get('input[name="reg_password_confirmation"]').type(this.data.validUser.password, { force: true })
    cy.get('#Path_10302').click()
    cy.get('.regsub').scrollIntoView().click()



  });


  it('register with already existed ID', function () {

    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.contains('შესვლა').click({ force: true })
    cy.contains('გაიარეთ რეგისტრაცია').click({ force: true })
    cy.get('input[name="first_name"]').type(this.data.newUser.firstNameandlastName, { force: true })
    cy.get('input[name="personal_id"]').type(this.data.newUser.personalID, { force: true })
    cy.get('input[name="reg_email"]').type(this.data.newUser.email, { force: true })
    cy.get('input[name="phone"]').type(this.data.newUser.phone, { force: true })
    cy.get('input[name="reg_password"]').type(this.data.newUser.password, { force: true })
    cy.get('input[name="reg_password_confirmation"]').type(this.data.newUser.password, { force: true })
    cy.get('#Path_10302').click()
    cy.get('.regsub').scrollIntoView().click()

  })
})










