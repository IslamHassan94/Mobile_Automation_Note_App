import AddNoteScreen from "../../screenobjects/android/add-note.screen";

describe("Add Notes", () => {
  it("Skip tutorial", async () => {
    await AddNoteScreen.skipBtn.click();
    await expect(AddNoteScreen.addNoteText).toBeDisplayed();
  });
  it("Add note, save changes & verify note", async () => {
    await AddNoteScreen.addNoteText.click();
    await AddNoteScreen.textOption.click();
    await expect(AddNoteScreen.textEditing).toBeDisplayed();

    // Add Note Title
    await AddNoteScreen.noteHeading.setValue("Fav Anime List");

    // Add Note Body
    await AddNoteScreen.noteBody.addValue("Naruto\nOnePiece\nAOT");

    // Save Changes
    await AddNoteScreen.saveNote();

    // Assertions
    await expect(AddNoteScreen.editBtn).toBeDisplayed();

    await expect(AddNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAOT");
  });
});
