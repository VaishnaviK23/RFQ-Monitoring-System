const fs = require('fs');
let csvToJson = require('convert-csv-to-json');
let fileInput = '/home/sam/btech_project/data sheet - Sheet3(1).csv';
let fileOutput = '/home/sam/btech_project/data.json';
let a = csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInput);

/*var str = JSON.stringify(a);

fs.writeFile('result.json',str,(err)=>{
	if (err) throw err;

	
});*/

var player_array = [];
for(var key in a[0] ){
	player_array.push(key);
}
//console.log(player_array);

//console.log(a[0][player_array[0]]);

var matchNumber = a.length;
var playerNumber = player_array.length;


var i = 0;
var j = 0;
var sumRuns = [];
var count = [];
var avgRuns = [];
for (i = 1; i < playerNumber; i++) {
	sumRuns[i-1] = 0;
	count[i-1] = 0;
	for (j = 0; j < matchNumber; j++) {
		if (!(a[j][player_array[i]].includes("*") || a[j][player_array[i]].includes("-"))) {
			count[i-1]++;
			sumRuns[i-1] += parseInt(a[j][player_array[i]]);
		}
		else if (a[j][player_array[i]].includes("*")) {
			a[j][player_array[i]].replace("*", "");
			sumRuns[i-1] += parseInt(a[j][player_array[i]]);
		}
	}
	avgRuns[i-1] = sumRuns[i-1]/count[i-1];
}

console.log(sumRuns);
console.log(count);
console.log(avgRuns);






