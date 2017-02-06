'use strict';

export default class NoteEditor {

  constructor(el) {
    this.el = el;
  }

  setContent(content) {
    this.el.element('#editor').waitForVisible();
    this.el.element('#editor').setValue(content);
  }

  get textarea() {
    return this.el.element('#textarea');
  }

  hasContent(content) {
    const editor = this.el.element('#editor');
    driver.waitUntil(() => editor.getAttribute('innerHTML') === content, 'The editor does not have such content');
    return true;
  }

  edit() {
    const button = this.el.element('#editNote');
    button.waitForVisible();
    button.click();
  }

  save() {
    const button = this.el.element('paper-button[name="editorSave"]');
    button.waitForVisible();
    button.click();
  }
}