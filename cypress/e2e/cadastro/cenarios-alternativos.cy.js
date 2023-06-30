/// <reference types="cypress" />

import { Chance } from 'chance'
import { CADASTRO } from '../../support/pages/cadastro/elements'

describe('Cadastro - Cenarios Alternativos', () => {

    beforeEach(() => {
        cy.visit("https://buger-eats.vercel.app/deliver")
    })

    const msg_erro = [
        {
            msg: 'É necessário informar o nome',
            eq: 0
        },
        {
            msg: 'É necessário informar o CPF',
            eq: 1
        },
        {
            msg: 'É necessário informar o email',
            eq: 2
        },
        {
            msg: 'É necessário informar o CEP',
            eq: 3
        },
        {
            msg: 'É necessário informar o número do endereço',
            eq: 4
        },
        {
            msg: 'Selecione o método de entrega',
            eq: 5
        },
        {
            msg: 'Adicione uma foto da sua CNH',
            eq: 6
        }
    ]

    const preenchimentoIncorretoCEP = [
        {
            cep: '1',
        },
        {
            cep: '1000000000000000000',
        },
        {
            cep: '12354',
        },
        {
            cep: '86.390-000'
        }
    ]


    it('Deve validar mensagens quanddo campos ficam em branco', () => {
        cy.get(CADASTRO.BTN_SUBMIT).should('be.visible').click({ force: true })
        cy.get(CADASTRO.TEXT_MSG_ERROR).should('have.length', 7)
        msg_erro.map(validateMsg => {
            cy.get(CADASTRO.TEXT_MSG_ERROR).eq(validateMsg.eq).should('have.text', validateMsg.msg)
        })
    })

    it('Valida campo CEP quando preenchido de modo insatisfatório', () => {
        preenchimentoIncorretoCEP.map(erro => {
            cy.get(CADASTRO.INPUT_CEP).clear()
            cy.get(CADASTRO.INPUT_CEP).type(erro.cep)
            cy.get(CADASTRO.BTN_PESQUISAR_CEP).should('be.visible').click()
            cy.get(CADASTRO.INPUT_CEP).siblings().should('have.text', 'Informe um CEP válido')
        })
    });
});