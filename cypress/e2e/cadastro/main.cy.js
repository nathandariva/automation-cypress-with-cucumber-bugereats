/// <reference types="cypress" />

import { Chance } from 'chance'
import { CADASTRO } from '../../support/pages/cadastro/elements'

describe('Cadastro', () => {

    it('Deve realizar um cadastro com sucesso', () => {

        cy.visit("https://buger-eats.vercel.app/deliver")
        cy.get(CADASTRO.INPUT_NOME).should('be.visible').type("Teste Nathan")
        cy.get(CADASTRO.INPUT_EMAIL).should('be.visible').type(chance.email({ domain: "teste.com" }))
        cy.get(CADASTRO.INPUT_CEP).should('be.visible').type('80230000')
        cy.get(CADASTRO.BTN_PESQUISAR_CEP).should('be.visible').click()
        cy.get(CADASTRO.INPUT_NUMERO).should('be.visible').type('43996960000')
        cy.get(CADASTRO.SELECIONA_METODO_ENTREGA).eq(0).should('be.visible').click().then(() => {
            cy.get(CADASTRO.METODO_SELECIONADO).first().should('have.class', 'selected')
        })
        cy.get(CADASTRO.INPUT_UPLOAD_PHOTO).selectFile('cypress/fixtures/fotos/fototeste.jpg', { force: true })
        //VALIDAR IMG

        cy.get(CADASTRO.BTN_SUBMIT).should('be.visible').click({ force: true })

        //VALIDA MODAL DE CONFIRMAÇÃO
    })
});