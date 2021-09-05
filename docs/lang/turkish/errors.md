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

Bu yaygın bir hatadır; `client.login()` da bulunabilen yanlış tokenden kaynaklanabilir. The most common causes of this error are:

<br>

* Config veya .env dosyası tam içe aktarılmamış olabilir
* Bot belirteci yerine istemci sırrını kopyalama (belirteç alfasayısaldır ve istemci sırrı önemli ölçüde daha küçük ve yalnızca bir parça iken bir nokta ile sınırlandırılmış üç parça)
* Tokeni yeniden oluştur ve kopyalamak yerine, token göster ve kopyala.

## Cannot send messages to this user.

Bu hata, bot bir kullanıcıya DM mesajı göndermeye çalıştığında ancak bunu yapamadığında ortaya çıkar. Buna çeşitli nedenler neden olur:
<br>
* Bot ve kullanıcı bir sunucuyu paylaşmazlar (genellikle insanlar kullanıcıyı attıktan veya yasakladıktan sonra DM göndermeye çalışırlar).
* Bot başka bir botu DM göndermeye çalışır.
* Kullanıcı botu engellemiş olabilir.
* Kullanıcı gizlilik ayarlarından DM'lerini kapatmış olabilir.

<br>

Son iki neden söz konusu olduğunda, Discord API, bir kullanıcıya bir dm göndermeyi deneyene kadar bir kullanıcıya dm gönderip gönderemeyeceğinizi kontrol etmek için bir yol sağlamadığından hata önlenebilir değildir. Bu hatayı halletmenin en iyi yolu, kullanıcıya dm göndermeye çalıştığınız ve reddedilen Sözü yok saydığınız veya bu nedenle istediğinizi yaptığınız bir `.catch()` eklemektir.