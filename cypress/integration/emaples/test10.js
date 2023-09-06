/// <reference types= "cypress"/>
/// <reference types = "cypress-iframe" />
import HomePage from '../pageObjects/HomePage'

describe ('test suite',function()
{

    before (function()
    {

        cy.fixture('example').then(function(data)
        {
            this.data = data
        })

    })

    it ('demo example', function()
    {
        const homepage=new HomePage()

        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        homepage.getEditBox.type(this.data.name)
        cy.get('input[name="name"]:nth-child(1)').should('have.value',this.data.name)
        homepage.getEditBox.should('have.attr','minlength','2')
        cy.get('#inlineRadio3').should('be.disabled')


       cy.get(':nth-child(2) > .nav-link').click()

       
    

       this.data.productname.forEach(function(element) {

        cy.selectProduct(element);
        
       });
        
      
      

    })


}

 











)