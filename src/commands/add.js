import conf from 'conf';
import chalk from 'chalk';

class Adder {
    constructor() {
        this._conf = new conf
        this._chalk = chalk
    }

    add(name, src, dst) {
        let rsyncEntryies = conf.get('rsync-entries');
        if (!rsyncEntryies) {
            rsyncEntryies = [];
        }
        rsyncEntryies.push({
            name: name,
            source: src,
            destination: dst,
        });
        this._conf.set('rsync-entries', rsyncEntryies);
        console.log(this._chalk.green.bold('Task has been added successfully!'));
    }
}

module.exports = {Adder}
