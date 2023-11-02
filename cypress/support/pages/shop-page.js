class ShopPage {
  sortProductsBy(sortBy) {
    cy.get('[name="orderby"]').select(sortBy);

    cy.get('[name="orderby"] option:selected').should("have.text", sortBy);
  }
  selectFirstProduct() {
    cy.get('[data-block-name="woocommerce/product-button"]').first().click();
  }

  selectProduct(product) {
    const addToCartXpath = `//h3/a[text()='${product}']/../following-sibling::div/a[text()='Add to cart']`;
    cy.xpath(addToCartXpath).click();
  }
}

export default new ShopPage();
