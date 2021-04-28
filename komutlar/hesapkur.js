module.exports = {
  name:"hesapkur",
  code:`
  Hesap Bilgileri Kaydedildi.
  
  İsim ve Soyisim = $message[1] | $message[2]
  Yaş = $message[3]
  $setGlobalUserVar[hesap;İsim = $message[1] | Soyisim = $message[2] | Yaş = $message[3];$authorID]
  $onlyIf[$isNumber[$message[3]]!=false;Girilen Yaş Sayi Degil !]
  $onlyIf[$getGlobalUserVar[hesap;$authorID]==yok; Hesabın Zaten Var !]
  $onlyIf[$message[3]!=; Hesabınız İçin İsim ve Soyisim ve Yaşınızı Giriniz !]
  `}