module.exports = {
  name:"çkanal",
  code:`
  Artık Çıkış Kanalı <#$mentionedChannels[1]> Olarak Ayarlanmıştır
  $setServerVar[çkanal;$mentionedChannels[1]]
  $onlyIf[$mentionedChannels[1]!=;Kanal Etiketlemeyi Unuttun !]
   $onlyPerms[admin;Yetkiniz Yetmemektedir]
 
  `
}