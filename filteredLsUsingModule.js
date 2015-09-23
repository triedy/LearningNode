/**
 * Created by triedy on 9/20/14.
 */
var myModule = require('./fileListModule');

// the path passed in as an argument
var listPath = process.argv[2];

// the extension to filter on [optional]
var filter = process.argv[3];

myModule(listPath, filter, function(err, fileList) {
    fileList.forEach(function(file) {
        console.log('%s', file);
    });
});