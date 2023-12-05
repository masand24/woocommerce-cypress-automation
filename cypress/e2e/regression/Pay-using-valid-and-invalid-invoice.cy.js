import cartPage from "../../support/pages/cart-page"
import checkoutPage from "../../support/pages/checkout-page"
import postFinancePage from "../../support/pages/post-finance-page"
import shopPage from "../../support/pages/shop-page"
import invoicePage from "../../support/pages/invoice-page"

describe('Place an order for a laptop with invoice payment using Invalid and valid  billingInfo',()=>{
    it('order by selecting laptop product choose invoice and provide incorrect billing info',()=>{

        cy.visit('/shop')
        shopPage.selectProduct('Laptops')
        cartPage.navigateToCheckout()
        checkoutPage.fillAddressDetails('address')
        checkoutPage.selectPaymentType('Invoice')
        checkoutPage.agreeTermsAndConditions()
        checkoutPage.placeOrder()
        invoicePage.addInvalidBillingInfo()
        
    })


    it.only('order by selecting Glasses product choose invoice and provide incorrect billing info',()=>{

        cy.visit('/shop')
        shopPage.selectProduct('Glasses')
        cartPage.navigateToCheckout()
        checkoutPage.fillGoodCustomerDetails('address')
        checkoutPage.selectPaymentType('Invoice')
        checkoutPage.agreeTermsAndConditions()
        checkoutPage.placeOrder()
        //invoicePage.addValidBillingInfo()
        
    })
})