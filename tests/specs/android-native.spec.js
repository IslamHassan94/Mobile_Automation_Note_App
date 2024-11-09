describe("Android native features test", () => {
  it("Access an Activity directly", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples"
    );
    await driver.pause(3000);
    await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
  });
  it("Working with dialog boxes", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples"
    );
    await driver.pause(3000);
    await $(
      '//*[@resource-id="io.appium.android.apis:id/two_buttons"]'
    ).click();
    // accept alert
    // await driver.acceptAlert();

    // dismiss alert
    // await driver.dismissAlert();

    console.log("Alert Text ----> ", await driver.getAlertText());

    // click ok button
    await $('//*[@text="OK"]').click();

    await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
  });
  it("Vertical scrolling", async () => {
    await $("~App").click();
    await $("~Activity").click();

    // Scroll to the end
    // await $(
    //   "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1, 5)"
    // );
    // await $("~Secure Surfaces").click();

    // Scroll to the till find text
    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")'
    ).click();

    await expect($("~Secure Dialog")).toExist();
  });
  it("Horizontal scrolling", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.Gallery1"
    );
    await driver.pause(3000);
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    );
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()"
    );
  });
  it.only("Exersice...", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.DateWidgets1"
    );
    const date = await $(
      "//*[@resource-id='io.appium.android.apis:id/dateDisplay']"
    );
    const currentDate = date.getText();
    await $("~change the date").click();
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    );
    await $("//*[@text='10']").click();
    await $("//*[@text='OK']").click();
    await driver.pause(2500);

    await expect(await date.getText()).not.toEqual(currentDate);
  });
});
