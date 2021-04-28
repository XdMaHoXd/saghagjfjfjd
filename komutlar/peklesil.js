module.exports = {
  name:"para",
  code:`
  Yapılan İşlem \`\`\`$message[1]\`\`\`
  Kişi \`\`\`$username[$mentioned[1]]#$discriminator[$mentioned[1]]\`\`\`
  Miktar \`\`\`$message[3]\`\`\`
  $setGlobalUserVar[para;$replaceText[$replaceText[$message[1];ekle;$sum[$getGlobalUserVar[para;$mentioned[1]];$message[3]];-1];sil;$sub[$getGlobalUserVar[para;$mentioned[1]];$message[3]];-1];$mentioned[1]]
  $onlyForIDs[765150340202889226;Üzgünüm Yetkili Bir Abiye Benzemiyorsun]
  $onlyIf[$message[3]!=; Kullanım !para ekle/sil <kişi> <miktar>]
$onlyIf[$isNumber[$message[3]]!=false;Girilen Miktar Sayı Degil !]
$onlyIf[$checkContains[$message[1];ekle;sil]!=false; Yapacağın İslem !para ekle/sil]
$onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap Olusturulmadı !]
$onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap Olusturulmadı !]
 `
}
