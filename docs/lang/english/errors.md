# Errors

## DiscordAPIError: Missing Access

Enable the `applications.commands` scope for your bot.
Can't fix? No problem! Feel free to report your problem [here](https://github.com/nightlxight/discord-bots/issues/new/choose)

## unexpected token '?'

Discord.js v13 requires node.js version 16.6 or newer to run! Click [here](https://nodejs.org/en/) to install!
<br>
If you run your bot through a process manager, make sure to restart the daemon process to use the new node version
<br>
If you run on heroku or similar services, check out their documentation on how to update the node version (likely via the engines key in package.json)
<br>
Unsure you are using the right one? Log console.log(process.version) in your code

## DiscordAPIError: Cannot send an empty message

Please send your code in [here](https://github.com/nightlxight/discord-bots/issues/new/choose) so we can help you fix the problem

## ReferenceError: "x" is not defined

Please send your code in [here](https://github.com/nightlxight/discord-bots/issues/new/choose) so we can help you fix the problem.
<br>
Check this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined) for more information.


## An invalid token was provided.

<br>

This is a prevalent error; it originates from a wrong token being passed into `client.login()`. The most common causes of this error are:

<br>

* Not importing the config or env file correctly
* Copying the client secret instead of the bot token (the token is alphanumerical and three parts delimited by a period while the client secret is significantly smaller and one part only)
* Simply showing the token and copying that, instead of clicking regenerate and copying that.

## Cannot send messages to this user.

This error throws when the bot attempts to send a DM message to a user but cannot do so. A variety of reasons causes this:
<br>
* The bot and the user do not share a guild (often, people attempt to dm the user after kicking or banning them).
* The bot tries to DM another bot.
* The user has blocked the bot.
* The user has disabled dms in the privacy settings.

<br>

In the case of the last two reasons, the error is not preventable, as the Discord API does not provide a way to check if you can send a user a dm until you attempt to send one. The best way to handle this error is to add a `.catch()` where you try to dm the user and either ignore the rejected Promise or do what you want because of it.