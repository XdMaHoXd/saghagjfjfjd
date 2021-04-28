module.exports = {
  name:"kullan",
  code:`
  Kod Doğru Girildi.Premium Üyelik Verilmiştir.
  $setGlobalUserVar[gold;var;$authorID]
  $setGlobalUserVar[kod;yok;765150340202889226]
  $onlyIf[$message[1]==$getGlobalUserVar[kod;765150340202889226];Hatali Kod !]
  $onlyIf[$getGlobalUserVar[kod;765150340202889226]!=yok;]`
}