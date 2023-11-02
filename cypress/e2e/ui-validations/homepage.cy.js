import homepage from "../../support/pages/home-page"

describe('Verify shop page elements', () => {

  beforeEach('invoke application',()=>{
    cy.visit('/')
  })
  it('verify home page links', () => {
    const navigationLinks = ['Cart','Checkout','My account','Shop']
    
    homepage.verifyNavigationLinks(navigationLinks)
   
  })

  it('verify products in homepage',()=>{

    const products = ['Daily Subscription','Glasses', 'Laptops','Pants','Phones','Shirt','Shoes','Socks']
    
    homepage.verifyProductsInHomepage(products)
  })
})