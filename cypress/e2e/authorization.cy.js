import user from "../fixtures/user.json";
import LoginPage from "../support/pages/LoginPage";

const loginPage = new LoginPage();

describe("Authorization positive scenarios", () => {
  it("Authorization by HTTP", () => {
    cy.authenticate(user.loginname, user.password);
  });
});

describe("Authorization negative scenarios", () => {
  it("Authorization without entered password by HTTP", () => {
    cy.authenticate(user.loginname, "");
  });

  it("Authorization without entered username by HTTP", () => {
    cy.authenticate("", user.password);
  });

  it("Authorization with empty fields by HTTP", () => {
    cy.authenticate("", "");
  });
});
