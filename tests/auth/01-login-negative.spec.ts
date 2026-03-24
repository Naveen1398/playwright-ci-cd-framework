import{test, expect} from '@playwright/test';

test('Github - negative login validation', async({page})=>{


    // elements that are here

    const inputUsername= page.locator('#login_field');
    const inputPassword= page.locator('#password');
    const buttonSignin= page.locator("//input[@type='submit']");
    const fieldError= page.locator('#js-flash-container');

    // use the input values

    let val_username='testuser@gmail.com';
    let val_password='Password@wrong12';

    await page.goto('https://github.com/login');

    await inputUsername.fill(val_username);
    await inputPassword.fill(val_password);
    await buttonSignin.click();

    await expect(fieldError).not.toHaveText("Incorrect username or password.");
    await expect(inputUsername).toBeVisible();

});
