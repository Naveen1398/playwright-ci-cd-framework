import{test, expect, Locator} from '@playwright/test';
import { error } from 'node:console';

test('SauceDemo- checkout Validations', async({page}) =>{

// selectors

    const inputUsername_Sd= page.getByPlaceholder('Username');
    const inputPassword_Sd= page.getByPlaceholder('Password');
    const buttonLogin_Sd= page.locator('#login-button');
    const buttonCart_Sd= page.locator('#shopping_cart_container');
    const buttonCheckOut_Sd= page.getByRole('button', {name:'Checkout'});
    const fieldCheckoutHeader= page.getByText('Checkout: Your Information');
    const inputFirstName_Sd= page.getByPlaceholder('First Name');
    const inputLastName_Sd= page.getByPlaceholder('Last Name');
    const inputZip_Sd= page.getByPlaceholder('Zip/Postal Code');
    const buttonContinue_Sd= page.getByRole('button', {name:'Continue'});
    const fieldSummaryInfo_Sd= page.locator('.summary_info');
    const buttonFinish_Sd= page.getByRole('button',{name:'Finish'});
    const textThankYou_Sd= page.getByText('Thank You for your order!');

   
    async function addItemsToCart(inputText : string){
        
        const buttonAddToCart : Locator= page.locator('.inventory_item_description',{hasText: inputText})
                                .getByRole('button',{'name':'Add to cart'});

                                await expect(buttonAddToCart).toBeVisible();
                               await buttonAddToCart.click();

    }

  
                                

//inputs

    let val_username_sd = 'standard_user';
    let val_password_sd = 'secret_sauce';
     let inputText = ['Sauce Labs Backpack', 'Sauce Labs Fleece Jacket'];
     let val_firstName='Naveen';
     let val_LastName='Rana';
     let val_PostalCode='12345';
   
    

    // main work 
    page.goto('https://www.saucedemo.com/');

    //login
    await inputUsername_Sd.fill(val_username_sd);
    await inputPassword_Sd.fill(val_password_sd);
    await buttonLogin_Sd.click();

    // adding items to cart
    for(let item of inputText){
           await addItemsToCart(item);
    }
    
    await expect(buttonCart_Sd).toBeVisible();
    await buttonCart_Sd.click();

    let lengthOfAddedItemsArray : number = inputText.length;
    let textOfCartButton: number=  Number(await buttonCart_Sd.textContent());
    

    if(lengthOfAddedItemsArray===textOfCartButton){

        console.log(lengthOfAddedItemsArray);
        console.log(textOfCartButton);
        console.log("Items added successfully");
    }else{
        throw new Error("All Items are not added to cart");
    }

    await buttonCheckOut_Sd.click();
    await expect(fieldCheckoutHeader).toBeVisible();

    await inputFirstName_Sd.fill(val_firstName);
    await inputLastName_Sd.fill(val_LastName);
    await inputZip_Sd.fill(val_PostalCode);

    await buttonContinue_Sd.click();
   
    await expect(fieldSummaryInfo_Sd).toBeVisible();

    await buttonFinish_Sd.click();
    await expect(textThankYou_Sd).toBeVisible();
     


});