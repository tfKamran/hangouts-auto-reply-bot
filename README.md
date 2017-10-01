# hangouts-auto-reply-bot

[![npm version](https://badge.fury.io/js/hangouts-auto-reply-bot.svg)](https://badge.fury.io/js/hangouts-auto-reply-bot)
[![npm downloads](https://img.shields.io/npm/dt/hangouts-auto-reply-bot.svg)](https://www.npmjs.com/package/hangouts-auto-reply-bot)

[![NPM](https://nodei.co/npm/hangouts-auto-reply-bot.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/hangouts-auto-reply-bot/)

A customisable bot that replies on hangouts based on the configuration.

## How to install?

You need to have Node.js installed on your system before you can use this package. Get it here: [Node.js](https://nodejs.org/)

Once you have Node.js and NPM setup, the installation is as simple as running a command.

### Linux/Mac

    sudo npm install -g hangouts-auto-reply-bot

### Windows

Within a command prompt window with administrative privileges:

    npm install -g hangouts-auto-reply-bot

## How to use?

You can simply fire up the bot with:

    hangouts-auto-reply-bot

## How to configure?

    hangouts-auto-reply-bot-configure add <pattern>

### Examples:

    $ hangouts-auto-reply-bot-configure add test
    What would you like me to respond with for "test"? Something

This will configure the bot respond with *Something* whenever an incoming message contains the word *test*

    $ hangouts-auto-reply-bot-configure add hi|hey
    What would you like me to respond with for "hi|hey"? Hello

This will configure the bot respond with *Hello* whenever an incoming message contains the words *hi* or *hey*

    $ hangouts-auto-reply-bot-configure add how,are,you|what,about,you
    What would you like me to respond with for "how,are,you|what,about,you"? Fantastic, how about you?

This will configure the bot respond with *Fantastic, how about you?* whenever an incoming message contains all of the words *how*, *are* and *you* or *what*, *about* and *you* in any order.

You can use the following command to list the configured responses:

    hangouts-auto-reply-bot-configure list

If you prefer, you can edit the configuration file manually, which is located at `~/.hangouts-auto-reply-bot.json`.

**Note:** You need to restart the bot after you make any change in the configuration. 
