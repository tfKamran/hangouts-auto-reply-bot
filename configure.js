#! /usr/bin/env node

const ConfigManager = require('user-config-manager');
const readline = require('readline-sync');

const configFilePath = require('os').homedir() + '/.hangouts-auto-reply-bot.json';

if (process.argv.length < 3) {
    console.log(
        'usage: \n'
        + '    ' + process.argv[1].substring(process.argv[1].lastIndexOf('/') + 1) + ' list' + '\n'
        + '    ' + process.argv[1].substring(process.argv[1].lastIndexOf('/') + 1) + ' add "pattern"' + '\n'
        );

    return;
}

switch (process.argv[2]) {
    case 'list':
        const templates = ConfigManager(configFilePath, []).getConfiguration()

        Object.keys(templates).forEach(pattern => {
            console.log('"' + pattern + '" will be replied with "' + templates[pattern] + '"');
        });
        
        break;

    case 'add':
        const pattern = process.argv[3];

        ConfigManager(configFilePath, [
            { 'key': pattern, 'caption': 'What would you like me to respond with for "' + pattern + '"? ' }
        ]).getConfiguration()
        
        break;

    case 'clear':
        ConfigManager(configFilePath).clear();

        break;
}
