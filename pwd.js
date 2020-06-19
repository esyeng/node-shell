module.exports = function printpwd() {
    // pwd code
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ');
  };