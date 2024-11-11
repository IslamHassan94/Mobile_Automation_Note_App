const AddNoteScreen = require("./add-note.screen");

class EditNoteScreen {
  get noteTitle() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
    );
  }
  get moreOption() {
    return $("~More");
  }

  get deleteBtn() {
    return $('//*[@text="Delete"]');
  }
  get iconNav() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]'
    );
  }

  get trashCan() {
    return $('//*[@text="Trash Can"]');
  }

  get trashCanItem() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
    );
  }
  async skipTutorial() {
    AddNoteScreen.skipBtn.click();
  }
  async addAndSaveNote(noteHeading, noteBody) {
    await AddNoteScreen.addNoteText.click();
    await AddNoteScreen.textOption.click();
    await expect(AddNoteScreen.textEditing).toBeDisplayed();

    // Add Note Title
    await AddNoteScreen.noteHeading.setValue(noteHeading);

    // Add Note Body
    await AddNoteScreen.noteBody.addValue(noteBody);

    // Save Changes
    await AddNoteScreen.saveNote();
  }
  async goBack() {
    await driver.back();
  }
  async acceptAlert() {
    await driver.acceptAlert();
  }
}

module.exports = new EditNoteScreen();
