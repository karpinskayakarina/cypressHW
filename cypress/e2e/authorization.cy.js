import user from "../fixtures/user.json";
import { fillAuthorizationFields } from "../support/helper";
import LoginPage from "../support/pages/LoginPage";
import { headlessLogin } from "../support/helper";

const loginPage = new LoginPage();

describe("Authorization positive scenarios", () => {
  it("Authorization", () => {
    headlessLogin(user.loginname, user.password);
    loginPage.visitLoginPage();
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
