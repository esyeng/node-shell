const pwdIn = require('./pwd');
const lsCmd = require('./ls');
const catCmd = require('./cat');
const curlCmd = require('./curl');
//const { url } = require('inspector');

process.stdout.write('prompt >  ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    const cmdAr = cmd.split(' ');
    if(cmd == 'pwd'){
        pwdIn();
    }
    else if (cmd == 'ls') {
        lsCmd(done);
    } else if (cmdAr[0] == 'cat') {
        catCmd(done,cmdAr[1], 'utf8');
    } else if (cmdAr[0] == 'curl') {
        curlCmd(cmdAr[1]);
    }
    else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }

});

const done = (output) => {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}
module.exports = {done};
