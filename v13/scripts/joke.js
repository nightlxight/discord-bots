/*

coming soon
any help would be appreciated
                                                   s
*/

var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('joke')
        .setDescription('Sends joke!'),
    async execute(interaction) {
        let jokes = [
            "How do you stop an astronaut's baby from crying?\nYourocket!",
            "How do you talk to a giant?\nUse big words!" //,
            // add more jokes here
        ];
        let joke = jokes[Math.floor(Math.random() * jokes.length)];
        let embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Joke command')
            .setDescription(joke)
            .setFooter(`Command executed by ${interaction.user.tag}`)
            .setTimestamp();
        return interaction.reply({embeds: [embed] });
    },
};