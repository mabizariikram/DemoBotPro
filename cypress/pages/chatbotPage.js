class chatbotPage {

    elements = {
    msgbot: () => cy.get(".bpMessagePreviewMessage").contains('Hi! 👋 Need help?'),
    btnbot:()=> cy.get('#fab-root'),
    msgassistant:()=> cy.get('#fab-root').shadow().find('.bpMessageListMarqueeTitle'),
    champsaisie:()=> cy.get('#fab-root',{ timeout: 150000 }).shadow().find('.bpReset.bpComposerContainer.bpFont'),
    btninput:()=> cy.get('#fab-root').shadow().find('.bpComposerInput'),
    msgWING:()=>cy.get('#fab-root').shadow().find('.bpMessageBlocksTextText'),
    btnscrolldown:()=>cy.get('#fab-root').shadow().find('.bpMessageListScrollDownButton'),
    closebtn:()=>cy.get('#fab-root').shadow().find('.lucide.lucide-x.bpHeaderContentActionsIcons'),
    restartbtn:()=>cy.get('#fab-root').shadow().find('.lucide.lucide-rotate-ccw.bpHeaderContentActionsIcons'),
    btnNewConv:()=>cy.get('#fab-root').shadow().find('.bpModalButtonConfirm')
       
    }

   // les actions sur les elements de la page
    
    clickBtnbot() {
          this.elements.btnbot().shadow().find('.bpFabContainer').click({ force: true })
    }
    getMsgassistant() {
        return this.elements.msgassistant().should('be.visible').and('contain.text', 'NewGel+ Support Assistant')
    
    }
    clickBtninput(text) {
         // attendre que le bot ait fini de  et on l'utilise psq on attens un etat paas un temps fixe
        this.elements.champsaisie().should('have.attr', 'data-waiting', 'false').and('have.attr', 'data-disabled', 'false')
        this.elements.btninput().should('be.visible').and('not.be.disabled').type(`${text}{enter}`)
    }
    getmsgWING() {
        return this.elements.msgWING().should('be.visible')
    }

    clickBtnscrolldown() {
        this.elements.btnscrolldown().should('be.visible').click({ force: true })
    }
    clickClosebtn() {
        this.elements.closebtn().should('be.visible').click({ force: true })
    }
    clickRestartbtn() {
        this.elements.restartbtn().should('be.visible').click({ force: true })
    }

    clickNewConv() {
        this.elements.btnNewConv().should('have.text', 'New conversation').click({ force: true })
    }
}

export default new chatbotPage()