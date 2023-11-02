import cartPage from "../../support/pages/cart-page"
import checkoutPage from "../../support/pages/checkout-page"
import shopPage from "../../support/pages/shop-page"
import directDebitPage from "../../support/pages/direct-debit-page"

describe('place order with invalid direct-debit-iban and should not allowed to pay.',()=>{
    it('order by sorting item with highest price in the list',()=>{

        cy.visit('/shop')
        shopPage.selectProduct('Laptops')
        cartPage.navigateToCheckout()
        checkoutPage.fillAddressDetails('address')
        checkoutPage.selectPaymentType('Direct Debit (SEPA)')
        checkoutPage.agreeTermsAndConditions()
        checkoutPage.placeOrder()

        //in progress need to implement from here
       // directDebitPage.addInvalidIban()
        
    })
})