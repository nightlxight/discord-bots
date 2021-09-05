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
                "https://tenor.com/view/speed-wheelchair-me-running-late-gif-14178485",
                "https://tenor.com/view/cute-cat-oh-yeah-awesome-cats-amazing-gif-15805236",
                "https://tenor.com/view/cat-cute-cat-kitten-kitty-shy-gif-17733420",
                "https://tenor.com/view/mew-cat-cute-kitten-pussy-cat-gif-16724426",
                "https://tenor.com/view/hot-dog-trooper-dogs-cosplay-gif-10491496",
                "https://tenor.com/view/trump-clapping-clap-applause-donald-trump-gif-10951683",
                "https://tenor.com/view/tired-emoji-clapping-applause-bravo-gif-5397616",
                "https://tenor.com/view/no-jerry-nope-nah-no-way-gif-16816520",
                "https://tenor.com/view/have-an-awesome-day-thumbs-up-okay-ok-approve-gif-10745166",
                "https://tenor.com/view/good-luck-lucky-luck-clover-four-leaf-clover-gif-15192661",
                "https://tenor.com/view/elmo-shrug-maybe-gif-13811970",
                "https://tenor.com/view/lol-smiley-laugh-gif-15725446",
                "https://tenor.com/view/smile-happy-patrick-star-bite-lip-cartoon-gif-17131210",
                "https://tenor.com/view/lazy-cat-stairs-gif-13378074",
                "https://tenor.com/view/spongebob-dance-bubble-hippo-lol-gif-22301289",
                "https://tenor.com/view/yes-will-ferrell-awesome-gif-14597941",
                "https://tenor.com/view/shy-squeal-panda-pandashy-shyness-gif-13443166",
                "https://tenor.com/view/sunday-lazy-panda-lazy-sunday-cute-gif-17147851",
                "https://tenor.com/view/sad-crying-tears-baby-gif-8822845",
                "https://tenor.com/view/thumbs-up-emoji-gif-10409490"
                // add gifs here
            ];
            let gif = gifs[Math.floor(Math.random() * gifs.length)];
            return interaction.reply(gif);
        },
};
