var fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token } = require('./data/token.json');
const { client_id } = require('./data/client_id.json');
const { guild_id } = require('./data/guild_id.json');
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands(client_id, guild_id),
			{ body: commands },
		);

		console.log('Successfully registered application commands.');
	} catch (error) {
		console.log('There was an error!');
		console.error(error);
	}
})();