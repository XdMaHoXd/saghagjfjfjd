module.exports = {
  name:"tekmele",
  code:`
  $author[TEKME ATMA Zamanı !;$userAvatar[$mentioned[1]]]
  $description[$thumbnail[https://thumbs.gfycat.com/AcidicGenuineAntarcticgiantpetrel-small.gif]
    $username#$discriminator Kişisi $username[$mentioned[1]]#$discriminator[$mentioned[1]]
  Kişisinin Kıçına Tekmeyi Bastı]
  $image[https://media.tenor.com/images/27f16871c55a3376fa4bfdd76ac2ab5c/tenor.gif]
  $suppressErrors[Birini Etiketledigine Eminmisin ?]
 $onlyIf[$mentioned[1]!=$authorID;Fizik Kurallarına Aykırı]
  $onlyIf[$message!=;Dostum Birini Etiketlemeyi Unuttun !]
  `
}