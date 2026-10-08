class mainPage {

    elements = {
        btnNewGel: () => cy.get('a[href="/newgel-demo/"]').contains('NewGel+ (Demo)')
       
    }

    clickNewGel() {

        this.elements.btnNewGel().click()
    }
   

   

}

export default new mainPage()