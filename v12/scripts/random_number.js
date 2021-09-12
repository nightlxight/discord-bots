const Discord = require('discord.js');

module.exports = {
    name: "number",
    execute(client, message, args) {
        let number = Math.floor(Math.random() * 1000)
    }
}