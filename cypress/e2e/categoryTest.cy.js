describe("CategoryTest",() => {

    it("Check number of products matches list number",() => {
    cy.visit("https://magento.softwaretestingboard.com/women.html");
    cy.get('#ui-id-4 > :nth-child(2)').invoke("text").should("eq", "Women");
    cy.get('dd > .items > :nth-child(1)').click();
    cy.get('dd > .items > :nth-child(1)').click();
    
})

})