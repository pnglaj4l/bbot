const fs = require('fs')
const chalk = require('chalk')

// Other
global.owner = ['6285158060230']
global.premium = ['6281290336194,6285158060230']
global.ownername = 'Pnglaj4l'
global.botname = 'B-BOT'
global.footer = 'Made With ❤ By @pnglaj4l\nBio : https://ln.ki/pnglaj4l'
global.ig = 'https://instagram.com/pnglaj4l'
global.region = 'Indonesia'
global.sc = 'https://instagram.com/pnglaj4l'
global.myweb = 'https://ln.ki/pnglaj4l'
global.packname = 'Made By B-BOT'
global.author = 'https://bit.ly/bbotnumber'
global.sessionName = 'session'
global.prefa = ['','!','.','?','/','#','$','%','^','&','*','(',')','{','}',':',';','"','|']
global.sp = '⭔'
global.mess = {
    success: '「✅」Success',
    admin: '「ERROR」Fitur Khusus Admin Group!',
    botAdmin: '「ERROR」Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: '「ERROR」Fitur Khusus Owner Bot',
    group: '「ERROR」Fitur Digunakan Hanya Untuk Group!',
    private: '「ERROR」Fitur Digunakan Hanya Untuk Private Chat!',
    bot: '「ERROR」Fitur Khusus Pengguna Nomor Bot',
    wait: '「❗」Tunggu Sebentar...',
    premium: '「ERROR」Fitur Khusus Premium! Chat Owner Bot Untuk Membeli Premium!',
    endLimit: '「ERROR」Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
    global.limitawal = {
    premium: 9999999999,
    free: 1,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./image/bbot.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
