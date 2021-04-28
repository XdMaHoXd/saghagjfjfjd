module.exports = {
  name:"erkekrol",
  code:`
 Erkek Rol \`\`$roleName[$mentionedRoles[1]]\`\` Olarak Ayarlanmıştır !
 $setServerVar[erkekrol;$mentionedRoles[1]]
 $onlyIf[$hasPerms[$authorID;admin]!=false;Bunu Sadece \`\`Yönetici\`\` Yetkisindekiler Yapılabilir !]
 $onlyIf[$message!=;Erkek Rol Ayarlamam İçin Bir Rol Etiketlemelisin !]
 `
}