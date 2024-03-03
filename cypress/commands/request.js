import { STATUS_OK, STATUS_BAD_REQUEST } from "cypress/common/http_statuses";

function checkFailedStatus(cyContext) {
  return cy
    .wrap(cyContext)
    .its("status")
    .should("be.oneOf", STATUS_BAD_REQUEST);
}

function checkSuccessStatus(cyContext) {
  return cy.wrap(cyContext).its("status").should("be.oneOf", STATUS_OK);
}

Cypress.Commands.add(
  "statusSuccess",
  {
    prevSubject: true,
  },
  checkSuccessStatus
);

Cypress.Commands.add(
  "statusFailed",
  {
    prevSubject: true,
  },
  checkFailedStatus
);
