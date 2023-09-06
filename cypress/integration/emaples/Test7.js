/// <reference types= "cypress"/>

describe ('my fisrt test',function()

{

    it('my fist test', function()
    
    
    {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       

        cy.get('tr td:nth-child(2)').each(($e1, _index , _$list) => {

            const textnaveg = $e1.text()
            if(textnaveg.includes('Python'))
            {
             cy.get("tr td:nth-child(2)").eq(_index).next().then(function(price)
             {
                 const rest = price.text()
                 expect(rest).to.equal('25')

             })

            }

//cy.get ("#mousehover").invoke ( 'show')
cy.contains('Top').click({force: true})
cy.url().should('include','top')


            
 
         })
        


    

    })

   



}


)