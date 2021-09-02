const fs = require('fs');
const Discord = require('discord.js');

module.exports = {
    name: "gif",
    description: "Sends gif!",
    execute(client, message, args) {
        let gifs = [
            "https://tenor.com/view/the-simpsons-homer-simpson-good-bye-bye-no-gif-5173989",
            "https://tenor.com/view/yes-will-ferrell-awesome-gif-14597941",
            "https://tenor.com/view/speed-wheelchair-me-running-late-gif-14178485"
            // add gifs here
        ];
        let gif = gifs[Math.floor(Math.random() * gifs.length)];
        message.channel.send(gif);
    },
};