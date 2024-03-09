import user from "../fixtures/user.json";
import { fillAuthorizationFields } from "../support/helper";
import LoginPage from "../support/pages/LoginPage";
import { fillAuthorizationFields } from "../support/helper";
import { headlessLogin } from "../support/helper";

const loginPage = new LoginPage();

describe("Authorization positive scenarios", () => {
  it("Authorization by HTTP", () => {
    headlessLogin(user.loginname, user.password);
    cy.visit("/index.php?rt=account/account");
    cy.log("User first name should be visible");
    loginPage.verifyUserFirstNameDisplayed(user.firstname);
  });
});

describe("Authorization negative scenarios", () => {
  it("Authorization without entered username", () => {
    loginPage.visitLoginPage();
    fillAuthorizationFields("", user.password);

    loginPage.verifyErrorMessageDisplayed(
      "Error: Incorrect login or password provided."
    );
  });

  it("Authorization without entered password", () => {
    loginPage.visitLoginPage();
    fillAuthorizationFields(user.loginname);
    loginPage.verifyErrorMessageDisplayed(
      "Error: Incorrect login or password provided."
    );
  });

  it("Authorization with empty fields", () => {
    loginPage.visitLoginPage();
    fillAuthorizationFields();
    loginPage.verifyErrorMessageDisplayed(
      "Error: Incorrect login or password provided."
    );
  });
});
