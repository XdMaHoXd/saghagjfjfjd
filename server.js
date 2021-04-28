const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "ODM0NzI0MTUwODQ5NDM3NzE3.YIFDcQ.ob1duUje-j7P30RfPDajQNDPEyA", 
prefix: "c!",
})
  
bot.onMessage()
 
bot.command({
        name: "ping",
        code: `Ping = $pingms`
})

bot.loadCommands(`./komutlar/`)

bot.command({
  name:"i",
  code:`
  $author[İstatistiklerime Hoşgeldin $username;$authorAvatar]
  $description[$thumbnail[$userAvatar[831563322818166785]]
   $customemoji[nitro_gif]Sahibim = $username[765150340202889226]#$discriminator[765150340202889226]


  $customemoji[setting_gif] Oluşturulma Tarihim = $creationDate[831563322818166785]

  $customemoji[setting_gif]Pingim = $ping
  $customemoji[setting_gif]Açılma Sürem = $uptime
  $customemoji[setting_gif]Komut Sayım = $commandsCount

  $customemoji[setting_gif] Toplam Kullanıcım = $allMembersCount
  $customemoji[setting_gif] Toplam Sunucu = $serverCount
  
  ]
  `
  })

bot.command({
    name:"sunucu-panel",
    code:`
$setServerVar[aktifuye;$getObjectProperty[aktifuye]]
$setServerVar[botc;$getObjectProperty[bot]]
$setServerVar[insanc;$getObjectProperty[insan]]
$setServerVar[toplamuye;$getObjectProperty[toplam]]
$modifyChannelPerms[$getObjectProperty[toplam];-connect;$guildID]
$addObjectProperty[toplam;$createChannel[Toplam Üye Sayısı: $membersCount[$guildID];voice;yes;$getObjectProperty[kategori]]]
$modifyChannelPerms[$getObjectProperty[bot];-connect;$guildID]
$addObjectProperty[bot;$createChannel[Bot Sayısı: $botCount;voice;yes;$getObjectProperty[kategori]]]
$modifyChannelPerms[$getObjectProperty[insan];-connect;$guildID]
$addObjectProperty[insan;$createChannel[İnsan Sayısı: $sub[$membersCount[$guildID];$botCount];voice;yes;$getObjectProperty[kategori]]]
$modifyChannelPerms[$getObjectProperty[aktifuye];-connect;$guildID]
$addObjectProperty[aktifuye;$createChannel[Aktif Üye: $membersCount[$guildID;online];voice;yes;$getObjectProperty[kategori]]]
$addObjectProperty[kategori;$createChannel[📊Sunucu İstatistikleri📊;category;yes]]
$createObject[{}]
$setServerVar[sunucupanel;1]
$onlyIf[$getservervar[sunucupanel]!=1;❌ Sunucu panel sistemi zaten ayarlanmış.Lütfen panel kanallarını sil ve tekrar dene.]
$onlyPerms[manageserver;❌ Bu komudu kullanabilmek için **Sunucuyu Yönet** yetkisine sahip olmalısın.]
$onlyBotPerms[manageserver;❌ Bu komudu uygulayabilmek için **Sunucuyu Yönet** yetkisine sahip olmam gerek.Panel kuruldultan sonra yetkim alınırsa, sistem çalışmayacaktır!]
`
})
bot.joinCommand({
    channel:"$channelID",
    code:`
$editChannel[$getServerVar[botc];$default;Bot Sayısı: $botCount;$default;no;$default;$default;no]
$editChannel[$getServerVar[aktifuye];$default;Aktif Üye: $membersCount[$guildID;online];$default;no;$default;$default;no]
$editChannel[$getServerVar[insan];$default;İnsan Sayısı: $sub[$membersCount[$guildID];$botCount];$default;no;$default;$default;no]
$editChannel[$getServerVar[toplamuye];$default;Toplam Üye: $membersCount[$guildID];$default;no;$default;$default;no]
$onlyBotPerms[managechannels;]
$onlyIf[$getservervar[sunucupanel]==1;]`
})
bot.onJoined()

