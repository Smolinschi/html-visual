let no_results_tearm = "test";
let search_term = "pants";

describe('search Tests', () => {
  it("Search for no results", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get ("#search").type(no_results_tearm + "{enter}");
    cy.contains("Your search returned no results.").should("be.visible");
    cy.contains("Search results for: '" + no_results_tearm +"'").should("be.visible");
    cy.get("#sorter").should("not.exist")
  })
    it("Search with results", () => {
      cy.visit("https://magento.softwaretestingboard.com/");
      cy.get ("#search").type(search_term + "{enter}");
      cy.get("#sorter").should("be.visible");
      cy.contains("Search results for: '" +search_term +"'").should("be.visible")
      cy.get('.panel > .header > .authorization-link > a')
     
  })
  })