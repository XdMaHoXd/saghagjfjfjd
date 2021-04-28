module.exports = {
  name:"hgkanal",
  code:`
 Kayıt Olduğunda Karşılayacağım Kanal \`\`$channelName[$mentionedChannels[1]]\`\` Olarak Ayarlanmıştır !
 $setServerVar[hgkanal;$mentionedChannels[1]]
 $onlyIf[$hasPerms[$authorID;admin]!=false;Bunu Sadece \`\`Yönetici\`\` Yetkisindekiler Yapılabilir !]
 $onlyIf[$message!=;Hoşgeldin Kanalı Ayarlamam İçin Bir Rol Etiketlemelisin !]
 `
}