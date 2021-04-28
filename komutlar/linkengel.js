module.exports = {
    name: "link-engel",
    code: `
    $if[$message[1]==aç] 
    $setServerVar[link;açık]
    $title[❗️Link Engel Sistemi Başarı İle Açıldı❗️]
    $description[✅Artık Bu Sunucuda Yetkili Olmayan Kimse Link Atamıyıcak]
    $color[00FF00]
    $deleteIn[5s]
    $footer[Ayarlayan Kişi $username[$authorID];$authorAvatar] $addTimestamp
    $onlyIf[$getServerVar[link]!=açık;{title:❗️Sistem Zaten Açık❗️}{color:00FF00}{delete:5s}]   
    $elseIf[$message[1]==kapat]
    $setServerVar[link;kapalı]
    $title[❗️Link Engel Sistemi Başarı İle Kapatıldı❗️]
    $description[✅Artık Herkes Link Atabilicek]
    $color[00FF00]
    $deleteIn[5s]
    $footer[Ayarlayan Kişi $username[$authorID];$authorAvatar] $addTimestamp
    $onlyIf[$getServerVar[link]!=kapalı;{title:❗️Sistem Zaten Kapalı❗️}{color:00FF00}{delete:5s}]   
    $endelseIf
    $else
    $title[❗️Yanlış Kullanım❗️]
    $description[✅Lütfen Geçerli Bir Eylem Yazın **aç** - **kapat**]
    $color[00FF00]
    $deleteIn[5s]
    $endif
    $deleteIn[5s]
    $deletecommand
    $onlyPerms[admin;{title:❗️Üzgünüm Yetkin Yok❗️}{description: Bu Özelliği Kullanmak İçin Şu Yetkiye Ship Olmalısınız: **Yönetici** }{color:00FF00}{delete:5s}]
    `
}