
class Page {
    
    FeatureButton(){
        return cy.get('#page-content > header > div.styled__HeaderContent-sc-16oj5lj-0.coBPWl > div.styled__MenuWrapper-sc-16oj5lj-1.cGpLxq > ul:nth-child(1) > li:nth-child(1) > a');
    }

    getNavButtons_1(){
        return cy.get('#page-content > header > div.styled__HeaderContent-sc-16oj5lj-0.coBPWl > div.styled__MenuWrapper-sc-16oj5lj-1.cGpLxq > ul:nth-child(1) > li');
    }

    getNavButtons_2(){
        return cy.get('#page-content > header > div.styled__HeaderContent-sc-16oj5lj-0.coBPWl > div.styled__MenuWrapper-sc-16oj5lj-1.cGpLxq > ul:nth-child(2) > li');
    }

}

export default Page