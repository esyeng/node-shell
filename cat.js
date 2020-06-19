const fs = require('fs');

module.exports = function catCmd(filename, option) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    process.stdout.write('\nprompt > ');
  });
}
