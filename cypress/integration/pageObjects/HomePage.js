class  HomePage
{

getEditBox()
{
    cy.get('input[name="name"]:nth-child(2)')
}


GetdisplayVBox()
{
    cy.get('input[name="name"]:nth-child(1)')
}


}

// new line

export default HomePage;