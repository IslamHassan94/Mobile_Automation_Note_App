describe("Delete Note", () => {
  it("Skip tutorial", async () => {
    await $(
      '//*[@resource-id= "com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]'
    ).click();
    await expect($('//*[@text="Add note"]')).toBeDisplayed();
  });
  it("Add note, save changes & verify note", async () => {
    // Save Changes
    await $('//*[@text="Add note"]').click();
    await $('//*[@text="Text"]').click();
    await expect($('//*[@text="Editing"]')).toBeDisplayed();

    // Add Note Title
    await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'
    ).setValue("Fav Anime List");

    // Add Note Body
    await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'
    ).addValue("Naruto\nOnePiece\nAOT");

    // Save Changes
    await driver.back();

    // Assertions
    await expect(
      $(
        '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'
      )
    ).toBeDisplayed();
    await expect(
      $(
        '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'
      )
    ).toHaveText("Naruto\nOnePiece\nAOT");
    await driver.back();
  });
  it("Delete Note and check note in trash can", async () => {
    // Get text
    const note = await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
    ).getText();

    // Open Note
    await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
    ).click();

    // click on more icon
    await $("~More").click();

    // click delete button
    await $('//*[@text="Delete"]').click();

    // accept alert
    await driver.acceptAlert();

    // click on nav icon
    await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]'
    ).click();

    // click on trash can
    await $('//*[@text="Trash Can"]').click();

    // Assertion
    const trashCanItem = await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
    );

    await expect(trashCanItem).toHaveText(note);
  });
});
