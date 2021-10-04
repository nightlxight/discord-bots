var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const yaml = require('js-yaml');
const settings = yaml.load(fs.readFileSync('./settings.yml', 'utf8'));
const { red, green, random_color, aqua, cyan, lightcyan, purple, pink, yellow, orange } = require('../colors.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription(`${settings.helpDescription}`),
    async execute(interaction) {
        let titles = [
            "Help command",
            "help",
            "🤖" // ,
            // * add more titles here
            // * the last title should not contain a comma
        ];

        let title = titles[Math.floor(Math.random() * titles.length)];
        
        let embed = new MessageEmbed()
            .setColor(random_color) // * red, green, random_color, aqua, cyan, lightcyan, purple, pink, yellow, orange
            .setTitle(title)
            .setDescription('Commands can be found below')
            .addFields(
                { name: `/help`, value: `${settings.helpDescription}`, inline: true},
                { name: `/user`, value: `${settings.userDescription}`, inline: false},
                { name: `/server`, value: `${settings.serverDescription}`, inline: false},
            )
            .setTimestamp()
            .setFooter('Command executed by' + " " +`${interaction.user.tag}`);
        function sendHelpEmbed () {
            return interaction.reply({embeds: [embed] });
        };

        let send = () => {
            sendHelpEmbed();
        };
        
        try {
            send();
        } catch (error) {
            // * return interaction.reply({content: "There was an error!"});
            console.warn("There was an error!");
            console.error(error);
        };
    },
};