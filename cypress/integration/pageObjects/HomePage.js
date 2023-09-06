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

export default HomePage;