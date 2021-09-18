var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { red, green, cyan, pink, lightcyan, random_color, yellow, orange, purple, aqua } = require('../colors.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('8ball command!'),
    async execute(interaction) {
        let responses = [
            "Yes!",
            "No!",
            "Probably!",
            "Definetely!" //,
            // add more responses here
        ];
        let response = responses[Math.floor(Math.random() * responses.length)];
        let embed = new MessageEmbed()
            .setColor(random_color) // red, green, cyan, pink, lightcyan, random_color, yellow, orange, purple, aqua
            .setTitle('8ball')
            .setDescription("🎲" + " " + response)
            .setFooter()
            .setTimestamp();
        return interaction.reply({ embeds: [embed] });
    },
};