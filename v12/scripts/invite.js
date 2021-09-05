/*

coming soon

*/

var fs = require('fs');
const client_id = "Your bots application id here";

module.exports = {
    name: "invite",
    description: "Sends an invite link to bot!",
    execute(client, message, args) {
        message.channel.send(`https://discord.com/api/oauth2/authorize?client_id=${client_id}&permissions=8&scope=bot%20applications.commands`);
    },
};