module.exports = {
  name:"maaş",
  code:`
  Haftalık Maaş Alındı.
  Durum: \`\`\`$getGlobalUserVar[meslek;$authorID]\`\`\`
  Verilen Maaş: \`\`\`$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[meslek;$authorID];işsiz;500;-1];muhabir;1500;-1];doktor;2500;-1];polis;3500;-1]\`\`\`
  $globalCooldown[1h;Daha Yeni Maaş Edindin 1 Hafta Sonra Dene !]
  $setGlobalUserVar[para;$sum[$getUserVar[para;$authorID];$replaceText[$replaceText[$replaceText[$replaceText[$getUserVar[meslek;$authorID];işsiz;500;-1];muhabir;1500;-1];doktor;2500;-1];polis;3500;-1]];$authorID]
$onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap Olusturulmadı !]
`
}