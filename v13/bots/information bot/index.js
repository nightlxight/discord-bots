var fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { guild_id } = require('./data/guild_id.json');
const { client_id } = require('./data/client_id.json');
const { token } = require('./data/token.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    let { successfullLog } = require('./config/onReady/consoleLog/successful.json');
    console.log(successfullLog);
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
        await command.execute(interaction);
    } catch (error) {
        let { commandExecuteErrorConsole, commandExecuteErrorMessage } = require('./config/errors/errors.json');
        console.log('There was an error!');
        console.error(error);
        return interaction.reply({ content: 'There was an error!', ephemeral: true});
    }
});

client.login(token);