module.exports = {
  name:"kyetkilisi",
  code:`
 Teyit Yetkili Rol \`\`$roleName[$mentionedRoles[1]]\`\` Olarak Ayarlanmıştır !
 $setServerVar[kyetkili;$mentionedRoles[1]]
 $onlyIf[$hasPerms[$authorID;admin]!=false;Bunu Sadece \`\`Yönetici\`\` Yetkisindekiler Yapılabilir !]
 $onlyIf[$message!=;Teyit Yetkili Rol Ayarlamam İçin Bir Rol Etiketlemelisin !]
 `
}