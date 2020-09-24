describe('MercadoLaura test on Cypress', () => {
    it('Successfully load', () => {
        cy.visit('/') //Arrange
        cy.get('body > app-root > div > app-search > div.col > input')
            .type('iphone').should('have.value', 'iphone')
        cy.get('.btnStyle').click()
         /*   .next().should('contain', 'Your form has been submitted!')
         
            .type('iphone{enter}')

            cy.contains('iphone', { matchCase: false }) CASE SENSITIVE
         */
    })
    
} )