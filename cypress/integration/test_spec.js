describe('visit login page', function() {
    it('check for certain text', function() {
        cy.visit('https://word-nerds-client.herokuapp.com')
        cy.contains('Word Nerds')
    })
})