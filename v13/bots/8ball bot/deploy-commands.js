var fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token } = require('./data/token.json');
const { client_id } = require('./data/client_id.json');
const { guild_id } = require('./data/guild_id.json');
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    
}