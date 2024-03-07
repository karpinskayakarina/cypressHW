import user from "../fixtures/user.json";
import orderPage from "../support/pages/orderPage";
import { apiEndpoints } from "../support/endpoints";

describe("Order suite", () => {
  it("Order from homepage", () => {
    // Arrange
    orderPage.visitHomePage();
    orderPage.login(user.loginname, user.password);

    // Act
    orderPage.searchForProduct("Waterproof Protective Undereye Concealer");
    orderPage.selectProductOption("656");
    cy.wait(1000);
    cy.intercept(apiEndpoints.get_option_resources).as("getOptionResources");
    cy.intercept(apiEndpoints.calculateTotal).as("calculateTotal");
    orderPage.addProductToCart();
    orderPage.goToCheckout();

    // Assert
    orderPage.verifyOrderConfirmationMessage("Your Order Has Been Processed!");
  });
});
