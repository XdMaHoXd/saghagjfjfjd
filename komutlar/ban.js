module.exports = {
  name:"ban",
  code:`
  $ban[$mentioned[1];$noMentionMessage]
  
  $username[$mentioned[1]]#$discriminator[$mentioned[1]] Kişisi Sunucudan $noMentionMessage Sebebi İle Banlanmıştır.
  
  $onlyIf[$hasPerms[$authorID;ban]!=false;Üzgünüm Yetkin Yetmiyor !]
  $onlyIf[$message[2]!=;Kullanım !ban @kişi sebep]
  `
}