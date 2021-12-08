const config = require('conf');
const conf = new config();

import chalk from 'chalk';

function add(name, source, destination) {
    let rsyncEntryies = conf.get('rsync-entries');

    if (!rsyncEntryies) {
        rsyncEntryies = [];
    }

    rsyncEntryies.push({
        name: name,
        source: source,
        destination: destination,
    });

    conf.set('rsync-entries', rsyncEntryies);

    console.log(chalk.green.bold('Task has been added successfully!'));
}

module.exports = add;
