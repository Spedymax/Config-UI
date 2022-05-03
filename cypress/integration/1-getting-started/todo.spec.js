/// <reference types="cypress" />



describe('Check Sidebar',() => {
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
    cy.get('.nav-pills > :nth-child(1) > .nav-link').should('contain', 'Dashboard')
    cy.get(':nth-child(10) > .nav-link').should('contain', 'Search')
  })
  it('should have configuration', () => {
    cy.get('.nav-pills > :nth-child(3) > .nav-link').should('contain', 'Configuration')
    cy.get('.nav-pills > :nth-child(4) > .nav-link').should('contain', 'DataBase')
    cy.get('.nav-pills > :nth-child(7) > .nav-link').should('contain', 'Mailbox')
    cy.get(':nth-child(8) > [href="#"]').should('contain', 'Pages')
    cy.get(':nth-child(9) > [href="#"]').should('contain', 'Extras')
  })

})
describe('Check Header', () => {
  it('should have content', () => {
    cy.get('.main-header').should('exist')
    cy.get('.main-header > :nth-child(1) > :nth-child(1) > .nav-link').should('exist')
    cy.get('.main-header > :nth-child(1) > :nth-child(2) > .nav-link').should('exist')
    cy.get('.main-header > :nth-child(1) > :nth-child(2) > .nav-link').should('contain', 'Home')
    cy.get('.main-header > :nth-child(1) > :nth-child(3) > .nav-link').should('exist')
    cy.get('.main-header > :nth-child(1) > :nth-child(3) > .nav-link').should('contain', 'Contact')
    cy.get('.ml-auto > .nav-item > .nav-link').should('exist')

})
})

describe('Check Main Content', () => {
  it('should have copyright', () => {
    cy.get('.main-footer').should('contain', 'Copyright')
})
})
