import cartPage from '../../support/pages/cart-page'

describe('verify cart page',()=>{
    it('verify empty cart message',()=>{

        const emptyCartMessage ='Your cart is currently empty.'
        cy.visit('/cart')
        cartPage.verifyEmptyCartMessage(emptyCartMessage)
               
    })
})