/*

coming soon

*/
var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { red, green, cyan, pink, lightcyan, random_color, yellow, orange, purple, aqua } = require('../colors.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('8ball command!'),
    async execute(interaction) {
        let embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('8ball')
            .setDescription()
            .setTimestamp();
        return interaction.reply({ embeds: [embed] });
    },
};