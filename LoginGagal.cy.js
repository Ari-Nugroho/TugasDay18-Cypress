describe('template spec', () => {
  it('Login_gagal', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('salah').should('be.visible')
    cy.wait(2)
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
  })
})