module.exports = {
  name:"abiniara",
  code:`
  Bu Sunucuda Abini Arıyorsun 🔍
  $editIn[5s;{author:Abin Bulundu !}{thumbnail:$userAvatar[$randomUserID]}{description:Bence Bu Sunucudaki Abin <@$randomUserID>}]
 $onlyIf[$getGlobalUserVar[gold;$authorID]!=yok;Bu Komut Gold Üyelere Özel !] 
 `
}