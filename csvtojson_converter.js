const fs = require('fs');
let csvToJson = require('convert-csv-to-json');
let fileInput = '/home/sam/btech_project/data sheet - Sheet3(1).csv';
let fileOutput = '/home/sam/btech_project/data.json';
let a = csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInput);

var str = JSON.stringify(a);

fs.writeFile('result.json',str,(err)=>{
	if (err) throw err;

	console.log("File saved!");
});





