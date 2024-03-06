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

export function findItem(name) {
  cy.log("search item");
  cy.get("body").then((body) => {
    if (body.find(`[title="${name}"]`).length > 0) {
      cy.get(`[title="${name}"]`).click();
    } else {
      cy.get(".pagination").contains(">").click();
      findItem(name);
    }
  });
}

export function headlessLogin(loginname, password) {
  let csrfToken;
  let csrfInstance;

  cy.request("GET", "/index.php?rt=account/login")
    .then((response) => {
      let htmlPesp = document.createElement("html");
      htmlPesp.innerHTML = response.body;
      csrfToken = htmlPesp
        .querySelector('#loginFrm [name="csrftoken"]')
        .getAttribute("value");
      csrfInstance = htmlPesp
        .querySelector('#loginFrm [name="csrfinstance"]')
        .getAttribute("value");
    })
    .then(() => {
      cy.request({
        method: "POST",
        url: "/index.php?rt=account/login",
        form: true,
        body: {
          csrftoken: csrfToken,
          csrfinstance: csrfInstance,
          loginname: loginname,
          password: password,
        },
      }).then((response) => {
        expect(response.status).eq(200);
      });
    });
}
