class CheckoutPage {
  fillAddressDetails(addressFIle) {
    cy.fixture(addressFIle)
      .as("address")
      .then((address) => {
        cy.get("#billing_first_name").type(address.firstName);
        cy.get("#billing_last_name").type(address.lastName);
        cy.get("#select2-billing_country-container").click();
        cy.get(".select2-search__field").type(address.country).type("{enter}");
        cy.get("#billing_address_1").type(address.address1);
        cy.get("#billing_address_2").type(address.address2);
        cy.get("#billing_city").type(address.city);
        cy.get("#billing_phone").type(address.phone);
        cy.get("#billing_email").type(address.email);
        cy.get("#billing_postcode").type(address.postcode);
      });
  }

  fillGoodCustomerDetails(addressFIle) {
    cy.fixture(addressFIle)
      .as("address")
      .then((address) => {
        cy.get("#billing_first_name").type(address.first);
        cy.get("#billing_last_name").type(address.last);
        cy.get("#select2-billing_country-container").click();
        cy.get(".select2-search__field").type(address.country).type("{enter}");
        cy.get("#billing_address_1").type(address.address1);
        cy.get("#billing_address_2").type(address.address2);
        cy.get("#billing_city").type(address.city);
        cy.get("#billing_phone").type(address.phone);
        cy.get("#billing_email").type(address.email);
        cy.get("#billing_postcode").type(address.postcode);
      });
  }

  selectPaymentType(paymentType) {
    cy.contains(paymentType).click();
  }
  placeOrder() {
    cy.contains("Place order").click();
    cy.wait(5000);
  }
  agreeTermsAndConditions() {
    cy.contains("I have read and agree to the website").click({ force: true });
  }

  validateTotalPrice() {
    cy.get('[class="order-total"]')
      .find("bdi")
      .invoke("text")
      .then((totalAmountText) => {
        var totalPriceOnCheckout = totalAmountText.replace(/[^0-9.]/g, "");
        cy.get("@totalPrice").then((totalPrice) => {
          expect(totalPriceOnCheckout).to.eq(totalPrice);
        });
      });
  }
}

export default new CheckoutPage();
