
import { should } from "chai";
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import Page from '../pageObjects/page.js';

const page_obj = new Page();
let config;

Given("I have loaded config-data", () => {
    cy.fixture('config-data.json').then(datas => {
        config = datas;
    })
})

Then("I navigate to {string}", (url_name) => {
    let url = config[url_name];
    cy.visit(url);
})

When("I click button {string}", (button_name) => {
    page_obj[button_name]().should('be.visible');
    page_obj[button_name]().click();
})

Then("it land in page {string}", (url_name) => {
    let url = config[url_name];
    cy.location().should(
        (location) => {
            expect(location).to.eq(url);
        }
    )
})


Then("I see {int} navigation buttons at left side", (nr) => {
    page_obj.getNavButtons_1().should(
        ($b) => {
            expect($b).to.have.length(nr)
        }
    )
})

And("I see {int} navigation buttons at right side", (nr) => {
    page_obj.getNavButtons_2().should('have.length', nr)
})

