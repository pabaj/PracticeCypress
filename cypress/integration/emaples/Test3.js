/// <reference types= "cypress"/>

describe ('my fisrt test',function()

{

    it('my fist test', function()
    
    
    {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and ('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get ('input[type="checkbox"]').check ['option2','option3']

        //static drop down 
        cy.get('select').select('option2').should('have.value','option2')



        cy.get('#autocomplete').type('Sri')
    
        cy.get('.ui-menu-item div').each(($r1 , index, $list)=>
        {
         if($r1.text()=="Sri Lanka")
 
         {
             $r1.click()
         }
 
        })
         
        cy.get('#autocomplete').should('have.value','Sri Lanka')

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')


    
 
    })

   

}




)