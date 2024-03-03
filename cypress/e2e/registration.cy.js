import user from "../fixtures/user.json";
import { faker } from "@faker-js/faker";

user.firstname = faker.person.firstName();
user.lastname = faker.person.lastName();
user.email = faker.internet.email({
  firstName: "Jeanne",
  lastName: "Doe",
  provider: "some.fakeMail.qa",
  allowSpecialCharacters: false,
});
user.loginname = faker.internet.userName();

describe("register with valid data", () => {
  it("Registration", () => {
    cy.log("Open registration form");
    cy.visit("/");
    cy.get("#customer_menu_top").click();
    cy.get("[title=Continue]").click();

    cy.log("Fill in the fields Personal Details fields");
    cy.get("#AccountFrm_firstname").type(user.firstname);
    cy.get("#AccountFrm_firstname").should(
      "have.prop",
      "value",
      user.firstname
    );
    cy.get("#AccountFrm_lastname").type(user.lastname);
    cy.get("#AccountFrm_lastname").should("have.prop", "value", user.lastname);
    cy.get("#AccountFrm_email").type(user.email);
    cy.get("#AccountFrm_email").should("have.prop", "value", user.email);
    cy.get("#AccountFrm_telephone").type(user.telephone);
    cy.get("#AccountFrm_telephone").should(
      "have.prop",
      "value",
      user.telephone
    );
    cy.get("#AccountFrm_fax").type(user.fax);
    cy.get("#AccountFrm_fax").should("have.prop", "value", user.fax);

    cy.log("Fill in the Your Address fields");
    cy.get("#AccountFrm_company").type(user.company);
    cy.get("#AccountFrm_company").should("have.prop", "value", user.company);
    cy.get("#AccountFrm_address_1").type(user.address_1);
    cy.get("#AccountFrm_address_1").should(
      "have.prop",
      "value",
      user.address_1
    );
    cy.get("#AccountFrm_address_2").type(user.address_2);
    cy.get("#AccountFrm_address_2").should(
      "have.prop",
      "value",
      user.address_2
    );
    cy.get("#AccountFrm_city").type(user.city);
    cy.get("#AccountFrm_city").should("have.prop", "value", user.city);
    cy.get("#AccountFrm_postcode").type(user.postcode);
    cy.get("#AccountFrm_postcode").should("have.prop", "value", user.postcode);
    cy.get("#AccountFrm_country_id").select(user.country);
    cy.get("#AccountFrm_country_id").should(
      "have.prop",
      "value",
      user.country_id
    );
    cy.get("#AccountFrm_zone_id").select(user.zone_name);
    cy.get("#AccountFrm_zone_id").should("have.prop", "value", user.zone_id);

    cy.log("Fill in the Login Details fields");
    cy.get("#AccountFrm_loginname").type(user.loginname);
    cy.get("#AccountFrm_loginname").should(
      "have.prop",
      "value",
      user.loginname
    );
    cy.get("#AccountFrm_password").type(user.password);
    cy.get("#AccountFrm_password").should("have.prop", "value", user.password);
    cy.get("#AccountFrm_confirm").type(user.password);
    cy.get("#AccountFrm_confirm").should("have.prop", "value", user.password);

    cy.log("Fill in the Newsletter");
    cy.get("#AccountFrm_newsletter0").click();
    cy.get("#AccountFrm_newsletter0").should("be.checked");
    cy.get("#AccountFrm_agree").check();
    cy.get("#AccountFrm_agree").should("be.checked");

    cy.log("Submit form and check results");
    cy.get("[title=Continue]").click();
    cy.get(".maintext").should(
      "have.prop",
      "textContent",
      " Your Account Has Been Created!"
    );
  });

  it("Authorization", () => {
    cy.log("Open authorization form");
    cy.visit("/index.php?rt=account/login");

    cy.log("Fill in authorization fields");
    cy.get("#loginFrm_loginname").type(user.loginname);
    cy.get("#loginFrm_password").type(user.password);
    cy.get('[title="Login"]').click();

    cy.log("User first name should display on page");
    cy.get(".heading1 .subtext").should("contain", user.firstname);
  });
});
