#!/usr/bin/env node

import {program} from 'commander';
program.version('0.0.1');

import {Adder} from './commands/add';

/*const remove = require('./commands/remove');
const list = require('./commands/list');*/

program
    .command('add <name> <source> <destination>')
    .description('create a new rsync entry')
    .action(function (args) {
        let a = new Adder
        a.add(args)
    });

/*program
    .command('remove <name>')
    .description('remove a rsync entry')
    .action(remove);

program
    .command('list')
    .description('list all available rsync entries')
    .action(list);
*/
program.parse();