bot.leaveCommand({
    channel:"$channelID",
    code:`
$editChannel[$getServerVar[botc];$default;Bot Sayısı: $botCount;$default;no;$default;$default;no]
$editChannel[$getServerVar[aktifuye];$default;Aktif Üye: $membersCount[$guildID;online];$default;no;$default;$default;no]
$editChannel[$getServerVar[insan];$default;İnsan Sayısı: $sub[$membersCount[$guildID];$botCount];$default;no;$default;$default;no]
$editChannel[$getServerVar[toplamuye];$default;Toplam Üye: $membersCount[$guildID];$default;no;$default;$default;no]
$onlyBotPerms[managechannels;]
$onlyIf[$getservervar[sunucupanel]==1;]`
})
bot.onLeave()
bot.presenceUpdateCommand({
    channel:"$channelID",
    code:`
$editChannel[$getServerVar[botc];$default;Bot Sayısı: $botCount;$default;no;$default;$default;no]
$editChannel[$getServerVar[aktifuye];$default;Aktif Üye: $membersCount[$guildID;online];$default;no;$default;$default;no]
$editChannel[$getServerVar[insanc];$default;İnsan Sayısı: $sub[$membersCount[$guildID];$botCount];$default;no;$default;$default;no]
$editChannel[$getServerVar[toplamuye];$default;Toplam Üye: $membersCount[$guildID];$default;no;$default;$default;no]
$onlyBotPerms[managechannels;]
$onlyIf[$getservervar[sunucupanel]==1;]
`
})
bot.onPresenceUpdate()

bot.channelDeleteCommand({
    channel:"$channelID",
    code:`
$onlyIf[$oldChannel[id]!=$getServerVar[insanc];{execute:insanc}]
$onlyIf[$getservervar[sunucupanel]==1;]
`
})
bot.onChannelDelete()

bot.channelDeleteCommand({
    channel:"$channelID",
    code:`
$onlyIf[$oldChannel[id]!=$getServerVar[aktifuye];{execute:aktifuye}]
$onlyIf[$getservervar[sunucupanel]==1;]
`
})
bot.onChannelDelete()

bot.channelDeleteCommand({
    channel:"$channelID",
    code:`
$onlyIf[$oldChannel[id]!=$getServerVar[botc];{execute:botc}]
$onlyIf[$getservervar[sunucupanel]==1;]
`
})
bot.onChannelDelete()

bot.channelDeleteCommand({
    channel:"$channelID",
    code:`
$onlyIf[$oldChannel[id]!=$getServerVar[toplamuye];{execute:toplamuye}]
$onlyIf[$getservervar[sunucupanel]==1;]
`
})
bot.onChannelDelete()
bot.awaitedCommand({
    name:"botc",
    code:`
$onlyIf[$getServerVar[botc]$getServerVar[insanc]$getServerVar[toplamuye]$getServerVar[aktifuye]!=;{execute:sunucupanel}]
$setServerVar[botc;]`
})

bot.awaitedCommand({
    name:"aktifuye",
    code:`
$onlyIf[$getServerVar[botc]$getServerVar[insanc]$getServerVar[toplamuye]$getServerVar[aktifuye]!=;{execute:sunucupanel}]
$setserverVar[aktifuye;]`
})

bot.awaitedCommand({
    name:"toplamuye",
    code:`
$onlyIf[$getServerVar[botc]$getServerVar[insanc]$getServerVar[toplamuye]$getServerVar[aktifuye]!=;{execute:sunucupanel}]
$setserverVar[toplamuye;]`
})

bot.awaitedCommand({
    name:"insanc",
    code:`
$onlyIf[$getServerVar[botc]$getServerVar[insanc]$getServerVar[toplamuye]$getServerVar[aktifuye]!=;{execute:sunucupanel}]
$resetServerVar[insanc]`
})

bot.awaitedCommand({
    name:"sunucupanel",
    code:`
$resetServerVar[sunucupanel]
`
})

bot.variables({
    sunucupanel:"",
    toplamuye:""  ,
    aktifuye:"" ,
    botc:"" ,
    insanc:"",
    kategori:"" ,
  kkanal:"" ,
 xpdeğer:"1",
        xp:"0",
        level:"0",
        sonrakixp:"500",
        levelsistemi:"kapalı",
        levellog:"",
 otocevap:"",
 otocevapw:"0",
saas:"açık",
bbkanal:"",
  hgkanal:"",
  hgkanal:"",
  bbkanal:"",
  hgmesaj:"Sunucuya Hoşgeldin <@$authorID>",
  bbmesaj:"Sunucumuzdan Ayrıldın Hoşçakal $username#$discriminator",
  cekilis:"undefined",
  prefix:"",
  para:"0",
hesap:"yok",
  meslek:"işsiz",
  banka:"0",
statusmsg:"",
statusch:"",
  gkanal:"0",
  çkanal:"0",
gmesaj:"",
  bonus:"0",
  prefix:"m!",
  fetchInvites:"true",
  link:"kapalı",
  kod:"yok",
  gold:"yok",
  kyetkili:"",
  erkekrol:"",
  kadınrol:"",
  kayıtsız:"",
  hgkanal:"",
  snipe:"",
snipek:"",
snipekk:""
})

