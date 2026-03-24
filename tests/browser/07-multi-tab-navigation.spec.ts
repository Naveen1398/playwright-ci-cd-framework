import{test,expect} from '@playwright/test';

test('multi tab navigation', async({page})=>{


    const clickHere_Button= page.getByRole('link',{name:'Click Here'});


    await page.goto("https://the-internet.herokuapp.com/windows");

   let [newPage]= await Promise.all([
    page.waitForEvent('popup'),
    await clickHere_Button.click()
   ]);
    await expect(newPage).toHaveTitle("New Window");
    newPage.close();
    
    await expect(page).toHaveTitle("The Internet");
    await page.waitForTimeout(5000);
    page.close();

});