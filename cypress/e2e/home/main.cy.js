/// <reference types="cypress" />

const { HOME } = require('../../support/pages/home/elements');

describe('HOME - Deve Validar elementos da tela incial', () => {

    beforeEach(() => {
        cy.visit("https://buger-eats.vercel.app/")
    })

    it('Deva validar texto da página', () => {
        cy.get(HOME.TEXTO1).should('have.text', 'Seja um parceiro entregador pela Buger Eats')

    });
    it('Deve validar o redirecionamento do botão <Cadastre-se para fazer entregas>', () => {
        cy.get(HOME.BTN_CADASTRAR).should('be.visible').click()
        cy.url().should('contain', '/deliver')
    })
});