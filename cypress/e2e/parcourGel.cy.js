//directive TypeScript de référence de triple-slash (triple-slash directive)
///<reference types="cypress" />
import mainPage from '../pages/mainPage';
import chatbotPage from '../pages/chatbotPage';
describe('authentification sauce Demo', () => {
    beforeEach(() => {
        cy.visit('https://demobotpro.com/')
    });


    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            cy.screenshot(`failure-${this.currentTest.title}`);
        }
        // cy.clearCookies();
        // cy.clearLocalStorage();
        // sessionStorage.clear();
     
    });


    it('go to New Gel+ ', () => {
        // Click on the "New Gel+ (Demo)" button + assertion to verify that the URL includes "/newgel-demo/"
        mainPage.clickNewGel();
        // Verify that the chatbot message is visible cest une fenetre de dialogue qui s'ouvre en bas à droite de l'écran
       cy.on('window:alert', (str) => {
        expect(str).to.equal('Hi! 👋 Need help?');
  
      });
      // click sur le btn bot
        chatbotPage.clickBtnbot();
        chatbotPage.getMsgassistant();
//   cy.get('#fab-root', { timeout: 15000 })
//   .shadow()
//   .find('.bpFabContainer')
//   .click({ force: true })

// saisir un message dans le champ de saisie du chatbot
chatbotPage.clickBtninput("What is NewGel+?");
chatbotPage.getmsgWING().should('contain.text','is a');


// saisir un autre message dans le champ de saisie du chatbot
chatbotPage.clickBtninput("What are its benefits?");

// scroller vers le bas pour voir la réponse du bot
chatbotPage.clickBtnscrolldown();
chatbotPage.getmsgWING().should('contain.text','NewGel+ ');


// saisir un autre message dans le champ de saisie du chatbot qui na ps de relation avec le sujet du bot
chatbotPage.clickBtninput("What is the weather like today?");
chatbotPage.clickBtnscrolldown();
chatbotPage.getmsgWING().should('contain.text',' I couldn\'t find that information in the company\'s documentation.');


// clicker sur le bouton de fermeture du chatbot
chatbotPage.clickClosebtn();

// reclicker sur le bouton du bot pour le réouvrir
chatbotPage.clickBtnbot();

// clicker sur le bouton de redémarrage du chatbot
chatbotPage.clickRestartbtn();
chatbotPage.clickNewConv();
chatbotPage.getMsgassistant();





  
      
        
  

    });



});