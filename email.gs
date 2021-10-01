function onEdit(e) {
  // setting common variables
  var ss = SpreadsheetApp.getActiveSpreadsheet(); 
  var sheet = ss.getActiveSheet(); 
  var user = Session.getActiveUser(); 
  var cell = sheet.getActiveCell().getA1Notation(); 
  var val = sheet.getActiveCell().getValue(); 
  var range = sheet.getRange("A1:Z182"); // creates range needed to use getCell() later
  var url = ss.getUrl(); 
  
  // initializing event variables
  var col = e.range.getColumn(); 
  var row = e.range.getRow(); 
  var cell = e.range.getA1Notation(); 
  var cust = range.getCell(row,1).getValue(); // pulls cust name by pulling row from event and using column 1
  var csm = range.getCell(row,6).getValue(); // added this 2017.09.25 
  var pot = range.getCell(row, 2).getValue(); // added 2017.09.25 | get's company name from potential 4-star 
  
  // health status change 
  if (col == 9 && sheet.getName() == "Master List") { 
    // Browser.msgBox(user + ' changed health to ' + val); <- used to test functionality
    MailApp.sendEmail('jpalumbo1@mediatemple.net', 'Health Change', user + ' has changed health for ' + cust + ' to ' + val + " :: " + url + "#gid=0&range=" + cell);
  }
  
  // health toast
  if (col == 9 && sheet.getName() == "Master List" && e.value == "GOOD") {
    ss.toast('good customer health?! \n\n this pleases palumbo'); 
  }
  
  if (col == 8 && sheet.getName() == "Master List") { 
    // Browser.msgBox(user + ' updated the engagement date for ' + cust + ' to ' + val);
    MailApp.sendEmail('jpalumbo1@mediatemple.net', 'VPS Engagement', user + ' updated the engagement date for ' + cust + ' to ' + val + " :: " + url + "#gid=0&range=" + cell);
  }
  
  if (col == 8 && sheet.getName() == "Possible 4-star" && val == "NEEDS VALIDATION") { 
    // Browser.msgBox(pot + ' has been identifed as a potential 4-star and assigend to ' + csm); 
    MailApp.sendEmail('customersuccess@mediatemple.net', csm + ' has been assigned a potential 4-star ', csm + ", you've been assigned " + pot + " as a potential 4-star. Please investigate." + url + "#gid=542068316&range=" + cell); 
  }
  
  if (col == 8 && sheet.getName() == "Possible 4-star" && val != "NEEDS VALIDATION") {
    // Browser.msgBox(csm + ' marked ' + pot + ' as ' + val);
    MailApp.sendEmail('jpalumbo1@mediatemple.net', 'Possible 4-star update', csm + ' marked ' + pot + ' as ' + val + ". " + url + "#gid=542068316&range=" + cell)
  }
  
  
}
