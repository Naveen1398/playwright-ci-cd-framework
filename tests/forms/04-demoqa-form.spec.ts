import{test,expect } from '@playwright/test';


test('Automation practice Form',async({page})=>{
//selectors

    const firstNameField= page.getByPlaceholder('First Name');
    const lastNameField= page.getByPlaceholder('Last Name');
    const emailField= page.locator('#userEmail');
   
    async function chooseGender(inputGender:string) {
    const genderRadio= page.locator(`//input[@value='${inputGender}']`);
        
        await expect.soft(genderRadio).not.toBeChecked();
        await genderRadio.check();
        await expect.soft(genderRadio).toBeChecked();

        
    }    

    const mobileField= page.getByPlaceholder('Mobile Number');
    const dobField= page.locator('#dateOfBirthInput');
    
    async function selectHobbies(inputHobby:string) {
        const hobbiesCheckBox=  page.getByRole('checkbox',{name:inputHobby});

        await hobbiesCheckBox.check();

        await expect(hobbiesCheckBox).toBeChecked();
    }
    const uploadFileField = page.locator('#uploadPicture');
    const currentAddressField= page.getByPlaceholder('Current Address');
    const stateDropDownInputField= page.locator('#react-select-3-input');
   // const stateDropDownOption= page.loc
    const cityDropDownInputField = page.locator('#react-select-4-input');

    const submitButton= page.getByRole('button',{name:'Submit'});

    const submittedForm= page.locator('.modal-body');
//inputs

    let val_StudentFirstName = 'Naveen';
    let val_StudentLastName = 'Rana';
    let val_email_DQ= 'test@gmail.com';
    let val_Gender_DQ= 'Male';
    let val_Phone_DQ= '1894231586';
    let val_DateOfBirth_DQ= '13 Jan 1950';
    let val_Hobbies_DQ= ['Music','Reading'];
    let loc_FileToShare= 'res/forPlaywrightUploads.jpg';
    let val_CurrentAddress="H.no. 121, test coloney, sunder bajaar, sunderban";
    let val_State= 'Haryana';
    let val_City= 'Panipat';

//operations

    await page.goto('https://demoqa.com/automation-practice-form');

    await firstNameField.fill(val_StudentFirstName);
    await lastNameField.fill(val_StudentLastName);
    await emailField.fill(val_email_DQ);
    await chooseGender(val_Gender_DQ);
    await mobileField.fill(val_Phone_DQ);
    await dobField.fill(val_DateOfBirth_DQ);
   
   for(let item of val_Hobbies_DQ){
    await selectHobbies(item);
   }
    await uploadFileField.setInputFiles(loc_FileToShare);
    await currentAddressField.fill(val_CurrentAddress);
    await stateDropDownInputField.fill(val_State);
    await page.keyboard.press('Enter');
    await cityDropDownInputField.fill(val_City);
    await page.keyboard.press('Enter');

    await submitButton.click();

    //expectations

    const valueOfSubmttedForm: string=   String( await submittedForm.textContent());

    await expect(valueOfSubmttedForm).toContain(val_StudentFirstName);


});