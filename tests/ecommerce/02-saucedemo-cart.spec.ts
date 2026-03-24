import{test, expect, Locator} from '@playwright/test';
import { error } from 'node:console';

test('SauceDemo- cart updates', async({page}) =>{

// selectors

    const inputUsername_Sd= page.getByPlaceholder('Username');
    const inputPassword_Sd= page.getByPlaceholder('Password');
    const buttonLogin_Sd= page.locator('#login-button');
    const buttonCart_Sd= page.locator('#shopping_cart_container');

   
    async function addItemsToCart(inputText : string){
        
        const buttonAddToCart : Locator= page.locator('.inventory_item_description',{hasText: inputText})
                                .getByRole('button',{'name':'Add to cart'});

                                await expect(buttonAddToCart).toBeVisible();
                               await buttonAddToCart.click();

    }

    async function removeItemsFromCart(inRemoveItem:string) {
   
         const buttonRemove_Sd= page.locator('.cart_item_label',{hasText: inRemoveItem}).getByRole('button',{name: 'Remove'})
        
         await expect(buttonRemove_Sd).toBeVisible();
         await buttonRemove_Sd.click();
        
    }
   
                                

//inputs

    let val_username_sd = 'standard_user';
    let val_password_sd = 'secret_sauce';
     let inputText = ['Sauce Labs Backpack', 'Sauce Labs Bike Light','Sauce Labs Fleece Jacket']
    let inRemoveItem= ['Sauce Labs Bike Light'];

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
    console.log((textOfCartButton));

    if(lengthOfAddedItemsArray===textOfCartButton){

        console.log(lengthOfAddedItemsArray);
        console.log(textOfCartButton);
        console.log("Items added successfully");
    }else{
        throw new Error("All Items are not added to cart");
    }


    for(let item of inRemoveItem){
        await removeItemsFromCart(item);

    }
    textOfCartButton =  Number(await buttonCart_Sd.textContent());

    let calculatedValuetoComare : number = lengthOfAddedItemsArray-Number(await inRemoveItem.length);
    await expect(textOfCartButton).toEqual(calculatedValuetoComare);


   // await buttonAddToCart.click();
  //  await buttonRemove_Sd.click();




    


});