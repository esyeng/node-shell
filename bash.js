const pwdIn = require('./pwd');
const lsCmd = require('./ls');
const catCmd = require('./cat');

process.stdout.write('prompt >  ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    const cmdAr = cmd.split(' ');
    if(cmd == 'pwd'){
        pwdIn();
    }
    else if (cmd == 'ls') {
        lsCmd();
    } else if (cmdAr[0] == 'cat') {
        catCmd(cmdAr[1], 'utf8');
    }
    else{
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }

});
