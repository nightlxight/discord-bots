var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { random_color, red, green, aqua, lightcyan, orange, yellow, purple, pink, cyan } = require('../colors.json');

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
            .setColor(random_color) // random_color, red, green, aqua, lightcyan, orange, yellow, purple, pink, cyan
            .setTitle('Help')
            .setDescription('Commands can be found below')
            .addFields(
                { name: `/invite`, value: 'Sends an invite link to bot!', inline: true},
                { name: `/server`, value: 'Sends information about this server!', inline: false},
                { name: `/user`, value: "Sends information about yourself!", inline: false},
            )
            .setTimestamp()
            .setFooter('Command executed by' + ` ${interaction.user.tag}`);
        return interaction.reply({embeds: [embed] });
    },
};