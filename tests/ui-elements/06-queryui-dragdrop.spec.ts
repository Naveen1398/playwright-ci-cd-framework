import{test,expect} from '@playwright/test';

test('drag and drop ui interaction', async({page})=>{

    await page.goto("https://jqueryui.com/droppable/");

    const frameLocator= page.frameLocator(".demo-frame");
    const draggableObject= frameLocator.locator("#draggable");
    const targetObject= frameLocator.locator('#droppable');

    await draggableObject.dragTo(targetObject);

    await expect(await frameLocator.locator('#droppable')).toBeVisible();

})