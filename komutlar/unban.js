module.exports = {
       name:"unban",
       code:`
$unban[$message[1]]
$username[$message[1]]#$discriminator[$message[1]] kişisinin bani açılmıştır !
$onlyIf[$hasPerms[$authorID;ban]!=false;Yetkin Yok !]
$onlyIf[$isNumber[$message[1]]!=false;Girilen Bir ID Değil !]
$onlyIf[$message!=;Bir ID Giriniz !]`
}