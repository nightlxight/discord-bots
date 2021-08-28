const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    let ready_message = require('./data/ready_message.json');
	console.log(ready_message);
});

client.login(token);