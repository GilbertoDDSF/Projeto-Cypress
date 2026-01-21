import { faker } from '@faker-js/faker';



describe('Verificação da página de cadastro do ADOPET', () => {
  it('Deve carregar a página de cadastro corretamente e cadastrar um novo usuário', () => {
    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();
    
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type(randomName);
    cy.get('[data-test="input-email"]').type(randomEmail);
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })
})

//1 - Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”.
describe('Verificação de pets na página do ADOPET', () => {
  it('deve carregar a página corretamente e clicar no botão ‘Ver pets disponíveis para adoção', () => {
    
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Ver pets disponíveis para adoção').click();

  })


//2 - Visite a página de principal do AdoPet e teste os botões header.
      it("Visita a página de principal do AdoPet e testa os botão de home", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.header__home').click()  

    })

 //3 - Visite a página de /login do Adopet.
         it("Visita a página de /login do Adopet", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    })

//4 - Visite a página de /home do Adopet.
        it("Visita a página de /home do Adopet", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    })

//5 - Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.
        it("Visita a página de /home do AdoPet e clique no botão “Falar com o responsável”", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
        cy.get('.header__message').click()  
    })
})

