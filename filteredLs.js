/**
 * Created by triedy on 9/20/14.
 */
var fs = require('fs');
var path = require('path');

// empty array to hold the file list to return
//var files = [];

// the path passed in as an argument
var listPath = process.argv[2];

// the extension to filter on [optional]
var filter = process.argv[3];

fs.readdir(listPath, function(err, files) {
   files.forEach(function(file){
       if (path.extname(file) === '.' + filter || filter == undefined) {
           console.log("%s", file);
       }
   })
});


// Preferred Solution

/*

var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
            console.log(file)
    })
})

PROBLEMS WITH THIS SOLUTION:
1. Does not handle missing filter well
2. Does not ignore directories and hidden files
*/
