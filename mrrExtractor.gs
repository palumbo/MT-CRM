function onOpen(e) {
  // create custom menu
  var ui = SpreadsheetApp.getUi(); 
  ui.createMenu('Functions')
  .addItem('Extract MRR', 'mrrExtractor')
  .addItem('Reset Sheet', 'resetSheet')
  .addToUi(); 
}; 



function resetSheet(){
  SpreadsheetApp.getActiveSheet().clearContents(); 
  SpreadsheetApp.getActiveSheet().clearFormats(); 
  var cols = SpreadsheetApp.getActiveSheet().getMaxColumns();
  var howMany = 26 - cols 
  SpreadsheetApp.getActiveSheet().insertColumnsAfter(cols, howMany);
  
  // resizes all columsn to 100px
  for (var i = 1; i <= 26; i++) {
    SpreadsheetApp.getActiveSheet().setColumnWidth(i, 100);
  }; 
}; 


function mrrExtractor(){
  // initialize common variables
  var ss = SpreadsheetApp.getActiveSpreadsheet(); 
  var sheet = ss.getActiveSheet(); 
  var numRows = sheet.getLastRow(); 
  var mrrRange = sheet.getRange(1,1, numRows, 1); 
  var dateRange = sheet.getRange(1,2, numRows, 2); 
  //var dateRange = sheet.getRange("D1:D50"); 
  var arrow = "-> "; 
  
  // convert long string to MRR
  for (var i = 1; i <= numRows; i++) {
    var currentValue = mrrRange.getCell(i,1).getValue(); 
    var mrr = currentValue.substring(currentValue.indexOf(arrow) + arrow.length);
    mrrRange.getCell(i,1).setValue(mrr).setNumberFormat("$#,##0.00;$(#,##0.00)"); 
  }; 
  
  // delete columns B and C
    sheet.deleteColumns(2,2); 
    
  // change date formatting
  dateRange.setNumberFormat("M/d/yy");
  
  // insert column
  sheet.insertColumnBefore(1);
  
  // grab new data range
  var newDateRange = sheet.getRange(1,3,numRows); // for some reason had to grab range using only (row, col, numRows)

  // copy dates from col C to Col A
  newDateRange.copyTo(sheet.getRange(1,1));
  
  // delete col c
  sheet.deleteColumn(3);
  

  
  // build the chart
  var data = sheet.getRange(1,1,numRows,2); 

  var chartBuilder = sheet.newChart()
  chartBuilder.addRange(data)
     .setChartType(Charts.ChartType.LINE)
     .setPosition(3,4,21,10)
  
  sheet.insertChart(chartBuilder.build()); 
  
  
  
};
