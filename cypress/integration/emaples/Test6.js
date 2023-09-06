describe ('child windows',function()

{

    it('child window', function()
    {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#opentab").invoke('removeAttr','target').click();


        cy.origin ("https://www.qaclickacademy.com/",()=>
        
        {
            cy.wait(4000)

            cy.get('.navbar-nav > :nth-child(4) > a').click();

        }
        
        
        
        )
      

        
    }
    
 

    )

}




)