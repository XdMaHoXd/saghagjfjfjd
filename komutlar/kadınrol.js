module.exports = {
  name:"kadınrol",
  code:`
 Kadın Rol \`\`$roleName[$mentionedRoles[1]]\`\` Olarak Ayarlanmıştır !
 $setServerVar[kadınrol;$mentionedRoles[1]]
 $onlyIf[$hasPerms[$authorID;admin]!=false;Bunu Sadece \`\`Yönetici\`\` Yetkisindekiler Yapılabilir !]
 $onlyIf[$message!=;Kadın Rol Ayarlamam İçin Bir Rol Etiketlemelisin !]
 `
}