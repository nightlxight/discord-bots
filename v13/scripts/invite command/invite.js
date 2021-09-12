var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
let client_id = "your bots application id here";
const { MessageEmbed } = require('discord.js');
let { red, green, purple, random_color, aqua, lightcyan, cyan, yellow, orange, pink } = require('./colors.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Sends invite link to your bot!'),
        async execute(interaction) {
            let embed = new MessageEmbed()
                .setColor(random_color) //red, green, purple, random_color, aqua, lightcyan, cyan, yellow, orange, pink
                .setTitle('Invite Link')
                .setDescription(`https://discord.com/api/oauth2/authorize?client_id=${client_id}&permissions=0&scope=bot%20applications.commands`)
                .setFooter(`Command executed by ${interaction.user.tag}`)
                .setTimestamp();
            return interaction.reply({ embeds: [embed] });
        },
};