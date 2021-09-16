/*

DONT FORGET TO DEPLOY YOUR COMMANDS. FOR EXAMPLE node deploy-commands.js

Any help would be appreciated, thanks.

*/

var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('catjam')
        .setDescription('Sends catJAM!'),
    async execute(interaction) {
        let gif = "https://media.tenor.com/images/7645a8d8641078195b89b1b7f096c7b2/tenor.gif";
        let embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('')
            .setTimestamp();
        return interaction.reply(gif);
    },
};