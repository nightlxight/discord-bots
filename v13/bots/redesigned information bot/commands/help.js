var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Help command that shows list of commands'),
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
                { name: `/help`, value: 'Sends list of commands', inline: true},
            )
            .setTimestamp()
            .setFooter('Command executed by' + " " +`${interaction.user.tag}`);
        return interaction.reply({embeds: [embed] });
    },
};