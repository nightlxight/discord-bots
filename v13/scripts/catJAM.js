var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('catjam')
        .setDescription('catJAM!'),
    async execute(interaction) {
        let gif = "https://media.tenor.com/images/7645a8d8641078195b89b1b7f096c7b2/tenor.gif";
        let embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('catJAM')
            .setImage(gif)
            // .setFooter(`...`)
            .setTimestamp();
        function sendMessage() {
            return interaction.reply({embeds: [embed] });
        };
        
        try {
        sendMessage();
        } catch (error) {
        console.error(error);
            interaction.reply("There was an error!");
            console.warn("There was an error!");
            console.error(error);
        };
    },
};