bot.command({
   name:"otocevap",
  code:`
$if[$message[1]==aç]
$channelsendMessage[$channelid;Başarıyla \`\`$splitText[1]\`\` otocevap komudu olarak ayarlandı!Artık herhangi bir kullanıcı \`\`$splittext[1]\`\` yazınca \`\`$splittext[2]\`\` olarak karşılık vereceğim!;no]
$textSplit[$messageSlice[1];|]
$setservervar[otocevap;$getobjectproperty[kurulum] |$splitText[1]|$splitText[2]|]
$addObjectProperty[kurulum;$getServerVar[otocevap]]
$createObject[{}]
$textSplit[$messageSlice[1];|]
$setservervar[otocevapw;0]
$onlyIf[$charCount[$messageSlice[1]]<201;❌ Otocevap komut/cevap karakter limiti en fazla 200 olabilir.]
$onlyIf[$checkContains[$toLowercase[$message;|]]==true;❌ Doğru kullanım -> \`\`otocevap aç/kapat komut|komut kullanıldığında verilecek cevap\`\`]
$onlyIf[$charCount[$getservervar[otocevap]]<750;❌ Otocevap sınırını doldurmuşsun.]
$elseIf[$message[1]==kapat]
$channelsendMessage[$channelid;\`\`$messageSlice[1]\`\` otocevabı başarıyla kaldırıldı!;no]
$setservervar[otocevapw;0]
$setServerVar[otocevap;$replaceText[$getservervar[otocevap];$getobjectproperty[alım];;-1]]
$addObjectProperty[alım;|$splitText[$sum[$findTextSplitIndex[$messageSlice[1]];0]]|$splitText[$sum[$findTextSplitIndex[$messageSlice[1]];1]]|]
$createObject[{}]
$onlyIf[$checkContains[$joinSplitText[];$messageSlice[1]]==true;❌ \`\`$messageslice[1]\`\` adlı bir otocevap komudu bulamadım.]
$textSplit[$getservervar[otocevap];|]
$setservervar[otocevapw;1]
$endelseIf
$endif
$setservervar[otocevapw;1]
$onlyIf[$checkContains[$message[1];aç;kapat]==true;❌ Kullanılabilir ayarlar \`\`aç\`\` ve \`\`kapat\`\`tır.]
$onlyPerms[manageserver;❌ Bu komudu kullanabilmek için **Sunuyu Yönet** yetkisine sahip olmalısın.]`
})

bot.command({
    name:"$alwaysExecute",
    code:`
$splitText[$sum[$findTextSplitIndex[$message];1]]
$onlyIf[$findTextSplitIndex[$message]!=0;]
$textSplit[$getservervar[otocevap];|]
$onlyIf[$getservervar[otocevap]!=;]
$onlyIf[$getservervar[otocevapw]!=1;]
`,
    nonPrefixed: true
})

bot.command({
name:"otocevap-listesi",
alises:['otocevaplar','otocevaplistesi','otocevaplist','otocevap listesi'],
code:`$description[
Otocevap Listesi
-----------------------------
$joinSplitText[
]
-----------------------------]
$color[303136]
$footer[$serverName Otocevap Listesi;$serverIcon[$guildID]]
$thumbnail[$serverIcon[$guildID]]
$author[$username;$authorAvatar]
$textSplit[$getservervar[otocevap];|]`
})

bot.command({
  name:"sa",
  code:`
  Aleyküm Selam <@$authorID> Hoşgeldin !
    $onlyIf[$getServerVar[saas]!=kapalı;]
  `,
nonPrefixed: true
})

