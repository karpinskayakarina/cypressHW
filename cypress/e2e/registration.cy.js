describe("New user registration", () => {
  it("Success flow", () => {
    // Arrange
    cy.visit("https://automationteststore.com/");
    // Act
    cy.get("#customer_menu_top").click();
    cy.get("[title=Continue]").click();
    cy.get("#AccountFrm_firstname").type("FirstNameTestKarina1");
    cy.get("#AccountFrm_firstname").should(
      "have.prop",
      "value",
      "FirstNameTestKarina1"
    );
    cy.get("#AccountFrm_lastname").type("LastNameTestKarina2");
    cy.get("#AccountFrm_lastname").should(
      "have.prop",
      "value",
      "LastNameTestKarina2"
    );
    cy.get("#AccountFrm_email").type("email123451234@test.com");
    cy.get("#AccountFrm_email").should(
      "have.prop",
      "value",
      "email123451234@test.com"
    );
    cy.get("#AccountFrm_telephone").type("123456789");
    cy.get("#AccountFrm_telephone").should("have.prop", "value", "123456789");
    cy.get("#AccountFrm_fax").type("123");
    cy.get("#AccountFrm_fax").should("have.prop", "value", "123");
    cy.get("#AccountFrm_company").type("Company TestKarina1");
    cy.get("#AccountFrm_company").should(
      "have.prop",
      "value",
      "Company TestKarina1"
    );
    cy.get("#AccountFrm_address_1").type("Address TestKarina1");
    cy.get("#AccountFrm_address_1").should(
      "have.prop",
      "value",
      "Address TestKarina1"
    );
    cy.get("#AccountFrm_address_2").type("Address TestKarina2");
    cy.get("#AccountFrm_address_2").should(
      "have.prop",
      "value",
      "Address TestKarina2"
    );
    cy.get("#AccountFrm_city").type("Kyiv");
    cy.get("#AccountFrm_city").should("have.prop", "value", "Kyiv");
    cy.get("#AccountFrm_postcode").type("012347");
    cy.get("#AccountFrm_postcode").should("have.prop", "value", "012347");
    cy.get("#AccountFrm_country_id").select("Ukraine");
    cy.get("#AccountFrm_country_id").should("have.prop", "value", "220");
    cy.get("#AccountFrm_zone_id").select("Kyiv");
    cy.get("#AccountFrm_zone_id").should("have.prop", "value", "3490");
    cy.get("#AccountFrm_loginname").type("testKarina123");
    cy.get("#AccountFrm_loginname").should(
      "have.prop",
      "value",
      "testKarina123"
    );
    cy.get("#AccountFrm_password").type("12345678");
    cy.get("#AccountFrm_password").should("have.prop", "value", "12345678");
    cy.get("#AccountFrm_confirm").type("12345678");
    cy.get("#AccountFrm_confirm").should("have.prop", "value", "12345678");
    cy.get("#AccountFrm_newsletter0").click();
    cy.get("#AccountFrm_newsletter0").should("be.checked");
    cy.get("#AccountFrm_agree").check();
    cy.get("#AccountFrm_agree").should("be.checked");
    cy.get("[title=Continue]").click();
    // Assert
    cy.get(".maintext").should(
      "have.prop",
      "textContent",
      " Your Account Has Been Created!"
    );
  });
});
