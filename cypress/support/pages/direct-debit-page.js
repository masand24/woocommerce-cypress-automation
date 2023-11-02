class DirectDebitPage {
  addInvalidIban() {
    cy.get("#lightboxPaymentFrame").then(($iframe) => {
      cy.wait(2000);
      // Access the iframe's contentWindow
      const content = $iframe.prop("contentWindow").document;

      // Perform actions within the iframe
      cy.wrap(content)
        .find(".form-control.payment-bank-account-number")
        .type("AT61 1904 3002 3457 3201");
      cy.wait(2000);

      // cy.wrap(content).find(".payment-actions button").click();
      // cy.wait(10000);
      // cy.get(".woocommerce-notices-wrapper >ul").should(
      //   "have.text",
      //   "The provided IBAN is not accepted."
      // );
    });
  }

  addValidIban() {
    cy.get("#lightboxPaymentFrame").then(($iframe) => {
      cy.wait(2000);
      // Access the iframe's contentWindow
      const content = $iframe.prop("contentWindow").document;

      // Perform actions within the iframe
      cy.wrap(content)
        .find(".form-control.payment-bank-account-number")
        .type("DE89 3704 0044 0532 0130 00");
      cy.wait(2000);
      cy.wrap(content).find(".payment-actions button").click();
    });
  }
}

export default new DirectDebitPage();
