import { joinUrl } from "cypress/common/utils";
import { config } from "cypress/common/config";

export function request(method, url, data) {
  return cy.request({
    method,
    url: joinUrl(config.apiUrl, url),
    headers: {
      Accept: "application/json",
      ...data.headers,
    },
    ...data,
  });
}

export function getRequest(url, data) {
  return request("GET", url, data).then(({ body, status }) =>
    cy.wrap({ ...body, status })
  );
}

export function postRequest(url, data) {
  return request("POST", url, data).then(({ body, status }) =>
    cy.wrap({ ...body, status })
  );
}

export function putRequest(url, data) {
  return request("PUT", url, data).then(({ body, status }) =>
    cy.wrap({ ...body, status })
  );
}

export function deleteRequest(url, data) {
  return request("DELETE", url, data).then(({ body, status }) =>
    cy.wrap({ ...body, status })
  );
}
