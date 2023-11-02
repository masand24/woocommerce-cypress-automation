class CartPage {
  verifyEmptyCartMessage(message) {
    cy.contains(message).should("be.visible");
  }

  applyInvalidCoupon(couponCode) {
    cy.fixture(couponCode)
      .as("coupon")
      .then((coupon) => {
        cy.get("#coupon_code").type(coupon.invalidCoupon);
      });
    cy.contains("Apply coupon").click();
  }

  invalidCouponResponse() {
    cy.scrollTo("top");
    cy.contains('Coupon "christmas_sale_20" does not exist!').should(
      "be.visible"
    );
  }

  applyValidCoupon(couponCode) {
    cy.fixture(couponCode)
      .as("coupon")
      .then((coupon) => {
        cy.get("#coupon_code").type(coupon.validCoupon);
      });
    cy.contains("Apply coupon").click();
  }

  validCouponResponse() {
    cy.scrollTo("top");
    cy.contains("Coupon code applied successfully.").should("be.visible");
    cy.get("tr.cart-subtotal > td")
      .find("bdi")
      .invoke("text")
      .then((subTotalText) => {
        cy.wrap(parseFloat(subTotalText.replace(/[^0-9.]/g, ""))).as(
          "subTotalPrice"
        );
      });

    cy.get("tr.cart-discount > td")
      .invoke("text")
      .then((couponText) => {
        cy.wrap(parseFloat(couponText.replace(/[^0-9.]/g, ""))).as(
          "couponPrice"
        );
      });

    cy.get("tr.order-total > td")
      .find("bdi")
      .invoke("text")
      .then((totalText) => {
        cy.wrap(parseFloat(totalText.replace(/[^0-9.]/g, ""))).as("totalPrice");
      });


    cy.get('@subTotalPrice').then(subTotalPrice => {
      cy.get('@couponPrice').then(couponPrice => {
          cy.get('@totalPrice').then(totalPrice => {
            expect(subTotalPrice - couponPrice).eq(totalPrice);
          });
      });
  });
  }

  updateQuantity(qty) {}

  updateCart() {
    cy.get('[name="update_cart"]').click();
  }

  navigateToCheckout() {
    cy.contains("Proceed to checkout").click();
  }

  saveTotalPrice() {
    cy.get('[class="order-total"]')
      .find("bdi")
      .invoke("text")
      .then((totalAmountText) => {
        cy.wrap(totalAmountText.replace(/[^0-9.]/g, "")).as("totalPrice");
      });
  }

  removeItemFromCart(index) {
    cy.get('[class="remove"]').eq(index).click();
  }

  validateNumberOfProductsInCart(number) {
    cy.get('[class="woocommerce-cart-form__cart-item cart_item"]').should(
      "have.length",
      number
    );
  }
}

export default new CartPage();
