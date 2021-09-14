var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('8ball command!'),
    async execute(interaction) {
        
    },
};