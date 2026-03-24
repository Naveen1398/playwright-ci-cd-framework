import{test,expect} from '@playwright/test';

test('mouse interaction excercises', async({page})=>{

   await page.goto('https://demoqa.com/buttons');

   await page.getByRole('button',{name:'Double Click Me'}).dblclick();
   expect( page.getByText('You have done a double click')).toBeVisible();

   await page.getByRole('button',{name:'Right Click Me'}).click({button:'right'});
   expect( page.getByText('You have done a right click')).toBeVisible();

    await page.getByRole('button',{name:'Click Me', exact:true}).click();
   expect( page.getByText('You have done a dynamic click')).toBeVisible();
})