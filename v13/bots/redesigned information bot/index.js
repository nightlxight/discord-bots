var fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const yaml = require('js-yaml');
const settings = yaml.load(fs.readFileSync('./settings.yml', 'utf8'));
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    client.user.setStatus(`${settings.status}`);
    console.log(settings.consoleMessage);
    console.log(settings.loggedInAs + settings.space + `${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
        await command.execute(interaction);
    } catch (error) {
        console.log(`${settings.consoleCommandError}`);
        console.error(error);
        return interaction.reply({ content: `${settings.cantExecuteCommand}`, ephemeral: true});
    }
})

client.login(settings.token);

                                                            