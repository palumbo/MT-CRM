function richard() {
  var sss = SpreadsheetApp.openById('1AYSSlhWZNctxMwM5nwchFuIYlnfyzBwRmrobrNvTekM'); 
  var ss = sss.getSheetByName('Engine'); 
  var range = ss.getRange('A1:C10'); 
  var data = range.getValues(); 
  Logger.log(data); 
  
  // grab second tab
  var tss = SpreadsheetApp.openById('1CrZdGu4tIxnWFcluAT11Dhx_DTQHTNs3b0jGrYeKLvk'); 
  var ts = tss.getSheetByName('Richard');
  
  // insert date
  var date = Utilities.formatDate(new Date(), "GMT", "MM-dd-yyy"); 
  var last = ts.getLastColumn() + 2;
  ts.getRange(1, last).setValue(date); 
  
  // var last = ts.getLastColumn() + 2; Logger.log(last); 
  ts.getRange(2,last,10,3).setValues(data);
  
  
  // resizes column width
  ts.autoResizeColumn(last);
  ts.autoResizeColumn(last+1);
  
}

