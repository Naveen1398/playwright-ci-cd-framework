import{test, expect} from '@playwright/test';

test('date picker challenge', async({page})=>{

    //given
    let url= 'https://jqueryui.com/datepicker/';
    const iframeLocator= page.frameLocator('.demo-frame');
    const dateField= iframeLocator.locator('#datepicker');
    const prevButton= iframeLocator.getByTitle('prev');
    const datePickerMonth= iframeLocator.locator('.ui-datepicker-month');
    const datePickerYear= iframeLocator.locator('.ui-datepicker-year');

    var inputDate= 'January 13, 1998';
    //let 


    //when
    await page.goto(url);
    await dateField.fill(inputDate);
    await page.keyboard.press('Escape');
    let outDateField= await dateField.inputValue();
    expect(outDateField).toContain(inputDate);
    //then

})