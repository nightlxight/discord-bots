/*

coming soon

*/

var fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./data/token.json');
const { guild_id } = require('./data/guild_id.json');
const { client_id } = require('./data/client_id.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
}

client.once('ready', () => {
    console.log();
    client.user.setStatus('')
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        return interaction.reply({ content: 'There was an error!', ephemeral: true });
    }
});

client.login(token);