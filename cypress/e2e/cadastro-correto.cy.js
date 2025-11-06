describe('Página de cadastro', () => {
  
    beforeEach(()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="register-button"]').click();
    })
    it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
      cy.cadastrar('Matheus Neves','teste@teste.com','Senha123');
  })
})