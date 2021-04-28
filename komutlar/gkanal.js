module.exports = {
  name:"gkanal",
  code:`
  Artık Giriş Kanalı <#$mentionedChannels[1]> Olarak Ayarlanmıştır
  $setServerVar[gkanal;$mentionedChannels[1]]
  $onlyIf[$mentionedChannels[1]!=;Kanal Etiketlemeyi Unuttun !]
   $onlyPerms[admin;Yetkiniz Yetmemektedir]
 
  `
}