bot.command({
  name: "saas-aç",
  code: `
  Selamun Aleyküm Dendiğinde Cevap Vereceğim Yeees
  $resetServerVar[saas]
  $onlyPerms[admin;Yetkin Bulunmamaktadır]
  $onlyIf[$getServerVar[saas]!=açık;Bu Özellik Zaten Açıkmış]
  
  `
})

bot.command({
  name: "saas-kapat",
  code: `
  Selamun Aleyküm Dendiğinde Cevap Vermiyorum Artık.
  $setServerVar[saas;kapalı]
  $onlyPerms[admin;Yetkin Bulunmamaktadır]
  $onlyIf[$getServerVar[saas]!=kapalı;Bu Özellik Kapalı Zaten]
  
  `
})

bot.joinCommand({
        channel: "$getServerVar[hgkanal]", 
        code: `$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[hgmesaj];-üye-;<@$authorID>;-1];-üyetag-;$username#$discriminator;-1];-sismi-;$serverName[$guildID];-1];-üyesayısı-;$membersCount;-1];-botsayısı-;$botCount;-1];-sbölgesi-;$serverRegion;-1]`
})
bot.onJoined()

bot.leaveCommand({
        channel: "$getServerVar[bbkanal]", 
        code: `$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[bbmesaj];-üye-;<@$authorID>;-1];-üyetag-;$username#$discriminator;-1];-sismi-;$serverName[$guildID];-1];-üyesayısı-;$membersCount;-1];-botsayısı-;$botCount;-1];-sbölgesi-;$serverRegion;-1]`
})
bot.onLeave()

bot.command({
  name:"$alwaysExecute",
  code:`$setUserVar[xp;$sum[$getUserVar[xp;$authorID];$getUserVar[xpdeğer;$authorID]];$authorID]
  $onlyIf[$getServerVar[levelsistemi]!=kapalı;]`
})
bot.command({
  name:"$alwaysExecute",
  code:`
  🎉 Level Atlandı !
  🎉 Şuanki Levelin $sum[$getUserVar[level;$authorID];1]
  🎉 Tebrikler <@$authorID>
  
  $setUserVar[level;$sum[$getUserVar[level;$authorID];1];$authorID]
  $setUserVar[sonrakixp;$multi[$getUserVar[sonrakixp;$authorID];2];$authorID]
  $setUserVar[xpdeğer;$sum[$getUserVar[xpdeğer;$authorID];1];$authorID]
  
  
  $channelSendMessage[$getServerVar[levellog];{author:BİRİSİ LEVEL ATLADI:$authorAvatar} {description:Level Atlayan Kişi = <@$authorID>
  Şuanki Leveli = $sum[$getUserVar[level;$authorID];1]
  Şuanki XP Değeri = $sum[$getUserVar[xpdeğer;$authorID];1]
  Sonraki Levelin XP Değeri = $multi[$getUserVar[sonrakixp;$authorID];2]
  
  Şuanki XP'si = $getUserVar[xp;$authorID]}]
  
  $onlyIf[$getServerVar[levelsistemi]!=kapalı;]
  $onlyIf[$getUserVar[xp;$authorID]>$getUserVar[sonrakixp;$authorID];]
  `
})

bot.command({
        name: "çal",//Müzik Çalma Komududur.
        code: `$color[00ff51]
$author[Müzik Çalınıyor;https://e7.pngegg.com/pngimages/784/381/png-clipart-white-and-red-musical-note-logo-text-symbol-brand-music-text-trademark.png]
$description[Şuanda Oynatılan Müzik **$songInfo[title]**
Müzik Uzunluğu **$songInfo[duration]** Saniyedir.

Müzik Linki $songInfo[url]
Sıradaki Müzik Sayısı: $queueLength]
$footer[Müziği Çalan Kişi $username;$authorAvatar]
$playSong[$message;Böyle bir müzik bulamadım tekrar denermisin]
$onlyIf[$voiceID!=;Ses Kanalına Girmelisin]
$onlyIf[$message!=;Bir Müzik İsmi Girmelisin]`
})

