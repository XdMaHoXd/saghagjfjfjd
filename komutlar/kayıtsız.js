module.exports = {
  name:"kayıtsızrol",
  code:`
 Kayıtta Alacağım Rol \`\`$roleName[$mentionedRoles[1]]\`\` Olarak Ayarlanmıştır !
 $setServerVar[kayıtsız;$mentionedRoles[1]]
 $onlyIf[$hasPerms[$authorID;admin]!=false;Bunu Sadece \`\`Yönetici\`\` Yetkisindekiler Yapılabilir !]
 $onlyIf[$message!=;Kayıtsız Rol Ayarlamam İçin Bir Rol Etiketlemelisin !]
 `
}