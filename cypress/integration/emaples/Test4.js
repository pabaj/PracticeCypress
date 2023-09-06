/// <reference types= "cypress"/>

describe ('my fisrt test',function()

{

    it('my fist test', function()
    
    
    {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       
        cy.get('#alertbtn').click();
        cy.get('[value="Confirm"]').click()

        cy.on('window:alert', (str)=>
        {
            //mocha

            expect(str).to.equal('Hello, share this practice page and share your knowledge')
        })
        


    

    })

   

}




)