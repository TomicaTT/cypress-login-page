describe('visit login page', function() {
    it('check for certain text', function() {
        cy.visit('https://word-nerds-client.herokuapp.com')
        cy.contains('Word Nerds')
    })
})

describe('sign up', function() {
    it('clicks on sign up', function() {
        cy.visit('https://word-nerds-client.herokuapp.com')
        cy.contains('Sign Up').click()
        cy.url().should('include', '/register')
    })
})

describe('login to app', function() {
    it('enter username and password and submit form', function() {
        cy.visit('https://word-nerds-client.herokuapp.com')
        cy.get('input:first').should('have.attr', 'placeholder', 'Username')
          .type('bob')
        cy.get('input:last').should('have.attr', 'placeholder', 'Password')
          .type('bob')
        cy.get('form').submit()
    })
})