var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const yaml = require('js-yaml');
const settings = yaml.load(fs.readFileSync('./settings.yml', 'utf8'));

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription(`${settings.helpDescription}`),
    async execute(interaction) {
        let titles = [
            "Help command",
            "help",
            "🤖" //,
            // add more titles here
            // the last title should not contain a comma
        ];

        let title = titles[Math.floor(Math.random() * titles.length)];
        let embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(title)
            .setDescription('Commands can be found below')
            .addFields(
                { name: `/help`, value: `${settings.helpDescription}`, inline: true},
                { name: `/user`, value: 'Sends information about yourself', inline: false},
                { name: `/server`, value: 'Sends information about this server', inline: false},
            )
            .setTimestamp()
            .setFooter('Command executed by' + " " +`${interaction.user.tag}`);
        return interaction.reply({embeds: [embed] });
    },
};