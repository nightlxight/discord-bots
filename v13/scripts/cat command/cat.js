/*


coming soon


*/

var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const gifs = require('./assets/gif/gifs.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cat')
        .setDescription('Sends cat photo or gif!'),
    async execute(interaction) {
        
    },
};