/// <reference types= "cypress"/>
/// <reference types = "cypress-iframe" />

describe ('test suite',function()
{

    it ('demo example', function()
    {

      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.frameLoaded ("#courses-iframe")

      cy.iframe().find("a[href*='mentorship']").eq(0).click()

    })


}













)