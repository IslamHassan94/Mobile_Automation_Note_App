describe("Add Notes", () => {
  it("Skip tutorial", async () => {
    await $(
      '//*[@resource-id= "com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]'
    ).click();
    await expect($('//*[@text="Add note"]')).toBeDisplayed();
  });
  it("Add note, save changes & verify note", async () => {
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
  });
});
