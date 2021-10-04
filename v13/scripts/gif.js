var fs = require('fs');
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
                "https://tenor.com/view/thumbs-up-emoji-gif-10409490",
                "https://tenor.com/view/sad-sorry-im-sorry-stitch-apologetic-gif-12304217",
                "https://tenor.com/view/catfish-goodnight-sheets-cute-gif-13834105",
                "https://tenor.com/view/sunday-lazy-cat-lays-pepsi-gif-10698603",
                "https://tenor.com/view/the-office-ouch-michael-scott-steve-carell-lip-bite-gif-11838665",
                "https://tenor.com/view/ouch-hurt-feelings-gif-9860104",
                "https://tenor.com/view/baby-angry-eating-mad-grumpy-gif-14328548",
                "https://tenor.com/view/speed-wheelchair-me-running-late-gif-14178485",
                "https://tenor.com/view/aww-sweet-little-rascals-gif-9302708",
                "https://tenor.com/view/the-simpsons-homer-simpson-good-bye-bye-hide-gif-4983317",
                "https://tenor.com/view/pikachu-sad-crying-upset-cry-gif-15550145",
                "https://tenor.com/view/dog-smile-awkward-gif-11954393",
                "https://tenor.com/view/cat-animated-kitty-wow-big-eyes-gif-17482894",
                "https://tenor.com/view/cat-surprised-shocked-gif-22920813",
                "https://tenor.com/view/no-nooo-nope-eat-fingerwag-gif-4880183",
                "https://tenor.com/view/panda-cute-approve-thumbs-up-teddy-bear-gif-17746493",
                "https://tenor.com/view/biden-sniff-joe-gif-18024992",
                "https://tenor.com/view/cheese-pizza-day-happy-cheese-pizza-day-pizza-day-gif-18339509",
                "https://tenor.com/view/awkward-stare-dog-stare-dog-brows-funny-gif-12521793",
                "https://tenor.com/view/saskin-kedi-gif-12362652",
                "https://media.tenor.com/images/7645a8d8641078195b89b1b7f096c7b2/tenor.gif",
                "https://tenor.com/view/thumbs-thumbs-up-yeah-yes-ok-gif-7225108",
                "https://tenor.com/view/sleep-tired-pass-out-ko-sleeping-gif-5660983",
                "https://tenor.com/view/depressed-bored-boredom-swing-head-gif-17224602",
                "https://tenor.com/view/im-lazy-cute-adorable-bored-gif-15454193",
                "https://tenor.com/view/go-away-monday-still-sleepy-gif-14865743" //,
                // add gifs here
                // the last gif should not contain a comma
            ];
            let gif = gifs[Math.floor(Math.random() * gifs.length)];
            return interaction.reply({ content: `${gif}` });
        },
};
