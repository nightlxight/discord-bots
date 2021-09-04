var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { random_color, red, green, aqua, lightcyan, orange, yellow, purple, pink, cyan } = require('../colors.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Sends an invite link to your bot'),
    async execute(interaction) {
        let embed = new MessageEmbed()
            .setColor(random_color) // random_color, red, green, aqua, lightcyan, orange, yellow, purple, pink, cyan
            .setTitle('Bot Invite Link')
            .setDescription('Invite link can be founded below')
            .addField('Invite link:', 'your bots invite link here', true) /* TO GET YOUR INVITE LINK, PLEASE GO TO https://discordapi.com/permissions.html */
            .setTimestamp()
            .setFooter('Command executed by' + ` **${interaction.user.tag}**`);
        return interaction.reply(embed);
    },
};