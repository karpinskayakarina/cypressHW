import user from "../fixtures/user.json";
import { faker } from "@faker-js/faker";
import RegistrationPage from "../support/pages/RegistrationPage";
import LoginPage from "../support/pages/LoginPage";

describe("Register with valid data", () => {
  const registrationPage = new RegistrationPage();
  const loginPage = new LoginPage();

  user.firstname = faker.person.firstName();
  user.lastname = faker.person.lastName();
  user.email = faker.internet.email({
    firstName: "Jeane",
    lastName: "Doe",
<<<<<<< HEAD
    provider: "some.fakeMail.testun",
=======
    provider: "some.fakeMail.testikk",
>>>>>>> 1447ffac52da695353fca1115ede049b6608b9f5
    allowSpecialCharacters: false,
  });
  user.loginname = faker.internet.userName();

  it("Registration", () => {
    cy.log("Open registration form");
    registrationPage.visitRegistrationPage();

    cy.log("Fill in the fields Personal Details fields");
    registrationPage.fillPersonalDetails(user);

    cy.log("Fill in the Your Address fields");
    registrationPage.fillAddressDetails(user);

    cy.log("Fill in the Login Details fields");
    registrationPage.fillLoginDetails(user);

    cy.log("Fill in the Newsletter");
    registrationPage.fillNewsletterAndAgree();

    cy.log("Submit form and check results");
    registrationPage.submitRegistrationForm();
    registrationPage.verifyRegistrationSuccessMessage();
  });

  it("Authorization", () => {
    cy.log("Open authorization form");
    loginPage.visitLoginPage();

    cy.log("Fill in authorization fields");
    loginPage.fillLoginDetails(user);
    loginPage.submitLoginForm();

    cy.log("User first name should display on page");
    loginPage.verifyUserFirstNameDisplayed(user.firstname);
  });
});
