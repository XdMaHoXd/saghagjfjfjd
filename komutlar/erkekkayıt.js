module.exports = {
  name:"erkek",
  code:`
  $useChannel[$getServerVar[hgkanal]]
  $color[$getRoleColor[$highestRole[$mentioned[1]]]]
  $title[Aramıza Hoşgeldin ! $membersCount]
  $description[$thumbnail[$userAvatar[$mentioned[1]]]
  Hoşgeldin Sevgili $username[$mentioned[1]]#$discriminator[$mentioned[1]]
  
  $customemoji[onay]Seninle Artık \`\`$membersCount\`\` Kişiyiz !
  $customemoji[amongus]Günün Güzel Geçsin..
  ]


  $channelSendMessage[$channelID;$username[$mentioned[1]]#$discriminator[$mentioned[1]] Kişisini Erkek Olarak Kayıt Ettim !]
  $takeRoles[$mentioned[1];$getServerVar[kayıtsız]]
  $giveRoles[$mentioned[1];$getServerVar[erkekrol]]
  $onlyIf[$hasRoles[$authorID;$getServerVar[kyetkili]]!=false;Üzgünüm Bunu Sadece \`\`$roleName[$getServerVar[kyetkili]]\`\` Kişileri Kullanabilir !]
  $onlyIf[$message!=;Erkek Olarak Kayıt Edeceğim Kişiyi Etiketle !]
  $changeNickname[$mentioned[1];$noMentionMessage]
`
}