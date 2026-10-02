/* =====================================================================
   KENANGAN: FOTO + PESAN + LAGU
   Semua ditambahkan lewat file ini (bukan dari website).

   CARA MENAMBAH FOTO BARU:
   1. Taruh foto di folder  foto/   (contoh: foto/7.jpg)
       2. Taruh lagu di folder  music/  (contoh: music/lagu7.mp3)
   3. Salin satu blok { ... } di bawah, tempel di bawahnya, lalu ganti isinya.

   Keterangan isi tiap blok:
     photo     : lokasi file foto
     title     : judul kecil di bawah foto
     song      : lokasi file lagu mp3 (tiap foto boleh beda lagu)
     songTitle : tulisan judul lagu di pemutar
     msg       : pesan yang muncul saat foto diklik

   "#g2" = foto di halaman "Kenangan Kita"
   "#g4" = foto di halaman "Selalu Kamu"
   Foto yang filenya belum ada otomatis disembunyikan, jadi aman.
   ===================================================================== */
const MEMORIES = {
  "#g2": [
    { photo: "foto/1.jpg", title: "Kita pas di Paralayang",
      song: "music/3.mp3", songTitle: "Lopyuuuuuuuuu",
      msg: "pas kita ke paralayang, kamuu baru bangun bobo ku aku di ajak ke paralayang😆😆😆. 💗" },

    { photo: "foto/2.jpg", title: "foto waktu kamu fotbar sama si mamah iii",
      song: "music/4.mp3", songTitle: "momennnnnn",
      msg: "ini foto sebelum kamu fotbar sama si mamahh😆,jujurlyy kasiann baru bangun bobo tapi gimanaa iii si mamah yang ajak😆" },

    { photo: "foto/3.jpg", title: "Cantikkuu",
      song: "music/9.mp3", songTitle: "cintaakuuu",
      msg: "Makasiii yahhh sayangg udaa nerimaa akuu baik darii segi ekonomi,fisik,atauu lainnyaa,selama kamu bersamaku kamuu akann merasakan apaa ituu yang nama nyaa cintaa,ketulusan. 🌷" },
 ],
  "#g4": [
    { photo: "foto/4.jpg", title: "wajah indah kamu dan hati yang tulus",
      song: "music/1.mp3", songTitle: "kehadiranmu adalah kehadiranku",
      msg: "akuu nggga bakalann sia sia innn perjuangan aku selama ini dan kamu jangan sia sia in juga perjuangan kamu selama ini,kita udah berjuang sejauh iniii,walaupun kita sering berantem tapii jangan pernah sampe ada kata putus yahh sayangg, buat apa kita sejauh ini kalo kita ujung ujngnya putus,kitaa pertahanin semuanya yahh sayangg,kamuu tenang ajaa sayangg nggaa perluu takut akuu bakalann selalu ada di sisi kamuu selamanyaa sayanggg. 💞" },

    { photo: "foto/5.jpg", title: "senyuman cintaamuuu awwkhh",
      song: "music/6.mp3", songTitle: "senyummu semangatkuuu hiihhii",
      msg: "Senyumann kamuu itu obat paling ampuh buat lelahhkuu. udaaa akuu cariii obatt lainn, tapii ngga adaa yang semujarab ini,TOLONGGG!!!🫨😖😖. jangan berhenti senyum yaaa cayangggg. 🥰" },

    { photo: "foto/6.jpg", title: "I Love You sayangggg",
      song: "music/8.mp3", songTitle: "Bersamamu",
      msg: "jangann lupaa salingg menghargaii sesama pasangan yahh sayangg,karenaa kalo kita saling menghargai hubungan kita bakall lancar,dan jangan pernah sepelein larangann dari aku/kamuu yaaahh cayanggg,dann jangann lupaa jugaa kitaa haruss jujurr cayanggg karenaa kejujurannn ituu kuncii hubungan langgeng. 😍😍" },
  ]
};
