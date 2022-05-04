// Menu
exports.menu = () => {
	return``
}

// All Menu
exports.allmenu = (prefix) => {
return`
┌── 「 *Owner Menu* 」
├ ${prefix}react [emoji]
├ ${prefix}chat [option]
├ ${prefix}join [link]
├ ${prefix}leave
├ ${prefix}block @user
├ ${prefix}unblock @user
├ ${prefix}bcgroup [text]
├ ${prefix}bcall [text]
├ ${prefix}setppbot [image]
├ ${prefix}setexif
└───────

┌── 「 *Info Menu* 」
├ ${prefix}ping
├ ${prefix}speedtest
├ ${prefix}owner
├ ${prefix}delete
├ ${prefix}infochat
├ ${prefix}quoted
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}listonline
└───────

┌── 「 *Rpg Menu* 」
├ ${prefix}berburu
├ ${prefix}mancing
├ ${prefix}menambang
├ ${prefix}mining
├ ${prefix}heal
├ ${prefix}profile
├ ${prefix}inventory
├ ${prefix}leaderboard
├ ${prefix}buy
├ ${prefix}sell
└───────

┌── 「 *Group Menu* 」
├ ${prefix}linkgroup
├ ${prefix}ephemeral [option]
├ ${prefix}setppgc [image]
├ ${prefix}setname [text]
├ ${prefix}setdesc [text]
├ ${prefix}group [option]
├ ${prefix}editinfo [option]
├ ${prefix}add @user
├ ${prefix}kick @user
├ ${prefix}hidetag [text]
├ ${prefix}tagall [text]
├ ${prefix}antilink [on/off]
├ ${prefix}mute [on/off]
├ ${prefix}promote @user
├ ${prefix}demote @user
├ ${prefix}vote [text]
├ ${prefix}devote
├ ${prefix}upvote
├ ${prefix}cekvote
├ ${prefix}hapusvote
├ ${prefix}jadian
├ ${prefix}jodohku
└───────

┌── 「 *Convert Menu* 」
├ ${prefix}toimage [reply sticker]
├ ${prefix}removebg [reply image] 
├ ${prefix}sticker [reply image]
├ ${prefix}emojimix [em1 + em2]
├ ${prefix}tovideo [reply sticker]
├ ${prefix}togif [reply sticker]
├ ${prefix}tourl [reply gambar/video] 
├ ${prefix}tovn [reply vid/audio]
├ ${prefix}tomp3 [reply vid/audio]
├ ${prefix}toaudio [reply vid/audio]
├ ${prefix}ebinary [reply teks]
├ ${prefix}dbinary [reply teks]
├ ${prefix}styletext [teks]
├ ${prefix}smeme [reply sticker]
├ ${prefix}halah [teks]
├ ${prefix}hilih [teks]
├ ${prefix}huluh [teks]
├ ${prefix}heleh [teks]
├ ${prefix}holoh [teks]
└───────

┌── 「 *Downloader Menu* 」
├ ${prefix}tiktokvid [url]
├ ${prefix}tiktokaudio [url]
├ ${prefix}tiktoknowm [url]
├ ${prefix}instagram [url]
├ ${prefix}twitter [url]
├ ${prefix}facebook [url]
├ ${prefix}likee [url]
├ ${prefix}ytmp3 [url]  
├ ${prefix}ytmp4 [url]  
├ ${prefix}getmusic [query]  
├ ${prefix}getvideo [query]  
├ ${prefix}umma [url]  
├ ${prefix}soundcloud [url] 
├ ${prefix}pixiv [id]
├ ${prefix}konachan [query]
└───────

┌── 「 *Search Menu* 」
├ ${prefix}play [query]
├ ${prefix}google [query]
├ ${prefix}gimage [query]
├ ${prefix}pinterest [query]
├ ${prefix}wallpaper [query]
├ ${prefix}wikimedia [query]
├ ${prefix}wikipedia [query]
├ ${prefix}kbbi [query]
├ ${prefix}ytsearch [query]
├ ${prefix}ringtone [query]
├ ${prefix}brainly [teks]
├ ${prefix}lirik [lagu]
├ ${prefix}happymod [apk]
├ ${prefix}spacksearch [teks]
├ ${prefix}gcwasearch [teks]
├ ${prefix}sfilesearch [query]
├ ${prefix}webtoon [query]
├ ${prefix}pixivsearch [query]
├ ${prefix}quotes [teks]
├ ${prefix}chordgitar [lagu]
└───────

┌── 「 *Games Menu* 」
├ ${prefix}family100
├ ${prefix}tebak lagu
├ ${prefix}tebak gambar
├ ${prefix}tebak kata
├ ${prefix}tebak kalimat
├ ${prefix}tebak lirik
├ ${prefix}tebak caklontong
├ ${prefix}math [mode]
├ ${prefix}suitpvp [@tag]
├ ${prefix}delttt
├ ${prefix}tictactoe
└───────

┌── 「 *Primbon Menu* 」
├ ${prefix}nomorhoki
├ ${prefix}artimimpi
├ ${prefix}artinama
├ ${prefix}ramaljodoh
├ ${prefix}ramaljodohbali
├ ${prefix}suamiistri
├ ${prefix}ramalcinta
├ ${prefix}cocoknama
├ ${prefix}pasangan
├ ${prefix}jadiannikah
├ ${prefix}sifatusaha
├ ${prefix}rezeki
├ ${prefix}pekerjaan
├ ${prefix}nasib
├ ${prefix}penyakit
├ ${prefix}tarot
├ ${prefix}fengshui
├ ${prefix}haribaik
├ ${prefix}harisangar
├ ${prefix}harisial
├ ${prefix}nagahari
├ ${prefix}arahrezeki
├ ${prefix}peruntungan
├ ${prefix}weton
├ ${prefix}karakter
├ ${prefix}keberuntungan
├ ${prefix}memancing
├ ${prefix}masasubur
├ ${prefix}zodiak
├ ${prefix}shio
└───────

┌── 「 *NSFW Menu* 」
├ ${prefix}blowjob
├ ${prefix}ahegao
├ ${prefix}ass
├ ${prefix}bdsm
├ ${prefix}cuckold
├ ${prefix}cum
├ ${prefix}ero
├ ${prefix}femdom
├ ${prefix}foot
├ ${prefix}gangbang
├ ${prefix}glasses
├ ${prefix}jahy
├ ${prefix}masturbation
├ ${prefix}neko
├ ${prefix}orgy
├ ${prefix}panties
├ ${prefix}pussy
├ ${prefix}neko2
└───────

┌── 「 *Database Menu* 」
├ ${prefix}setcmd
├ ${prefix}listcmd
├ ${prefix}delcmd
├ ${prefix}lockcmd
├ ${prefix}addmsg
├ ${prefix}listmsg
├ ${prefix}getmsg
├ ${prefix}delmsg
└───────

┌── 「 *Anonymous Menu* 」
├ ${prefix}anonymous
├ ${prefix}start
├ ${prefix}next
├ ${prefix}keluar
├ ${prefix}sendkontak
└───────

┌── 「 *Voice Changer* 」
├ ${prefix}bass
├ ${prefix}blown
├ ${prefix}deep
├ ${prefix}earrape
├ ${prefix}fast
├ ${prefix}fat
├ ${prefix}nightcore
├ ${prefix}reverse
├ ${prefix}robot
├ ${prefix}slow
├ ${prefix}tupai
└───────

┌── 「 *Big Thanks To* 」
├ DikaArdnt
├ Zeeoneofc
├ FatihArridho
├ Sanzy
├ Yoga
├ RiychDwayne
└───────
`
}

exports.thanksto = () => {
	return`
┌── 「 *Thanks To* 」
├ DikaArdnt
├ Zeeoneofc
├ FatihArridho
├ Sanzy
├ Yoga
├ RiychDwayne
└───────
`
}