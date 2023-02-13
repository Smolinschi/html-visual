let email ="roni_cost@example.com";
let password ="roni_cost@example.com";
let email2 = 'asasa'
let password2 = 'asdfgasc'
let blankPass = '   '
let passwordErrorMessage = 'Incorrect CAPTCHA'
let requiredFieldMessage = 'This is a required field.'

        describe("singin Test",() => {

            it("Captcha signin tests",() => {
            cy.visit("https://magento.softwaretestingboard.com/");
            cy.contains("Sign In").click();
            cy.get("#email").type(email);
            cy.get("#pass").type(password);
            cy.get("#send2").click();
            cy.contains("incorect Password").should("be.visible")
        })

        it("Invalid email adress",() => {
            cy.visit("https://magento.softwaretestingboard.com/");
            cy.contains("Sign In").click();
            cy.get("#email").type(email2);
            cy.get("#pass").type(password2);
            cy.get("#send2").click();
            cy.contains("Please enter a valid email address ",{timeout: 6000 }).should("be.visible")
        })

        it("blanck password",() => {
            cy.visit("https://magento.softwaretestingboard.com/");
            cy.contains("Sign In").click();
            cy.get("#email").type(email2);
            cy.get("#pass").type(blankPass);
            cy.get("#send2").click();
            cy.get("#pass-error").invoke("text").should("eq", requiredFieldMessage);
    

        })

        it("blank email",() => {
            cy.visit("https://magento.softwaretestingboard.com/");
            cy.contains("Sign In").click();
            cy.get("#pass").type(password);
            cy.get("#send2").click();
            cy.get("#email-error").invoke("text").should("eq", requiredFieldMessage);

        })

        it("create an account",() =>{
            cy.visit("https://magento.softwaretestingboard.com/");
            cy.contains("Sign In").click();
            cy.contains("Create an Account").click();

        })

        
        })
        
