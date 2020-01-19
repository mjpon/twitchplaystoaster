var childProc = require('child_process');
childProc.exec('open -a "Google Chrome" chrome://newtab', callback) {
    callback('succ')
};