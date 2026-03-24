import {test,expect, Page } from '@playwright/test';

test("Serching playwright through git", async ({page})=>{

    await page.goto("https://github.com/");
    //locators

    const searchButton= page.locator(".search-input");
    const searchField= page.locator("#query-builder-test");
   // const repoTitle= 

   
   const firstLinkOfRepo= page.getByRole('link', {name: /playwright/i}).first();
    

   await searchButton.click();
   await searchField.fill("playwright");
   await page.keyboard.press("Enter");
  
   await firstLinkOfRepo.click();

   await expect(page.locator("[itemprop='name']")).toBeVisible();
   await page.waitForLoadState();
   await expect(page.getByRole('heading',{name:"About"})).toBeVisible();
    

});