bot.command({
 name: "çekiliş",
 code: `
$editMessage[$getServerVar[cekilis];{title:Çekiliş Bitti 🎉}{description:Ödül:\`$messageSlice[1]\` 🎉
Yapan Kişi: **$userTag[$authorID]**
Kazanan: $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;hiçbiri, yeterli katılımcı yoktu.];false;<@$randomText[$joinSplitText[;]]>.]}{color:RANDOM}{footer: Çekiliş Sona Erdi.:$authorAvatar}]
$channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;Yeterli katılımcı yoktu.];false;Ödülün sahibi: \`$sliceMessage[1]\` is: <@$randomText[$joinSplitText[;]]>, Tebrikler!]]
$textSplit[$replaceText[$getReactions[$channelID;$getServerVar[cekilis];🎉;id];$clientID,;];,]
$wait[$message[1]]
$setServerVar[cekilis;$sendMessage[{title: Çekilişe Katılmak için  🎉 Emojisine Tıkla !.}{description: 🎉 Ödül: \`$messageSlice[1]\` 🎉
Yapan Kişi: **$userTag[$authorID]**
Süre: **$message[1]**}{timestamp}{color:RED}{reactions:🎉};yes]]
$onlyIf[$sliceMessage[1]!=;{title:Argümanlar Aranıyor}{description:Çekiliş için herhangi bir ödül koymadınız Bu Formatı Takip Edin: 
\`\`\`
- $getServerVar[prefix]çekiliş <süre> <ödül>.\`\`\`
\`<> Yazmayın \`
}{color:ORANGE}]
$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];s;];m;];h;];d;]]!=false;{title: Yanlış Kullanım}{description:Yeni girdiğiniz saat biçimi geçersiz. Bu örneği izleyin:
\`\`\`
1s 1 saniye 
1m  dakika
1h 1 saat
1d 1 saat
\`\`\`}{color:RED}]

$onlyPerms[admin;{title:Yetkin Yok}{description:Senin \`YÖNETİCİ\` Yetkin Yok.}{color:RED}]
`
})

bot.command({
name: "yardım",
code: `$reactionCollector[$splitText[1];everyone;1m;🔄,💰,🔨,👤,⚔️;byardım,ekonomiy,boty,kullanıcıy,mody;yes]
$textSplit[$sendMessage[{title:Yardım Menüme Hoşgeldin}{footer:$username#$discriminator İstedi:$authorAvatar}{description:
💰 - Ekonomi ; Ekonomi İle Alakalı Komutları Atar

🔨 - Bot ; Bot Komutlarını Atar

👤 - Kullanıcı ; Herkesin Kullanabileceği Komutları Atar

⚔️ - Moderasyon ; Sunucu Ayarları İçin Komutları Atar
} {color:000046};yes]; ]`})
bot.awaitedCommand({
 name: "byardım",
 code: `$editMessage[$message[1];{title:Yardım}{footer:$username#$discriminator İstedi:$authorAvatar}{description:
💰 - Ekonomi: Ekonomi İle Alakalı Komutları Atar

🔨 - Bot: Bot Komutlarını Atar

👤 - Kullanıcı: Herkesin Kullanabileceği Komutları Atar

⚔️ - Moderasyon: Sunucu Ayarları İçin Komutları Atar} {color:000046}
]
`})
bot.awaitedCommand({
 name: "ekonomiy",
 code: `
 $editMessage[$message[1];{author:Ekonomi Komutlarıma Hoşgeldin $username:$authorAvatar} {footer:🔄 - Menüye Dönmek İçin Tıklayın}{description:$customemoji[igne]cüzdan
                                                                                                                                                $customemoji[boost]hesapkur
                                                                                                                                                $customemoji[igne]kumar
                                                                                                                                                $customemoji[boost]maaş
                                                                                                                                                $customemoji[igne]meslek
                                                                                                                                                $customemoji[boost]para
                                                                                                                                                $customemoji[igne]peklesil
                                                                                                                                                $customemoji[boost]çalış}{color:00046}    
                                                                                                         
                                                                                                    
]
 `
})
bot.awaitedCommand({
 name: "boty",
 code: `
 $editMessage[$message[1];{footer:🔄 - Menüye Dönmek İçin Tıklayın}
{author:Bot Komutlarıma Hoşgeldin $username:$authorAvatar} {description:$customemoji[boost]ping
                                                                         $customemoji[igne]yazdır
                                                                         $customemoji[boost]GMVC-GAMERKİNG}{color:00046}
]
 `
})
bot.awaitedCommand({
 name: "kullanıcıy",
 code: `
 $editMessage[$message[1];{footer:🔄 - Menüye Dönmek İçin Tıklayın}
{author:Kullanıcı Komutlarıma Hoşgeldin $username:$authorAvatar} {description:$customemoji[boost]rank 
                                                                              $customemoji[igne]aşkölçer
                                                                              $customemoji[boost]boksmakinesi
                                                                              $customemoji[igne]hack
                                                                              $customemoji[boost]kar
                                                                              $customemoji[igne]başarım
                                                                              $customemoji[boost]tekmele
                                                                              $customemoji[igne]tokatla
                                                                              $customemoji[boost] 
                                                                              $customemoji[igne]roblox-oyuncu}{color:00046}
]
 `
})
bot.awaitedCommand({
 name: "mody",
 code: `
 $editMessage[$message[1];{footer:🔄 - Menüye Dönmek İçin Tıklayın}
{author:Moderasyon Komutlarıma Hoşgeldin $username:$authorAvatar} {description:$customemoji[igne]sunucupanel
                                                                               $customemoji[boost]sunucukur
                                                                               $customemoji[igne]sil
                                                                               $customemoji[boost]say
                                                                               $customemoji[igne]levelsistemi
                                                                               $customemoji[boost]levellog    
                                                                               $customemoji[igne]duyuru
                                                                               $customemoji[boost]bbkanal
                                                                               $customemoji[igne]ban
                                                                               $customemoji[boost]unban
                                                                               $customemoji[igne]slowmode
                                                                               $customemoji[bosst]giriş-mesajı
                                                                               $customemoji[igne]çıkış-mesajı
                                                                               $customemoji[boost]davet-sistemi
                                                                               $customemoji[igne]giriş-kanal
                                                                               $customemoji[boost]çıkış-kanal
                                                                               $customemoji[igne]link-engel
                                                                               $customemoji[boost]sunucu-bilgi
                                                                               $customemoji[igne]snipe}{color:00046}
 ]
`
})

