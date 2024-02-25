import user from "../fixtures/user.json";
import { fillAuthorizationFields, findItem } from "../support/helper";
import { STATUS_OK } from "../support/http_statuses";
import { apiEndpoints } from "../support/endpoints";

describe("Order suite", () => {
  it("Order from homepage", () => {
    // Arrange
    cy.visit("/index.php?rt=account/login");
    fillAuthorizationFields(user.loginname, user.password);
    cy.get(".heading1 .subtext").should("contain", user.firstname);
    cy.visit("/");
    const get_option_resources = "get_option_resources";
    cy.intercept(apiEndpoints.get_option_resources).as(get_option_resources);
    const calculateTotal = "calculateTotal";
    cy.intercept(apiEndpoints.calculateTotal).as(calculateTotal);

    // Act
    cy.get("#filter_keyword").type("e").type("{enter}");
    findItem("Waterproof Protective Undereye Concealer");
    cy.get("#option319").select("656");
    cy.wait(1000);
    cy.wait(`@${get_option_resources}`).then(({ response }) => {
      expect(response.statusCode).to.be.oneOf(STATUS_OK);
    });
    cy.wait(`@${calculateTotal}`).then(({ response }) => {
      expect(response.statusCode).to.be.oneOf(STATUS_OK);
    });
    cy.get(".productfilneprice")
      .invoke("text")
      .then((text1) => {
        const cleanedText1 = text1.replace(/\s+/g, "").trim();
        cy.get(".total-price")
          .invoke("text")
          .then((text2) => {
            const cleanedText2 = text2.replace(/\s+/g, "").trim();
            expect(cleanedText1).to.eq(cleanedText2);
          });
      });
    cy.get("#product_quantity").type("3");
    cy.get(".productpagecart").click();
    cy.get("#cart_checkout2").click();
    cy.get("#checkout_btn").click();

    // Assert
    cy.get(".maintext").should("contain", " Your Order Has Been Processed!");
  });
});
