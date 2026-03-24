import{test, expect} from '@playwright/test';

test("Checking Knowledge of Checkbox and radio buttons",async({page})=>{
    await page.goto("https://demoqa.com/checkbox");

    //selectors
    const itemsToCheck=["Documents","Downloads","Notes"];

    //const closed_treeSwitcher= page.locator('.rc-tree-switcher');
    const commonName= "Select";

    

    while(await page.locator(".rc-tree-switcher_close").count()>0){
        await page.locator(".rc-tree-switcher_close").first().click();
    }

    

    for(let item of itemsToCheck){
            console.log(`{name:${commonName} ${item}}`);
                     
            await page.getByRole('checkbox',{name:`${commonName} ${item}`}).check();
            const valuetoCheck= `${item}`.toLowerCase();
             await expect(page.locator("#result")).toContainText(valuetoCheck);

    }




});
