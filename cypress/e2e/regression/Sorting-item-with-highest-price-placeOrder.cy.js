import cartPage from "../../support/pages/cart-page"
import checkoutPage from "../../support/pages/checkout-page"
import postFinancePage from "../../support/pages/post-finance-page"
import shopPage from "../../support/pages/shop-page"

describe('Create a order by sorting the costliest item and place a order',()=>{
    it('order by sorting item with highest price in the list',()=>{

        cy.visit('/shop')
        shopPage.sortProductsBy('Sort by price: high to low')
        shopPage.selectFirstProduct()
        cartPage.navigateToCheckout()
        checkoutPage.fillAddressDetails('address')
        checkoutPage.selectPaymentType('PostFinance Card')
        checkoutPage.agreeTermsAndConditions()
        checkoutPage.placeOrder()
        // postFinancePage.AcceptAuthentication()
        // cy.contains('Order received').should('be.visible')
        
    })
})