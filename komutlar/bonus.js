module.exports = {
  name:"bonus",
  code:`
  Yapılan İşlem ; $message[1]
  Kişi ; <@$mentioned[1]>
  Miktar ; $message[3]
  $setUserVar[bonus;$replaceText[$replaceText[$message[1];ekle;-$message[3];-1];sil;+$message[3];-1];$mentioned[1]]
  $onlyIf[$checkContains[$message[1];ekle;sil]!=false;İlk Kelimen ekle/sil Olmalı !!!]
  $onlyIf[$isNumber[$message[3]]!=false;Miktar Sayı Olmalıdır]
  $onlyIf[$message[3]!=;3. Kelimen Miktar Olmalıdır]
  $onlyIf[$mentioned[1]!=;Birini Etiketlemen Şart]
  $onlyIf[$message[2]!=;İkinci Olarak Kisiyi Etiketlemelisin]
  $onlyIf[$message[1]!=;İlk Kelimen ekle/sil Olmalıdır]
  $onlyPerms[Yetkiniz Yetmemektedir]`
}