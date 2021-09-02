const fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gif')
        .setDescription('Sends gif!'),
        async execute(interaction) {
            let gifs = [
                "https://tenor.com/view/the-simpsons-homer-simpson-good-bye-bye-no-gif-5173989",
                "https://tenor.com/view/yes-will-ferrell-awesome-gif-14597941",
                "https://tenor.com/view/speed-wheelchair-me-running-late-gif-14178485"
                // add gifs here
            ];
            let gif = gifs[Math.floor(Math.random() * gifs.length)];
            return interaction.reply(gif);
        },
};