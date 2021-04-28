module.exports = {
  name:"tokatla",
  code:`
  $author[OSMANLI TOKADI Zamanı !;$userAvatar[$mentioned[1]]]
  $description[$thumbnail[https://cdn.discordapp.com/attachments/787004564888879126/797630449068277811/indir-removebg-preview.png]
    $username#$discriminator Kişisi $username[$mentioned[1]]#$discriminator[$mentioned[1]]
  Kişisine **OSMANLI** tokadı attı]
  $image[https://4.bp.blogspot.com/-WfzGkNhjFIE/Vi-vwoWklXI/AAAAAAAAPCc/HXSnXtEMGs0/w680/kemal_sunal_sener_sen_tokat.gif]
  $suppressErrors[Birini Etiketledigine Eminmisin ?]
 $onlyIf[$mentioned[1]!=$authorID;Kendine O Kadar Hızlı Vurdun Ki.Allah Belanı Verdi]
  $onlyIf[$message!=;Dostum Birini Etiketlemeyi Unuttun !]
  `
}