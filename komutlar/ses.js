module.exports = ({
    name: "ses",
    code: `
    $color[00ff51]
$author[Ses $message Olarak Ayarlandı;https://cdn.discordapp.com/attachments/778283166418468887/781473098750885888/ses-removebg-preview.png]
$volume[$message]
$onlyIf[$isNumber[$message]!=false;Girdiğin Bir Rakam Değil]
$onlyIf[$voiceID!=;Ses Kanalına Girmelisin]
$onlyIf[$message!=;Bir Müzik İsmi Girmelisin]
$suppressErrors[Müzik Çalmıyor Nasıl Ses Vereyim?]
    `
    });