module.exports = {
  name:"aşkölçer",
  code:`
  $author[AŞK Ölçme Zamanı !;$userAvatar[$mentioned[1]]]
  $description[$thumbnail[https://media.tenor.com/images/752063d293a04a2ce7ac64b8f983e4d2/tenor.gif]
    $username#$discriminator Kişisinin $username[$mentioned[1]]#$discriminator[$mentioned[1]]
Kişisine Aşkı
=
  $randomText[%$random[0;9]🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤 C-Ciddenmi;%$random[10;19]♥️🖤🖤🖤🖤🖤🖤🖤🖤🖤 Hissin Yok.;%$random[20;29]♥️♥️🖤🖤🖤🖤🖤🖤🖤🖤 Buna Aşk Denmez.;%$random[30;39]♥️♥️♥️🖤🖤🖤🖤🖤🖤🖤 Kendine Gel Sevgisiz.;%$random[40;49]♥️♥️♥️♥️🖤🖤🖤🖤🖤🖤 Yeni bir adım atmaya başladın.;%$random[50;59]♥️♥️♥️♥️♥️🖤🖤🖤🖤🖤 Yolun Yarısı İyidir.;%$random[60;69]♥️♥️♥️♥️♥️♥️🖤🖤🖤🖤 Sevgili olabilirsiniz bence.;%$random[70;79]♥️♥️♥️♥️♥️♥️♥️🖤🖤🖤 Aşk Diyebilirim ama tam değil.;%$random[80;89]♥️♥️♥️♥️♥️♥️♥️♥️🖤🖤 Oğlum Cok İyi Lan.;%$random[90;99]♥️♥️♥️♥️♥️♥️♥️♥️♥️🖤 Yinede Tam Değil.;%100♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️ İŞTE GERÇEK AŞK BUDUR !]]
  $suppressErrors[Birini Etiketledigine Eminmisin ?]
  $onlyIf[$isBot[$mentioned[1]]!=true;Bot Seni S.sevemez]

 $onlyIf[$mentioned[1]!=$authorID;K.Kendinle Barışık İnsanlar. Dünyanın En Masum İnsanıdır.]
  $onlyIf[$message!=;Dostum Birini Etiketlemeyi Unuttun !]
  `
}