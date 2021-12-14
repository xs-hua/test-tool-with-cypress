// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })





Cypress.Commands.add('createOneCustomer', (axios,config) => {

    let uuid;
    //set up beta environment
    let postUrl = config.url.replace("beta",config.env);
    let putUrl=postUrl;
    let postUrlFinal = config.postUrlFinal.replace("beta", config.env)
    let postData={"payload":{}};//as body 
    let putData=config.putData;
    let postDataFinal=config.postDataFinal;
    let headers = config.headers;
    
    async function getPostResponse(){

        let postResult = await
        axios({
            method: "POST",
            url: postUrl,
            data: postData,
            headers: headers 
        })

        return postResult;
    }

    async function getPutResponse(){

        let response = await getPostResponse();
        console.log(response);
        uuid=response.data.lead.uuid;
        putUrl=postUrl+"/"+uuid;
        putData.uuid=uuid;
        

        let putResult = await
        axios({
            method: "PUT",
            url: putUrl,
            data: putData,
            headers: headers
        });

        return putResult;
    }

    async function getPostResponseFinal(){

        let response = await getPutResponse();
        console.log(response);
        postDataFinal.uuid=response.data.lead.uuid;

        let postResult = await
        axios({
            method: "POST",
            url: postUrlFinal,
            data: postDataFinal,
            headers: headers
        });

        console.log(postResult);

        return postResult;
    }

    getPostResponseFinal();

})





