# Hatalar

## DiscordAPIError: Missing Access

`applications.commands` yetkisini botunuza verin
Olmadı mı? Sorun değil! Sorununuzu [bildirin](https://github.com/nightlxight/discord-bots/issues/new/choose) ve sorununuzu çözmenizde yardımcı olalım

## unexpected token '?'

Discord.js v13 sürümü, node.js 16.6 yada yeni sürüm gerektirir! Son sürümü yüklemek için [buraya](https://nodejs.org/en/) tıkla!
<br>
Botunuzu görev yöneticisinden çalıştırıyor iseniz, daemon işlemini yeniden başlatmayı unutmayın.
<br>
Botunuzu heroku yada benzeri yerlerden çalıştırıyor iseniz, o web sitelerinin dökümanlarını kontrol ediniz node js versiyonunu nasıl güncellenebildiğini öğrenebilmek amacıyla (likely via the engines key in package.json)
<br>
Birini kullandığınızdan emin olamadınız mı? `console.log(process.version)` komudunu çalıştırın.

## DiscordAPIError: Cannot send an empty message

Lütfen kodunuzu [buraya](https://github.com/nightlxight/discord-bots/issues/new/choose) gönderin ve probleminizi çözmemizde yardımcı olalım

## ReferenceError: "x" is not defined

Lütfen kodunuzu [buraya](https://github.com/nightlxight/discord-bots/issues/new/choose) gönderin ve probleminizi çözmemizde yardımcı olalım
<br>
Daha fazla bilgi için bu [linki](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined) kontrol edin


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