var fs = require('fs');
const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Sends information about yourself'),
    async execute(interaction) {
        let embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Your information can be found below')
            .addFields(
                { name: "Your username", value: `${interaction.user.tag}` + " " + "😎", inline: true },
                { name: "Your ID", value: `${interaction.user.id}` + " " +"🎉", inline: false }, 
                { name: "Created at", value: `${interaction.user.createdAt}` + " " + "📑", inline: false },
            )
            .setFooter(`${interaction.user.tag}` + " " + "|" + " " + "1 / 1 list of commands")
            .setTimestamp();
        return interaction.reply({ embeds: [embed] });
    },
};