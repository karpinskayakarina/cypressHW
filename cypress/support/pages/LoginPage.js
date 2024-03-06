class LoginPage {
  visitLoginPage() {
    cy.visit("/index.php?rt=account/login");
  }

  fillLoginDetails(user) {
    cy.get("#loginFrm_loginname").type(user.loginname);
    cy.get("#loginFrm_password").type(user.password);
  }

  submitLoginForm() {
    cy.get('[title="Login"]').click();
  }

  verifyUserFirstNameDisplayed(firstName) {
    cy.get(".heading1 .subtext").should("contain", firstName);
  }

  verifyErrorMessageDisplayed(errorMessage) {
    cy.get(".alert.alert-error.alert-danger").should("contain", errorMessage);
  }
}

export default LoginPage;
