function general() { 
  var sss = SpreadsheetApp.openById('1AYSSlhWZNctxMwM5nwchFuIYlnfyzBwRmrobrNvTekM'); 
 var ss = sss.getSheetByName('Engine'); 
  var range = ss.getRange('F1:G7'); 
  var data = range.getValues(); 
  Logger.log(data); 
  
  // grab second tab
  var tss = SpreadsheetApp.openById('1CrZdGu4tIxnWFcluAT11Dhx_DTQHTNs3b0jGrYeKLvk'); 
  var ts = tss.getSheetByName('General');
  
  // insert date
  var date = Utilities.formatDate(new Date(), "GMT", "MM-dd-yyy"); 
  var last = ts.getLastColumn() + 2;
  ts.getRange(1, last).setValue(date); 
  
  // var last = ts.getLastColumn() + 2; Logger.log(last); 
  ts.getRange(2,last,7,2).setValues(data);
  
  // resizes column width
  ts.autoResizeColumn(last);
  ts.autoResizeColumn(last+1);
}
