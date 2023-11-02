class HomePage {
  verifyNavigationLinks(navLinks) {
    cy.get("nav li").should("have.length", navLinks.length);

    cy.get("nav li").each(($el) => {
      expect(navLinks).to.include($el.text());
      cy.log(`${$el.text()} nav link is displaying on home page`);
    });
  }
  verifyProductsInHomepage(products) {
    cy.get("h3 a").should("have.length", products.length);

    cy.get("h3 a").each(($product) => {
      expect(products).to.include($product.text());
      cy.log(`${$product.text()} is displaying on home page`);
    });
  }
}

export default new HomePage();
