import cartPage from "../../support/pages/cart-page"
import checkoutPage from "../../support/pages/checkout-page"
import postFinancePage from "../../support/pages/post-finance-page"
import shopPage from "../../support/pages/shop-page"

describe('Navigate to Cart page provide invalid coupon code and user must get error message',()=>{
    it('Provide invalid coupon code',()=>{

        cy.visit('/shop')
        shopPage.selectProduct('Pants')
        cartPage.applyInvalidCoupon('coupon')
        cartPage.invalidCouponResponse()
        
    })
})