module.exports = {
  name:"meslek",
  code:`
  Seçilen Meslek \`\`\`$message[1]\`\`\` Verilen Maaş \`\`\`$replaceText[$replaceText[$replaceText[$message[1];doktor;2500;-1];polis;3500;-1];muhabir;1000;-1]\`\`\`
  $setGlobalUserVar[meslek;$message[1];$authorID]
  $globalCooldown[1h;Daha Yeni Meslek Edindin 1 Hafta Sonra Dene !]
  $onlyIf[$checkContains[$message[1];doktor;polis;muhabir]!=false; Girdiğin Meslek doktor/polis/muhabir Olmalıdır !]
  $onlyIf[$message!=;Meslek Secmek İcin Birini Yaz !]
 $onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap Olusturulmadı !]
 ` 
}