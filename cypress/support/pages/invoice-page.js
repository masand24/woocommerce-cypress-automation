class InvoicePage {
  addInvalidBillingInfo() {
    cy.get("#lightboxPaymentFrame").then(($iframe) => {
      cy.wait(2000);
      // Access the iframe's contentWindow
      const content = $iframe.prop("contentWindow").document;

      // Perform actions within the iframe
      cy.wrap(content)
        .find("div.selectize-input.items.required.not-full.has-options")
        .type("{downarrow}{enter}");
      cy.wrap(content)
        .find(
          'div.combined-input-wrapper input.combined-input-field[type="text"][placeholder="00"]'
        )
        .eq(0)
        .type("10");
      cy.wrap(content)
        .find(
          'div.combined-input-wrapper input.combined-input-field[type="text"]'
        )
        .eq(1)
        .type("20");
      cy.wrap(content)
        .find(
          'div.combined-input-wrapper input.combined-input-field[type="text"]'
        )
        .eq(2)
        .type("2023");
      cy.wrap(content).find(".primary-button.payment-submit-button").click();
      cy.wait(2000);
      cy.wrap(content)
        .find('div[data-toggle="payment-errors"]')
        .should(
          "have.text",
          "For testing only the customer with the name 'Good Customer' is valid."
        );
    });
  }

  addValidBillingInfo() {
    cy.get("#lightboxPaymentFrame").then(($iframe) => {
      cy.wait(2000);
      // Access the iframe's contentWindow
      const content = $iframe.prop("contentWindow").document;

      // Perform actions within the iframe
      cy.wrap(content)
        .find("div.selectize-input.items.required.not-full.has-options")
        .type("{downarrow}{enter}");
      cy.wrap(content)
        .find(
          'div.combined-input-wrapper input.combined-input-field[type="text"][placeholder="00"]'
        )
        .eq(0)
        .type("10");
      cy.wrap(content)
        .find(
          'div.combined-input-wrapper input.combined-input-field[type="text"]'
        )
        .eq(1)
        .type("20");
      cy.wrap(content)
        .find(
          'div.combined-input-wrapper input.combined-input-field[type="text"]'
        )
        .eq(2)
        .type("2023");
      cy.wrap(content).find(".primary-button.payment-submit-button").click();
      cy.wait(2000);
      cy.wrap(content)
        .find('div[data-toggle="payment-errors"]')
        .should("have.text", "Success");
      //The payment with invoice (Powerpay) is at the moment not possible. Possible reason you might find under: https://www.powerpay.ch/de
    });
  }
}

export default new InvoicePage();
