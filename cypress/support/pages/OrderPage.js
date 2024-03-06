class OrderPage {
  visitHomePage() {
    cy.visit("/");
  }

  login(username, password) {
    cy.visit("/index.php?rt=account/login");
    cy.get("#loginFrm_loginname").type(username);
    cy.get("#loginFrm_password").type(password);
    cy.get('[title="Login"]').click();
  }

  searchForProduct(keyword) {
    cy.get("#filter_keyword").type(keyword).type("{enter}");
  }

  selectProductOption(optionValue) {
    cy.get("#option319").select(optionValue);
  }

  addProductToCart() {
    cy.get(".productpagecart").click();
  }

  goToCheckout() {
    cy.get("#cart_checkout2").click();
    cy.get("#checkout_btn").click();
  }

  verifyOrderConfirmationMessage(message) {
    cy.get(".maintext").should("contain", message);
  }
}

export default new OrderPage();
