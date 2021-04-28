module.exports = {
  name:"yarat",
  code:`
  $channelSendMessage[$channelID;DM Kontrol Et]
  $dm[$authorID]
  Yarattığım Kod
\`\`$random[0000;9999]\`\`
İlk c!kullan $random[0000;9999] Yazana Gold Üyelik Vereceğim.
$setGlobalUserVar[kod;$random[0000;9999];$authorID]
$onlyForIDs[765150340202889226;]
$onlyIf[$getGlobalUserVar[kod;765150340202889226]==yok; Şuanda Kod Zaten Var !]
  `
}