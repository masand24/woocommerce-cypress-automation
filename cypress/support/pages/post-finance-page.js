class PostFinance {
  AcceptAuthentication() {
    cy.contains("Accept").click();
  }
}

export default new PostFinance();
