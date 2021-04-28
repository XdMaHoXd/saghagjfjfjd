module.exports = {
  name:"param",
  code:`
  $description[
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]] Kişide
    Bulunan Toplam Para \`\`\`$getGlobalUserVar[para;$mentioned[1;yes]]\`\`\`
  ]
  $footer[Sorgulayan • $username;$authorAvatar]
 $onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap Olusturulmadı !]
 `
}