module.exports = {
  name:"kumar",
  code:`
  Kumar Oynadın.
  $replaceText[$replaceText[$randomText[helal;go];helal; Kazandığın Miktar $multi[$message[1];2];25];go; Kaybettiğin Miktar $message[1];50]
  $setGlobalUserVar[para;$replaceText[$replaceText[$randomText[helal;go];helal;$sum[$getGlobalUserVar[para;$authorID];$multi[$message[1];2]];25];go;$sub[$getGlobalUserVar[para;$authorID];$message[1]];50];$authorID]
  $onlyIf[$message[1]<=$getGlobalUserVar[para;$authorID];Paran Yetmiyor !]
  $onlyIf[$isNumber[$message[1]]!=false; Girdiğin Değer Yanlış !]
  $onlyIf[$message[1]>0;0 ve Küçük Değer Giremessin !]
 $onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap Olusturulmadı !]
 `
}