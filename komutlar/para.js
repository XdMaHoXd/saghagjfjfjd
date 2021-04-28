module.exports = {
  name:"para",
  code:`
$replaceText[$replaceText[$message[1];çek;
Para Çekme İşlemi
Çekilen Miktar = $message[2]

Güncel Para = $sum[$getUserVar[para;$authorID];$message[2]]
Güncel Banka Para = $sub[$getUserVar[banka;$authorID];$message[2]];-1];yatır;Para Yatırma İşlemi
Yatırılan Miktar = $message[2]

Güncel Banka Para = $sum[$getUserVar[banka;$authorID];$message[2]]
Güncel Para = $sub[$getUserVar[para;$authorID];$message[2]];-1]






$onlyIf[$message[1]!=;Yapacağın İşlemi Seç !para çek/yatır]
$onlyIf[$message[2]!=; Miktarını Seç]
$onlyIf[$checkContains[$message[1];çek;yatır]==true; Yapacağın İşlem çek/yatır olmalı]
$onlyIf[$message[2]<=0;0 ve Altı Miktar Giremessin]
$onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap Olusturulmadı !]
`
}