const EditNoteScreen = require("../../screenobjects/android/edit-note.screen");

describe("Delete Note", () => {
  it("Delete Note and check note in trash can", async () => {
    await EditNoteScreen.skipTutorial();
    await EditNoteScreen.addAndSaveNote(
      "Fav Anime List",
      "Naruto\nOnePiece\nAOT"
    );
    await EditNoteScreen.goBack();
    // Get text
    const note = await EditNoteScreen.noteTitle.getText();

    // Open Note
    await EditNoteScreen.noteTitle.click();

    // click on more icon
    await EditNoteScreen.moreOption.click();

    // click delete button
    await EditNoteScreen.deleteBtn.click();

    // accept alert
    await EditNoteScreen.acceptAlert();

    // click on nav icon
    await EditNoteScreen.iconNav.click();

    // click on trash can
    await EditNoteScreen.trashCan.click();

    // Assertion
    const trashCanItem = await EditNoteScreen.trashCanItem;

    await expect(trashCanItem).toHaveText(note);
  });
});
