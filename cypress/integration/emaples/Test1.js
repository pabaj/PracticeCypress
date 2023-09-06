/// <reference types= "cypress"/>

describe ('my fisrt test',function()

{

    it('my fist test', function()
    
    
    {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get ('.search-keyword').type('ca')
        cy.wait(4000)

        cy.get('.products').as('productloc')
        cy.get ('.product:visible').should('have.length',4)
        cy.get('@productloc').find('.product').should('have.length',4)

        cy.get('@productloc').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            console.log ('asycro')
        }
        )

        cy.get('@productloc').find('.product').each(($e1, _index , _$list) => {

           const textnaveg = $e1.find('h4.product-name').text()
           if(textnaveg.includes('Cashews'))
           {
            cy.wrap($e1).find('button').click()
           }

        })

        cy.get('.brand').should('have.text','GREENKART')
         cy.get('.brand').then(function(logoelement)
        {
           cy.log(logoelement.text());
        })
    
        


    

    })

   

}




)