/// <reference types="cypress" />



describe('Check sidebar',() => {
  beforeEach(() => {
      cy.visit('../index.html')
  })
  it('should have copyright', () => {
      cy.get('footer').should('contain', 'Copyright')
  })
  it('should have logo and company name', () => {
    cy.get('.elevation-3').invoke('attr', 'src').should('include', 'AnthillLogo')
    cy.get('.brand-text').should('contain','Anthill Agency')
  })
  it('should have admin name and photo', () => {
    cy.get('.elevation-2').invoke('attr', 'src').should('include', 'user2')
    cy.get('.info').should('contain', 'Admin name')
  })
  it('should have searchbar', () => {
    cy.get('.form-inline').should('exist')
  })
  it('should have side menu', () => {
    cy.get('.mt-2').should('exist')
  })
  it('should have dashboard', () => {
    cy.get('.active').should('contain', 'Dashboard')
  })
  it('should have configuration', () => {
    cy.get('.active').should('contain', 'Configuration')
  })

})

describe('Check main content', () => {
  it('should have copyright', () => {
    cy.get('footer').should('contain', 'Copyright')
})
})
