describe('Teste de Login', () => {
    it('Deve realizar login corretamente', () => {
      cy.visit('https://front.serverest.dev')
      cy.get('[data-testid="email"]').type('fulano@qa.com')
      cy.get('[data-testid="senha"]').type('teste')
      cy.get('[data-testid="entrar"]').click()
      cy.get('[data-testid="logout"]').should('be.visible')
    })

    it('Não deve realizar login corretamente', () => {
        cy.visit('https://front.serverest.dev')
        cy.get('[data-testid="email"]').type('tiaodacouve@4i.com')
        cy.get('[data-testid="senha"]').type('couve')
        cy.get('[data-testid="entrar"]').click()
        cy.get('[data-dismiss="alert"]').should('be.visible')
      })
  })