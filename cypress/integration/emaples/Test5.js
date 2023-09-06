
/// <reference types ="cypress" />

describe ('my fist suite', function()

{

    before (function()
    {
        cy.fixture('example').then(function(data)
        {
                this.data = data
        })


    })


    it('three function',function()
    
    {

        cy.visit ('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.wait(4000)
        cy.get('select').select(this.data.gender)
        cy.wait(4000)

    }
    )

})