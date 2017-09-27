#! /usr/bin/env node

const HangoutsBot = require('hangouts-bot');
const ConfigManager = require('user-config-manager');

const configFilePath = require('os').homedir() + '/.HangoutsAutoBot.json';

const configuration = ConfigManager(configFilePath, [
    { 'key': 'whois', 'caption': 'Email: ' },
    { 'key': 'password', 'caption': 'Password: ', 'options': {hideEchoBack: true} },
    { 'key': 'prefix', 'caption': 'What would you like to add as a prefix for bot responses? ' }
]).getConfiguration();

if (!configuration.templates) {
    configuration.templates = {};
}

var bot = new HangoutsBot(configuration.whois, configuration.password);

bot.on('online', function() {
    console.log('Bot is online');
});

bot.on('message', function(from, message) {
    Object.keys(configuration).forEach(patterns => {
        var matches = true;

        patterns.split(',').forEach(pattern => matches = matches && message.toLowerCase().match(pattern + '+'));

        if (matches) {
            bot.sendMessage(from, configuration.prefix + ' ' +  configuration[patterns]);
        }
    });
});