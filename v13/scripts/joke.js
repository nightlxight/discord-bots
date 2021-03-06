var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const embedColor = "RANDOM";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('joke')
        .setDescription('Sends joke!'),
    async execute(interaction) {
        let jokes = [
            "How do you stop an astronaut's baby from crying?\nYou rocket!",
            "How do you talk to a giant?\nUse big words!",
            "What is fast, loud and crunchy?\nA rocket chip!",
            "Why did the teddy bear say no to dessert?\nBecause she was stuffed.",
            "What has ears but cannot hear?\nA cornfield.",
            "What did the left eye say to the right eye?\nBetween us, something smells!",
            "Why did the police play baseball??\nHe wanted to get a catch!",
            "What did the microwave say to the other microwave?\nIs it just me? Or is it really hot in here?",
            "Why did the student eat his homework?\nBecause the teacher told him it was a piece of cake!",
            "When you look for something, why is it always in the last place you look?\nBecause when you find it, you stop looking.",
            "What is brown, hairy and wears sunglasses?\nA coconut on vacation." //,
            // add more jokes here
            // the last joke should not contain a comma
        ];

        let joke = jokes[Math.floor(Math.random() * jokes.length)];

        let titles = [
            "Joke command",
            "Joke!" //,
            // add more titles here
        ];
        let title = titles[Math.floor(Math.random() * titles.length)];

        let footers = [
            `Command executed by ${interaction.user.tag}`,
            `/joke | ${interaction.user.tag}` //,
            // add more footers here
        ];

        let footer = footers[Math.floor(Math.random() * footers.length)];

        let embed = new MessageEmbed()
            .setColor(embedColor)
            .setTitle(title)
            .setDescription(joke)
            .setFooter(footer)
            .setTimestamp();

        try {
            return interaction.reply({embeds: [embed ]});
        } catch (error) {
            // * interaction.reply("There was an error!");
            console.warn("There was an error!");
            console.error(error);
        };
    },
};
