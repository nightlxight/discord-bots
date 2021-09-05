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
        let jokes = [
            "How do you stop an astronaut's baby from crying?\nYourocket!",
            "How do you talk to a giant?\nUse big words!" //,
            // add more jokes here
        ];
        let joke = jokes[Math.floor(Math.random() * jokes.length)];
    },
};