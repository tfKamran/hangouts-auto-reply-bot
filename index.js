#! /usr/bin/env node

const HangoutsBot = require('hangouts-bot');
const ConfigManager = require('user-config-manager');

const configFilePath = require('os').homedir() + '/.hangouts-auto-reply-bot.json';

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
    var wordsInMessage = message.toLowerCase().replace(/[^a-z0-9 ]/g, "").split(' ');

    Object.keys(configuration).filter(item => item !== 'password').forEach(patterns => {
        patterns.split('|').forEach(words => {
            var matches = true;

            words.split(',').forEach(word => {
                matches = matches && wordsInMessage.indexOf(word) > -1
            });

            if (matches) {
                bot.sendMessage(from, configuration.prefix + ' ' +  configuration[patterns]);
            }
        });
    });
});
