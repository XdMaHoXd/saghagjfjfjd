module.exports = {
  name:"çalış",
  code:`
  \`\`\`$randomText[1 Kişiye Logo Yaptin; Çöp Topladın;Hamburgercide Çalıştın; Bakıcılık Yaptın]\`\`\`
  Ve Toplam \`\`\`$random[15;75] ₺\`\`\` Kazandın.
  $setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$random[15;75]];$authorID]
$globalCooldown[1d; Bugünlük İs Yok.Yarin Gel !]
$onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap Olusturulmadı !]
`}