const { SlashCommandBuilder } = require('@discordjs/builders');
const { channel } = require('diagnostics_channel');
const { execute } = require('./ban');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('panda')
    .setDescription('Sends panda gif!'),
    async execute(interaction) {
        let gifs = [
            "https://tenor.com/view/happy-panda-bamboo-panda-hungry-panda-eating-gif-17804693",
            "https://tenor.com/view/panda-dancing-moves-funny-shaking-gif-17764808",
            "https://tenor.com/view/panda-slide-cute-playing-gif-16649621",
            "https://tenor.com/view/panda-gif-5303855",
            "https://media.giphy.com/media/K9z3im98oo9Ve/giphy.gif?cid=ecf05e47lk20edsdf2dhxko7ddz3wr8nbovsf6bycaupggk6&rid=giphy.gif&ct=g",
            "https://tenor.com/view/sunday-gif-21211301"
            // "your gif link here",
            // "the last gif should not contain a comma"
        ];

        let gif = gifs[Math.floor(Math.random() * gifs.length)];
        channel.send({ embeds: []})
    }
};