bot.command({
  name: "duyuru",
  code:`
  $title[📢 Duyuru 📢]
  $description[$message]
  @everyone
  $footer[$username#$discriminator[$authorID] Tarafından Duyuruldu!;$userAvatar[$authorID]]
  $color[RANDOM]
  $deletecommand
  $onlyPerms[admin;Bu Komutu Sadece **Yöneticiler** Kullanabilir!]
  $onlyIf[$message[1]!=;Duyurulacak Birşeyler Yazmalısın!]
 `
})

bot.command({
  name:"<@!834724150849437717>",
  code:`
$customemoji[nitro_gif]Prefixim = c!
$customemoji[boost]Toplam Sunucum = $serverCount
$customemoji[boost]Toplam Kullanıcı = $allMembersCount
$customemoji[nitro_gif]Yapımcım:ᛠ-KRALBABA29#8395
  `,
  nonPrefixed: true
})

bot.command({
  name:"$alwaysExecute",
  code:`
  $color[RANDOM]
  $description[$thumbnail[$authorAvatar]
  İşte Botun Sahibi Chate Katıldı !
  Hoşgeldin Sahip ]
  $cooldown[5m;]
  $onlyIf[$authorID==765150340202889226;]
  `})


bot.command({
  name:"$alwaysExecute",
  code:`
  $color[$getServerVar[hex]]
  $description[$replaceText[$replaceText[$message;$getServerVar[prefix]roller;Sunucu Rolleri;-1];$getServerVar[prefix]emojiler;Sunucu Emojileri;-1]
  $replaceText[$replaceText[$message;$getServerVar[prefix]roller;$guildRoles[mention];-1];$getServerVar[prefix]emojiler;$serverEmojis;-1]
  
  ]
  
  $onlyIf[$checkContains[$message;$getServerVar[prefix]roller;$getServerVar[prefix]emojiler]!=false;]
  `,
  nonPrefixed: false
})
  


bot.status({
  text: "Sahibim Hakıkında Bilgimi İstiyorsun Hemen Dmsine Git ᛠ-KRALBABA29#8395",
  type: "PLAYING",
  status: "idle",
  time: 12,
})


bot.status({
  text: "Benim Prefixim c!",
  type: "PLAYING",
  status: "idle",
  time: 12,
})

bot.status({
  text: "Toplam Kullanıcı:$allMembersCount",
  type: "PLAYING",
  status: "idle",
  time: 12,
})

bot.status({
  text: "Toplam Sunucu:$serverCount",
  type: "PLAYING",
  status: "idle",
  time: 12,
})

