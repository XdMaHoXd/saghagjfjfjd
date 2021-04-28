module.exports = {
name: "çeviri",
code: `
Metin: $message
Yazı: $jsonRequest[https://api.somecool.repl.co/translate?text=$message;translated]
Dil: $jsonRequest[https://api.somecool.repl.co/translate?text=$message;translated_from]
$onlyIf[$message!=;Çevirmem İçin Bir Şey Gir !]
`}