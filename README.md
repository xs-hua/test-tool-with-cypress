
# Overview

This is an ui and api test framework using cypress and cucumber
- demonstrate api test with public api()
- demonstrate ui test with cypress official page

### Some opinions derived from previous use experience ###
- not compatible enough with CI, test tool(browserstack etc.)
- smaller supporting-community compared with selenium
- took longer time to pick up the cypress skeleton

### Test data resides in */fixtures/* ###

```javascript
//example: fetch data with cypress build-in command
cy.fixture('config-data.json').then(datas => {
        //do something
    })
```


### Customized cypress command in */support/command.js* ###
supporting functions are placed in */support/command-utilities.js*

```javascript
//for example:
Cypress.Commands.add('COMMAND-NAME', (axios,config) => { ...implements something... })
```

### Cucumber setup ###
plug in cucumber preproessor in */plugins/index.js*

```javascript
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```
```javascript
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
```

### Some of my ideas ###
- verify the length of elements list, both available and later one is faster

```javascript
//option-1: encapsulate expect assertion in should block
page_obj.getNavButtons_1().should(
        ($b) => {
            expect($b).to.have.length(4)
        }
)
```

```javascript
//option-2
page_obj.getNavButtons_1().should('have.length', 4)
```



