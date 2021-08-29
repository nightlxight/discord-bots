const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config/token.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    let on_ready_message = require('./config/on_ready_message.json');
    console.log(on_ready_message)
    console.log(`Logged in as ${client.user}`)
});