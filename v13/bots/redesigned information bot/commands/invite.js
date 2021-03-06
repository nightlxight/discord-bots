var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { random_color, red, green, aqua, cyan, lightcyan, yellow, orange, pink, purple } = require('../colors.json');
const yaml = require('js-yaml');
const settings = yaml.load(fs.readFileSync('./settings.yml', 'utf8'));

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription(`${settings.inviteDescription}`),
    async execute(interaction) {
        let embed = new MessageEmbed()
            .setColor(random_color) // random_color, red, green, aqua, cyan, lightcyan, yellow, orange, pink, purple
            .setTitle('Bot Invite Link')
            .setDescription('Invite link can be found below')
            .addField('Invite Link:', 'your bots invite link here', true) /* TO GET YOUR INVITE LINK, PLEASE GO TO https://discordapi.com/permissions.html */
            .setFooter(`**${interaction.user.tag}** | invite link`)
            .setTimestamp();
        return interaction.reply({embeds: [embed] });
    },
};