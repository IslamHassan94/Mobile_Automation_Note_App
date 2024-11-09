describe("Android Elements Tests", () => {
  it("Find element by accessiablity id", async () => {
    // find element
    const appOption = await $("~App");
    // click on element
    await appOption.click();
    // assertions
    const actionBar = await $("~Action Bar");
    await expect(actionBar).toBeExisting();
  });

  it("Find element by class name", async () => {
    const className = await $("android.widget.TextView");
    console.log(className.getText());
    await expect(className).toHaveText("API Demos");
  });

  xit("Find element by xpath", async () => {
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
    await $(
      '//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]'
    ).click();
    await $('//android.widget.TextView[@text="Command two"]').click();
    const myTextAssertion = await $("//android.widget.TextView");
    await expect(myTextAssertion).toHaveText("You selected: 1 , Command two");
  });

  it("Find element by UIautomator", async () => {
    await $('android=new UiSelector().textContains("Alert")').click();
  });

  it("Find multiple elements", async () => {
    const expectedList = [
      "API Demos",
      "Access'ibility",
      "Accessibility",
      "Animation",
      "App",
      "Content",
      "Graphics",
      "Media",
      "NFC",
      "OS",
      "Preference",
      "Text",
      "Views",
    ];
    const actualList = [];

    // Find multiple elements
    const textList = await $$("android.widget.TextView");
    // Loop through them
    for (const element of textList) {
      actualList.push(await element.getText());
    }
    // Assert the list
    await expect(actualList).toEqual(expectedList);
  });

  it.only("Handle Text Fields", async () => {
    await $("~Views").click();
    await $("~Auto Complete").click();
    await $("~1. Screen Top").click();
    const textField = await $(
      '//*[@resource-id="io.appium.android.apis:id/edit"]'
    );
    await textField.addValue("Canada");
    await expect(textField).toHaveText("Canada");
  });
});
