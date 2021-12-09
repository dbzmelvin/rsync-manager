#!/usr/bin/env node

const { program } = require('commander');
program.version('0.0.1');

const add = require('./commands/add');
const remove = require('./commands/remove');
const list = require('./commands/list');

program
    .command('add <name> <source> <destination>')
    .description('create a new rsync entry')
    .action(add);

program
    .command('remove <name>')
    .description('remove a rsync entry')
    .action(remove);

program
    .command('list')
    .description('list all available rsync entries')
    .action(list);

program.parse();
