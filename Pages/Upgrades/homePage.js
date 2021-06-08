module.exports = {
  // getters
  getLogo: () => $('//img[@alt="OrangeHRM"]'),
  getSendConfirmationButton: () => $('//button[text()[contains(.,"Send Confirmation")]]'),
  getAdminSection: () => $('//a[normalize-space()="Welcome Admin"]'),
  getAdmintab: () => $('//b[normalize-space()="Admin"]'),
  getAssignLeaveLabel: () => $('//span[normalize-space()="Assign Leave"]'),

  // actions
  clickEmailCheckBox: function() {
    const element = this.getEmailCheckbox();
    element.waitForClickable();
    element.click();
  },
  clickSendConfirmation: function() {
    const element = this.getSendConfirmationButton();
    element.waitForClickable();
    element.click();
  },
};
