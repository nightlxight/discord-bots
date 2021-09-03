var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { red, green, aqua, lightcyan, yellow, orange, purple, pink, cyan, random_color } = require('./colors.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Display info about this server.'),
	async execute(interaction) {
        let gowner = interaction.guild.fetchOwner();
        let embed = new MessageEmbed()
            .setColor(random_color) // red, green, aqua, lightcyan, yellow, orange, purple, pink, cyan, random_color
            .setTitle('Server information can be found below')
            .addFields(
                { name: 'Server Name 📝', value: `${interaction.guild.name}`, inline: true},
                { name: 'Total Members 😋', value: `${interaction.guild.memberCount}`, inline: true},
                { name: 'Created at 📅', value: `${interaction.guild.createdAt}`, inline: false},
                { name: 'Server ID 📑', value: `${interaction.guild.id}`, inline: true},
                { name: 'Server Owner 😎', value: gowner, inline: true},
                { name: 'Verification Level 👮‍♂️', value: `${interaction.guild.verificationLevel}`, inline: true},
                { name: 'AFK Channel 🔇', value: `${interaction.guild.afkChannel}`, inline: true},
            )
            .setTimestamp()
            .setFooter(`Command executed by **${interaction.user.tag}**`);
		return interaction.reply(embed);
	},
};