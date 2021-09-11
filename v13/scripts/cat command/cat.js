/*

coming soon

*/

var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const gifs = require('./assets/gif/gifs.json');
const { red, green, yellow, orange, purple, aqua, lightcyan, cyan, random_color, pink } = require('./assets/colors.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cat')
        .setDescription('Sends cat photo or gif!'),
    async execute(interaction) {
        const cats = gifs.cats;
        let titles = [];
        let title = titles[Math.floor(Math.random() * titles.length)];
        let embed = new MessageEmbed()
            .setColor(random_color) // red, green, yellow, orange, purple, aqua, lightcyan, cyan, random_color, pink
            .setTitle('Cat')                        
            .setDescription('')
            .setFooter('')
            .setTimestamp();
        return interaction.reply("");
    },
};