import cartPage from "../../support/pages/cart-page"
import checkoutPage from "../../support/pages/checkout-page"
import postFinanceEFinancePage from "../../support/pages/post-finance-e-financepage"
import shopPage from "../../support/pages/shop-page"

describe('order glass product',()=>{

    it('order glass',()=>{
        cy.visit('/shop')
        shopPage.selectProduct('Glasses')
        cartPage.navigateToCheckout()
        checkoutPage.fillAddressDetails('address')
        checkoutPage.selectPaymentType('PostFinance E-Finance')
        checkoutPage.agreeTermsAndConditions()
        checkoutPage.placeOrder()
       // postFinanceEFinancePage.completePaymentUsingPostFinanceEFinancePage()
       //cy.contains('Order received').should('be.visible')
    })
    
})