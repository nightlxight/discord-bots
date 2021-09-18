var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Sends an invite link to your bot'),
    async execute(interaction) {
        let embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Bot Invite Link')
            .setDescription('Invite link can be found below')
            .addField('Invite Link:', 'your bots invite link here', true) /* TO GET YOUR INVITE LINK, PLEASE GO TO https://discordapi.com/permissions.html */
            .setFooter(`**${interaction.user.tag}** | invite link`)
            .setTimestamp();
        return interaction.reply({embeds: [embed] });
    },
};