bot.joinCommand({
        channel: "$getServerVar[gkanal]",
        code: `
        <@$authorID> Hoşgeldin !.
        Seni Davet Eden Kişi $userTag[$userInfo[inviter]] Kişinin Toplam Daveti $userInfo[real;$userInfo[inviter]]
        `
        })
bot.onJoined()

bot.leaveCommand({
        channel: "$getServerVar[çkanal]",
        code: `
        $username#$discriminator Ayrıldı !.
        Seni Davet Eden Kişi $userTag[$userInfo[inviter]] Kişinin Toplam Daveti $userInfo[real;$userInfo[inviter]] 
    `
})
bot.onLeave()

bot.command({
  name:"sunucu-bilgi",
  aliases: ['sunucubilgi'],
  code:`
  $title[$serverName[$guildID] Sunucu Bilgileri]
$description[**Emoji Sayısı** : \`$emojiCount\`
**Üye Sayısı** : \`$membersCount\`
**Kanal Sayısı **: \`$channelCount\`
**Rol Sayısı **: \`$roleCount\`
**SunucuID **: \`$guildID\`
**Sunucu Sahibi **: <@$ownerID>
**Sunucunun Konumu **: \`$serverRegion\`]
$color[$random[0;99999]]`
  })

bot.command({
name: "nitro",
code: `
discord.gift/$randomString[10]$randomString[10]$randomString[4]
$onlyIf[$getGlobalUserVar[gold;$authorID]!=yok;Bu Komut Gold Üyelere Özel !]`})

bot.command({
name: "yazdır", 
code: `$description[**$noMentionMessage**] $color[$random[0;99999]] 
$addTimestamp` 
})

bot.command({
  name:"$alwaysExecute",
  code:`
  $deletecommand
  $deleteIn[5s]
 $title[❗️Link Engel Sistemi Açık❗️]
 $description[⚠️<@$authorID> Link Atamazsın]
 $color[00FF00]
  $onlyIf[$checkContains[$toLowercase[$message];https://;discord.gg;discord.gift;http://]==true;]
  $onlyIf[$getServerVar[link]!=kapalı;]
  $onlyIf[$isBot[$authorID]==false;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  `,
  nonPrefixed: true
})

bot.command({
  name:"GMVC-GAMERKİNG",
  code:`
  $description[[Kanalıma Gitmek İçin Tıkla](https://www.youtube.com/channel/UCaTgxQE5Qoa1HGDb_7vLVoQ)]` 
})

bot.deletedCommand({
channel:"$channelID",
code:`
$setServerVar[snipek;$channelUsed]
$setServerVar[snipe;$message]
$setServerVar[snipekk;$authorID]
`
})
bot.onMessageDelete()
bot.command({
  name:"snipe",
  code:`
  $color[RANDOM]
  $description[
  En Son Silinen Mesaj : $getServerVar[snipe]
  
  Kanal : <#$getServerVar[snipek]>
  
  Kişi : <@$getServerVar[snipekk]> $username[$getServerVar[snipekk]]#$discriminator[$getServerVar[snipekk]]
  ]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Sadece Yetkiliye Özeldir !]
  `
})

bot.command({
  name:"kurallar",
  code:`
$title[📜 | Sunucu Kuralları
$description[*👉 Din, dil, ırk veya cinsiyet ayrımı içeren söylemler.

👉 Siyasi ya da dini sohbetler başlatmak ve içinde bulunmak.

👉 Herhangi bir kimseyi hedef alan hakaretlerde bulunmak.

👉 Her türlü satış ve reklam içerikli paylaşımlar.

👉 Flood, Spam, vb. yapmak.

👉 Kişisel kavgaları Discord sohbet kanallarına taşımak.

👉 +18 içerikli paylaşımlar yapmak.

👉 Yazışma kanalları amacı dışında kullanmak.

👉 Kendi odası dışında spoiler içerikli paylaşımlar yapmak.

👉 Özel karakter içeren isimler kullanmak.

👉 Oyun, abonelik, vb. dilenmek.

👉 Olası dolandırıcı unsur barındıran ve satış içerikli Discord durum mesajlarını kullanmak.*

**☑️ İşlenilen Bütün Sorunlar Kullanıcıya Aittir!**]
$footer[$serverName;$serverIcon]
$color[ff0000]
`
})

