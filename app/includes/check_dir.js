
var fs = require('fs');

function checkDirectory(dirName)
{
    return fs.existsSync(dirName);
}

module.exports.checkDirectory = checkDirectory;