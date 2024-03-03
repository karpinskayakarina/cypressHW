import user from "../fixtures/user.json";
import { fillAuthorizationFields } from "../support/helper";

describe("Authorization positive scenarios", () => {
  it("Authorization", () => {
    cy.log("Open authorization form");
    cy.visit("/index.php?rt=account/login");

    fillAuthorizationFields(user.loginname, user.password);

    cy.log("User first name should display on page");
    cy.get(".heading1 .subtext").should("contain", user.firstname);
  });

  it("Authorization without entered username", () => {
    cy.login(user.loginname, user.password);

    cy.log("User first name should display on page");
    cy.get(".heading1 .subtext").should("contain", user.firstname);
  });
});

describe("Authorization negative scenarios", () => {
  it("Authorization without entered username", () => {
    cy.log("Open authorization form");
    cy.visit("/index.php?rt=account/login");

    fillAuthorizationFields("", user.password);

    cy.log("User first name should display on page");
    cy.get(".alert.alert-error.alert-danger").should(
      "contain",
      "Error: Incorrect login or password provided."
    );
  });

  it("Authorization without entered password", () => {
    cy.log("Open authorization form");
    cy.visit("/index.php?rt=account/login");

    fillAuthorizationFields(user.loginname);

    cy.log("User first name should display on page");
    cy.get(".alert.alert-error.alert-danger").should(
      "contain",
      "Error: Incorrect login or password provided."
    );
  });

  it("Authorization with empty fields", () => {
    cy.log("Open authorization form");
    cy.visit("/index.php?rt=account/login");

    fillAuthorizationFields();

    cy.log("User first name should display on page");
    cy.get(".alert.alert-error.alert-danger").should(
      "contain",
      "Error: Incorrect login or password provided."
    );
  });
});

//
// let userCreds = [{
//     login: '', pass: 'asdasd'
// }, {
//     login: 'asdad', pass: ''
// }]
//
// userCreds.forEach(user => {
//   it('Authorization without entered username', () => {
//     cy.log('Open authorization form');
//     cy.visit('/index.php?rt=account/login');
//
//     fillAuthorizationFields(user.login, user.pass);
//
//     cy.log('User first name should display on page');
//     cy.get('.alert.alert-error.alert-danger').should('contain', 'Error: Incorrect login or password provided.');
//   })
// })
