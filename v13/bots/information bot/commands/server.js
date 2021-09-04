var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("server")
        .setDescription('Sends information about this guild!'),
    async execute(interaction) {
        let gowner = await interaction.guild.fetchOwner();
        let serverEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Server Information')
            .setDescription('Server information can be found below.')
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
        return interaction.reply(serverEmbed);
    },
};