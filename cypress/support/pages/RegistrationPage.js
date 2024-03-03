class RegistrationPage {
  visitRegistrationPage() {
    cy.visit("/");
    cy.get("#customer_menu_top").click();
    cy.get("[title=Continue]").click();
  }

  fillPersonalDetails(user) {
    cy.get("#AccountFrm_firstname").type(user.firstname);
    cy.get("#AccountFrm_lastname").type(user.lastname);
    cy.get("#AccountFrm_email").type(user.email);
    cy.get("#AccountFrm_telephone").type(user.telephone);
    cy.get("#AccountFrm_fax").type(user.fax);
  }

  fillAddressDetails(user) {
    cy.get("#AccountFrm_company").type(user.company);
    cy.get("#AccountFrm_address_1").type(user.address_1);
    cy.get("#AccountFrm_address_2").type(user.address_2);
    cy.get("#AccountFrm_city").type(user.city);
    cy.get("#AccountFrm_postcode").type(user.postcode);
    cy.get("#AccountFrm_country_id").select(user.country);
    cy.get("#AccountFrm_zone_id").select(user.zone_name);
  }

  fillLoginDetails(user) {
    cy.get("#AccountFrm_loginname").type(user.loginname);
    cy.get("#AccountFrm_password").type(user.password);
    cy.get("#AccountFrm_confirm").type(user.password);
  }

  fillNewsletterAndAgree() {
    cy.get("#AccountFrm_newsletter0").check();
    cy.get("#AccountFrm_agree").check();
  }

  submitRegistrationForm() {
    cy.get("[title=Continue]").click();
  }

  verifyRegistrationSuccessMessage() {
    cy.get(".maintext").should("have.text", " Your Account Has Been Created!");
  }
}

export default RegistrationPage;
