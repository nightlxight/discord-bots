/* 
Coming soon!
Any help would be appreciated!
*/

const fs = require('fs');
const { token } = require('./data/token.json');
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
});


client.login(token);