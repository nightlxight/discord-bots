/*
coming soon
any help would be appreciated
*/

var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('joke')
        .setDescription('Sends joke!'),
    async execute(interaction) {
        let jokes = [];
        let joke = jokes[Math.floor(Math.random() * jokes.length)];
    },
};