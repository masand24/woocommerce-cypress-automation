import cartPage from "../../support/pages/cart-page"
import checkoutPage from "../../support/pages/checkout-page"
import shopPage from "../../support/pages/shop-page"
import invoicePage from "../../support/pages/invoice-page"

describe('Navigate to Cart page provide valid coupon code and user able to get discount successfully.',()=>{
    it('Provide valid coupon code and calculate subtotal and total price after discount',()=>{

        cy.visit('/shop')
        shopPage.selectProduct('Pants')
        cartPage.applyValidCoupon('coupon')
        cartPage.validCouponResponse()
        cartPage.saveTotalPrice()
        
    })
})