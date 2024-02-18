export function fillAuthorizationFields(username = "", password = "") {
  cy.log("Fill in authorization fields");
  username
    ? cy.get("#loginFrm_loginname").type(username)
    : cy.log("username field not filled");
  password
    ? cy.get("#loginFrm_password").type(password)
    : cy.log("password field not filled");
  cy.get('[title="Login"]').click();
}

// if(username){
//     cy.get('#loginFrm_loginname').type(username)
// } else {
//     cy.log('username field not filled')
// }

Cypress.Commands.add("searchForProduct", (productName) => {
  cy.get(".prdocutname")
    .contains(productName)
    .then(($product) => {
      if ($product.length === 0) {
        cy.get(".pagination").find("li").eq(6).click();
        cy.searchForProduct(productName);
      } else {
        cy.wrap($product).first().click();
      }
    });
});
