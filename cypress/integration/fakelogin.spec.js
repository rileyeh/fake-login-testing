let port = 'http://localhost:3000'

describe('app', () => {
    beforeEach(() => {
        cy.visit(port)
    })

    it('types in username', () => {
        cy.get('.user-input')
            .type('riley')
            .should('have.value', 'riley')
    })

    it('types in password', () => {
        cy.get('.pass-input')
            .type('pass')
            .should('have.value', 'pass')
    })

    it('clicks submit', () => {
        cy.get('.btn')
            .click()
    })
})


    // it('visits localhost:3000', () => {
    //     cy.visit(port)
    // })

  