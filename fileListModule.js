/**
 * Created by triedy on 9/20/14.
 */
var fs=require('fs');

module.exports = function(path, filter, callback) {
    fs.readdir(path, function(err, files) {
        if (err) {
            return callback(err);
        }

        var fileList = [];

        files.forEach(function(file){
            if (path.extname(file) === '.' + filter || filter == undefined) {
                fileList.push(file);
            }
        })
        callback(null, fileList);
    });
};

rquire('./fileListModule.js')();