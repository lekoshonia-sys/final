 
describe('authorization', () => {
  beforeEach(() => {
    cy.fixture('example').as('data')
  })

it('valid login', function() {

cy.visit('https://zootopia.ge/ka')
cy.contains('შესვლა').click({ force: true })  
cy.get('input[name="login_email"]').type(this.data.validUser.email, { force: true })
cy.get('input[name="login_password"]').type(this.data.validUser.password, { force: true })
cy.get('body > div.pop-box.avtorization.active > form > button').click({ force: true })

it('add product in the cart')
cy.get('.popmenu-burger').click({ force: true })
cy.get('a[onclick="openCategory(event, this)"]').first().click({ force: true })
cy.get('.category-drop-title').first().click({ force: true })
cy.get('body > div.header-pop.active > ul > li.cat-down.active > div > ul.category-drop.active > li:nth-child(2) > a').click({ force: true })
cy.get('[data-id="1537"]').scrollIntoView().click({ force: true })
cy.get('#cart-items-count').click({ force: true })
cy.get('body > main > div.cart-box > div.swiper.cart-slider.swiper-container.swiper-container-initialized.swiper-container-horizontal > div > div > div.spinner > button.plus.change-qty-by-one').click({ force: true })
cy.get('input[name="address"]').scrollIntoView().type('Tbilisi, Vake, 1234', { force: true })
cy.get('.cart-submit').click({ force: true })//ნივთებს ყიდულობს

})
})