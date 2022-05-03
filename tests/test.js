const cypress = require("cypress");

describe('Check for copyright',() => {
    beforeEach(() => {
        cy.visit('../index.html')
    })

    it('should have copyright', () => {
        cy.get('footer').should('contain', 'Copyright')
    })
})
