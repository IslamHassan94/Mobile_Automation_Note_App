import EditNoteScreen from "../../screenobjects/android/edit-note.screen";

describe("Delete Note", () => {
  before(async () => {
    await EditNoteScreen.skipTutorial();
    await EditNoteScreen.addAndSaveNote(
      "Fav Anime List",
      "Naruto\nOnePiece\nAOT"
    );
    await EditNoteScreen.goBack();
  });
  beforeEach(() => {
    console.log("BEFORE EACH HOOK");
  });
  after(() => {
    console.log("AFTER Hook");
  });
  afterEach(() => {
    console.log("AFTER EACH HOOK");
  });
  it("Delete Note and check note in trash can", async () => {
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
