const conf = new (require('conf'))();
const chalk = require('chalk');

function list() {
    let rsyncEntryies = conf.get('rsync-entries');

    if (rsyncEntryies && rsyncEntryies.length) {
        todoList.forEach((entry) => {
            console.log(entry.name);
        });
    } else {
        console.log(chalk.red.bold("You don't have any entries yet."));
    }
}

module.exports = list;
