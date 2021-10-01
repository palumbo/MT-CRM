function customerHealth(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var cell = ss.getActiveCell().getA1Notation();
  var row = sheet.getActiveRange().getRow();
  var cellvalue = ss.getActiveCell().getValue().toString();
  var recipients = "jpalumbo1@mediatemple.net";
  var message = 'TEST';
  if(cellvalue.indexOf('I')== "CHURN RISK"){ 
    message = sheet.getRange('D'+ sheet.getActiveCell().getRowIndex()).getValue()
  }
  var subject = 'Update to '+sheet.getName();
  var body = sheet.getName() + ' has been updated. Visit ' + ss.getUrl() + ' to view the changes on row: «' + row + '». New comment: «' + cellvalue + '». For message: «' + message + '»';
  MailApp.sendEmail(recipients, subject, body);
};
