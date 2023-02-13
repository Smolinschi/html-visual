describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://emag.ro')
    cy.get('.col-sm-5 > .btn-primary').click()
    cy.get('[data-id="190"] > .js-megamenu-list-department-link').click()
    cy.contains('Boxe').click()
 
    

  })
})