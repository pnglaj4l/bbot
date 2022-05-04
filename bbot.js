require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const brainly = require('brainly-scraper')
const xfar = require('xfarr-api')
 const bdr = require('rumus-bdr')
const hx = require('hxz-api')
const { TiktokDownloader } = require('./lib/tiktokdl') 
const { igDownloader } = require('./lib/igdown.js') 
const { lirikLagu } = require('./lib/lirik.js')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const {
	mediafireDl
	} = require('./lib/function.js')
//function rpg
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./rpg/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./rpg/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./rpg/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./rpg/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./rpg/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡','🦈','🐬','🐋','🐳','🦭']   

// Database Rpg
 let _limit = JSON.parse(fs.readFileSync('./rpg/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./rpg/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./rpg/user/darah.json'))
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

// Language
const  { ind } = require(`./language`)
lang = ind // Language

module.exports = bbot = async (bbot, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await bbot.decodeJid(bbot.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid

        // Group
        const groupMetadata = m.isGroup ? await bbot.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	     
	     // Jam
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!bbot.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            bbot.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Berhasil Direset Pada Pukul 00.00')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        }) 
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await bbot.setStatus(`${bbot.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「*B-BOT GROUP SECURITY*」Group Ini Menyalakan Fitur *ANTILINK* Kamu Mengirimkan Link *GROUP LAIN* Anda Akan Segera Di Kick Oleh B-BOT!`)
        if (!isBotAdmins) return m.reply(`「*ERROR*」BOT Belum Menjadi Admin!`)
        let gclink = (`https://chat.whatsapp.com/`+await bbot.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`「*B-BOT GROUP SECURITY*」Group Ini Menyalakan Fitur *ANTILINK* Tetapi Anda Mengirimkan Link Group Ini, Anda Tidak Akan Saya Kick!`)
        if (isAdmins) return m.reply(`「*B-BOT GROUP SECURITY*」Admin Dapat Dengan Bebas Mengirim Link Group Lain Ke Group Ini! B-BOT Tidak Akan Mengkicknya!`)
        if (isCreator) return m.reply(`「*B-BOT GROUP SECURITY*」Owner B-BOT Dapat Dengan Bebas Mengirim Link Group Lain Ke Group Ini! B-BOT Tidak Akan Mengkicknya!`)
        bbot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
「*FAMILY100*」Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `*Beberapa Jawaban Terdapat Spasi*` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            bbot.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await bbot.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 *Tebak Lagu* 🎮\n\n🎉 *SELAMAT! JAWABAN ANDA BENAR!* 🎉\n\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await bbot.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 *Tebak Gambar* 🎮\n\n🎉 *SELAMAT! JAWABAN ANDA BENAR!* 🎉\n\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await bbot.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 *Tebak Kata* 🎮\n\n🎉 *SELAMAT! JAWABAN ANDA BENAR!* 🎉\n\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await bbot.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 *Cak Lontong* 🎮\n\n🎉 *SELAMAT! JAWABAN ANDA BENAR!* 🎉\n\n*${deskripsi}*\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await bbot.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 *Tebak Kalimat* 🎮\n\n🎉 *SELAMAT! JAWABAN ANDA BENAR!* 🎉\n\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await bbot.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 *Tebak Lirik* 🎮\n\n🎉 *SELAMAT! JAWABAN ANDA BENAR!* 🎉\n\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await bbot.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 *Tebak Tebakan* 🎮\n\n🎉 *SELAMAT! JAWABAN ANDA BENAR!* 🎉\n\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await bbot.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await bbot.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    bbot.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    bbot.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) bbot.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) bbot.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) bbot.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    bbot.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) bbot.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) bbot.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    bbot.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan Tag Dia!
Dia Sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK Selama : ${clockString(new Date - user.afkTime)}\n\nAlasan ${user.afkReason ? ' karena ' + user.afkReason : ''}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
        	case 'limitku':
        case 'limit':
        case 'limitsaya':
m.reply(`Limit Anda : ${getLimit(m.sender)}`)
 break
case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
case 'command':
const sections = [
    {
    title: "All Menu",
    rows: [
        {title: "🔰 - All Menu", rowId: "#allmenu", description: "Menampilkan Semua Menu B-BOT"}
    ]
    },
    {
    title: "Owner Menu",
    rows: [
        {title: "🙋‍♂️ - Owner Menu", rowId: "#ownermenu", description: "Menampilkan Menu KHUSUS OWNER"}
    ]
    },
    {
    title: "Info Menu",
    rows: [
        {title: "ℹ - Info Menu", rowId: "#infomenu", description: "Menampilkan Menu Info"}
    ]
    },
    {
    title: "RPG Menu",
    rows: [
        {title: "☠️ - RPG Menu", rowId: "#rpgmenu", description: "Menampilkan Menu RPG"}
    ]
    },
    {
    title: "Group Menu",
    rows: [
        {title: "👥 - Group Menu", rowId: "#groupmenu", description: "Menampilkan Menu Group"}
    ]
    },
    {
    title: "Convert Menu",
    rows: [
        {title: "🌱 - Convert Menu", rowId: "#convertmenu", description: "Menampilkan Menu Convert"}
    ]
    },
    {
    title: "Downloader Menu",
    rows: [
        {title: "📩 - Downloader Menu", rowId: "#downloadmenu", description: "Menampilkan Menu Download"}
    ]
    },
    {
    title: "Search Menu",
    rows: [
        {title: "🔎 - Search Menu", rowId: "#searchmenu", description: "Menampilkan Menu Search"}
    ]
    },
    {
    title: "Games Menu",
    rows: [
        {title: "🕹 - Games Menu", rowId: "#gamesmenu", description: "Menampilkan Menu Games"}
    ]
    },
    {
    title: "NSFW/Adult Menu",
    rows: [
        {title: "🔞 - NSFW/Adult Menu", rowId: "#nsfwmenu", description: "Menampilkan Menu 18+"}
    ]
    },
    {
    title: "Primbon Menu",
    rows: [
        {title: "🎭 - Primbon Menu", rowId: "#primbonmenu", description: "Menampilkan Menu Primbon"}
    ]
    },
    {
    title: "Database Menu",
    rows: [
        {title: "📈 - Database Menu", rowId: "#databasemenu", description: "Menampilkan Menu Database"}
    ]
    },
    {
    title: "Anonymous Menu",
    rows: [
        {title: "🕶 - Anonymous Menu", rowId: "#anonymousmenu", description: "Menampilkan Menu Anonymous"}
    ]
    },
    {
    title: "Anonymous Menu",
    rows: [
        {title: "🔊 - Voice Changer", rowId: "#voicechangermenu", description: "Menampilkan Menu Voice Changer"}
    ]
    },
]
const listMessage = {
  text: `Halo Kak ${pushname} 🙋‍♂️\nSilahkan Pilih Menu Dibawah!\nJika Ada Error Harap Hubungi *OWNER* Agar Segera Di Perbaiki, Terimakasih! 😊`,
  footer: `${footer}`,
  title: "Menu B-BOT",
  buttonText: "Klik Untuk Memilih Menu!",
  sections
}
bbot.sendMessage(from, listMessage, { quoted: m }) 
break
case 'ownermenu':
m.reply(`── 「 *Owner Menu* 」
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
└───────`)
break
case 'infomenu':
m.reply(`┌── 「 *Info Menu* 」
├ ${prefix}ping
├ ${prefix}speedtest
├ ${prefix}owner
├ ${prefix}delete
├ ${prefix}infochat
├ ${prefix}quoted
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}listonline
└───────`)
break
case 'nsfwmenu':
m.reply(`┌── 「 *NSFW Menu* 」
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
└───────`)
break
case 'rpgmenu':
m.reply(`┌── 「 *Rpg Menu* 」
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
└───────`)
break
case 'groupmenu':
m.reply(`┌── 「 *Group Menu* 」
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
└───────`)
break
case 'convertmenu':
m.reply(`┌── 「 *Convert Menu* 」
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
└───────`)
break
case 'downloadmenu':
m.reply(`┌── 「 *Downloader Menu* 」
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
└───────`)
break
case 'searchmenu':
m.reply(`┌── 「 *Search Menu* 」
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
└───────`)
break
case 'gamesmenu':
m.reply(`┌── 「 *Games Menu* 」
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
└───────`)
break
case 'primbonmenu':
m.reply(`┌── 「 *Primbon Menu* 」
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
└───────`)
break
case 'databasemenu':
m.reply(`┌── 「 *Database Menu* 」
├ ${prefix}setcmd
├ ${prefix}listcmd
├ ${prefix}delcmd
├ ${prefix}lockcmd
├ ${prefix}addmsg
├ ${prefix}listmsg
├ ${prefix}getmsg
├ ${prefix}delmsg
└───────`)
break
case 'anonymousmenu':
m.reply(`┌── 「 *Anonymous Menu* 」
├ ${prefix}anonymous
├ ${prefix}start
├ ${prefix}next
├ ${prefix}keluar
├ ${prefix}sendkontak
└───────`)
break
case 'voicechangermenu':
m.reply(`┌── 「 *Voice Changer* 」
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
└───────`)
break
            case 'menu':
await bbot.send5ButImg(from, `Halo Kak ${pushname} 👋\n\nSaya ${botname}\nTerimakasih Telah Menggunakan BOT Ini! Jika Menemukan Adanya ERROR, Silahkan Hubungi Owner. Terimakasih:)\n• Library : *Baileys-MD*.\n• Prefix : ( ${prefix} )\n• Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}\n• Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\n• Wib : ${wib}\n• Wit : ${wit}\n• Wita : ${wita}` + '' + lang.menu(prefix), `${footer}`,thumb, [{"urlButton": {"displayText": "Instagram","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Menu","id": 'command'}}] )
break
case 'allmenu':
await bbot.send5ButImg(from, `` + '' + lang.allmenu(prefix), `${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}}] )
break
case 'limituser':
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    m.reply(txt)       
  }
 break
        	// rpg
case 'inventori': case 'profile':{
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }     
     var hehe = await getBuffer('https://telegra.ph/file/7b69cccfeb63cfa416aab.jpg')
     let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
     teksehmazeh += `*❤️Darah kamu* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️Besi kamu* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟Emas Kamu* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*💎Emerald Kamu* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*⏺️Limit kamu* : ${getLimit(m.sender)}\n`
     teksehmazeh += `*🧪Potion Kamu* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `_[ 🐺HASIL BURUAN🐺 ]_\n`
     teksehmazeh += `*🐟Ikan* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔Ayam* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇Kelinci* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑Domba* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄Sapi* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘Gajah* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${pushname}*_`
     await bbot.send5ButImg(from, `` + '' + teksehmazeh, `${footer}`, hehe, [{"urlButton": {"displayText": "Instagram","url": `${sc}`}}])
  }
  break
        case 'limituser':
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    m.reply(txt)       
  }
 break
 case 'leaderboard':
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Ikan* : ${i.ikan}\n`
     txt += `*🐔Ayam* : ${i.ayam}\n`
     txt += `*🐇Kelinci* : ${i.kelinci}\n`
     txt += `*🐑Domba* : ${i.domba}\n`
     txt += `*🐄Sapi* : ${i.sapi}\n`
     txt += `*🐘Gajah* : ${i.gajah}\n\n`
     }
    m.reply(txt)       
  }
 break
case 'mining': case 'menambang':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return m.reply('Kamu kelelahan!, cobalah heal menggunakan potion') 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ HASIL MENAMBANG ]\n*Besi* : ${besinya}\n*Emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Menambang Lagi  ⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './rpg/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     bbot.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  m.reply(`@${m.sender.split("@")[0]} Mulai Menambang ⛏️`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaksi
 case 'beli': case 'buy':{
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return m.reply('Mau beli apa?')
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} potion 2\n 1 potion = 100000 uang`)
 if (isMonay < noh) return m.reply('Sisa Uang kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa Uang kamu* : ${getMonay(m.sender)}\n*Potion kamu* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'umpan'){
  let noh = 5000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} umpan 2\n 1 umpan = 2500 uang`)
 if (isMonay < noh) return m.reply('Sisa Uang kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa Uang kamu* : ${getMonay(m.sender)}\n*Umpan kamu* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} limit 2\n 1 limit = 35000 uang`)
 if (isMonay < noh) return m.reply('Sisa Uang kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa Uang kamu* : ${getMonay(m.sender)}\n*Limit kamu* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { m.reply("Format salah!") }
 }
 break
 case 'sel': case 'jual':{//BY LORD RIFZA
 if (!q) return  m.reply(`Mau jual apa?\nExample : ${prefix + command} ikan 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'ikan'){
 if (isIkan < anu) return m.reply('Ikan kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} ikan 2\n 1 ikan = 1500 uang`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Uang kamu* : ${getMonay(m.sender)}\n*Sisa Ikan kamu* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ayam'){
 if (isAyam < anu) return m.reply('Ayam kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} ayam 2\n 1 ayam = 2500 uang`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Uang kamu* : ${getMonay(m.sender)}\n*Sisa Ayam kamu* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'kelinci'){
 if (isKelinci < anu) return m.reply('Kelinci kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} kelinci 2\n 1 kelinci = 3000 uang`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Uang kamu* : ${getMonay(m.sender)}\n*Sisa Kelinci kamu* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'domba'){
 if (isDomba < anu) return m.reply('Domba kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} domba 2\n 1 domba = 5000 uang`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Uang kamu* : ${getMonay(m.sender)}\n*Sisa Domba kamu* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sapi'){
 if (isSapi < anu) return m.reply('Sapi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} sapi 2\n 1 sapi = 10000 uang`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Uang kamu* : ${getMonay(m.sender)}\n*Sisa Sapi kamu* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gajah'){
 if (isGajah < anu) return m.reply('Gajah kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} gajah 2\n 1 gajah = 15000 uang`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Uang kamu* : ${getMonay(m.sender)}\n*Sisa Gajah kamu* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'besi'){
 if (isBesi < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} besi 2\n 1 besi = 15000 uang`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Uang kamu* : ${getMonay(m.sender)}\n*Sisa Besi kamu* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emas'){
 if (isEmas < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} emas 2\n 1 emas = 50000 uang`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Uang kamu* : ${getMonay(m.sender)}\n*Sisa emas kamu* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 uang`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Uang kamu* : ${getMonay(m.sender)}\n*Sisa emerald kamu* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { m.reply("Format salah!") }

 }
 break

 case 'heal':{
 	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
 if (!isCekDarah < 1) return m.reply('Kamu hanya bisa heal ketika darah kamu 0')
 if (isCekDarah > 100) return m.reply('Darah kamu sudah penuh')
 if (isPotion < 1) return m.reply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_') 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 m.reply('Berhasil, darah kamu sudah full')
 }
 break
 case 'berburu':{
 	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
 //Peringatan!!!!, ini buatan rifza. jangan claim punya lu:)
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return m.reply('Darah kamu habis, cobalah heal menggunakan potion') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Tertusuk duri saat berburu","Terpeleset ke jurang saat berburu","Tercakar hewan buas","Tidak berhati-hati","Terjerat akar","Terjatuh saat berburu"]
  let location = ["Hutan rimba","Hutan Amazon","Hutan tropis","Padang rumput","Hutan afrika","Pegunungan"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan rimba') {
    var image = './rpg/image/rimba.jpg'
   } else
 if (lokasinya === 'Hutan Amazon') {
    var image =  './rpg/image/amazon.jpg'
   } else
 if (lokasinya === 'Hutan tropis') {
    var image = './rpg/image/tropis.jpg'
   } else
 if (lokasinya === 'Padang rumput') {
    var image = './rpg/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'Hutan afrika') {
    var image = './rpg/image/afrika.jpg'
   } else
 if (lokasinya === 'Pegunungan') {
   var image = './rpg/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HASIL BURUAN ]_\n`
     teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
     teksehmazeh += `*🐔Ayam* : ${ayam}\n`
     teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
     teksehmazeh += `*🐑Domba* : ${domba}\n`
     teksehmazeh += `*🐄Sapi* : ${sapi}\n`
     teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Lokasi* : ${lokasinya}\n`
     teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
     teksehmazeh += `*Sisa darah* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Berburu Lagi 🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     bbot.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  m.reply(`@${m.sender.split("@")[0]} Mulai berburu di ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk ${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await bbot.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await bbot.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            bbot.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await bbot.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) bbot.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    bbot.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    bbot.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    bbot.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    bbot.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    bbot.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    bbot.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    bbot.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `「*FAMILY100*」\n*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `*Beberapa Jawaban Terdapat Spasi*` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await bbot.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/pnglaj4l/kebutuhanbotwa/main/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await bbot.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    bbot.sendText(m.chat, `🎮 *TEBAK LAGU* 🎮\n\n*Tebak Lagu Diatas!*\n*Waktu : 60 detik*`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    bbot.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `❗ *WAKTU HABIS* ❗\n*Jawaban:  ${tebaklagu[m.sender.split('@')[0]]}*\n\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    db.data.users[m.sender].limit -= 1
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    bbot.sendImage(m.chat, result.img, `🎮 *TEBAK GAMBAR* 🎮\n\n*Tebak Gambar Diatas!*\n*Deskripsi : ${result.deskripsi}*\n*Waktu : 60s*`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(30000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    bbot.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `❗ *WAKTU HABIS* ❗\n*Jawaban:  ${tebakgambar[m.sender.split('@')[0]]}*\n\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    db.data.users[m.sender].limit -= 1
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    bbot.sendText(m.chat, `🎮 *TEBAK KATA* 🎮\n\n*Soal : ${result.soal}*\n*Waktu : 60s*`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(30000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    bbot.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, bbot.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    db.data.users[m.sender].limit -= 1
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    bbot.sendText(m.chat, `🎮 *TEBAK KALIMAT* 🎮\n\n*Soal : ${result.soal}*\n*Waktu : 60s*`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(30000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    bbot.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `❗ *WAKTU HABIS* ❗\n*Jawaban:  ${tebakkalimat[m.sender.split('@')[0]]}*\n\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    db.data.users[m.sender].limit -= 1
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    bbot.sendText(m.chat, `🎮 *TEBAK KATA* 🎮\n\n*Soal : ${result.soal}*\n*Waktu : 60s*`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(30000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    bbot.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, bbot.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    db.data.users[m.sender].limit -= 1
                    }
                } else if (args[0] === 'caklontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    bbot.sendText(m.chat, `🎮 *CAK LONTONG* 🎮\n\n*Soal : ${result.soal}*\n*Waktu : 60s*`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(30000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    bbot.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `❗ *WAKTU HABIS* ❗\n*Jawaban:  ${caklontong[m.sender.split('@')[0]]}*\n*Deskripsi : ${caklontong_desk[m.sender.split('@')[0]]}*\n\nIngin bermain lagi? Klik tombol dibawah!`, bbot.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
		db.data.users[m.sender].limit -= 1
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                bbot.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, jawab, bbot.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang jadian 💝

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, jawab, bbot.user.name, m, {mentions: menst})
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                bbot.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(`「❗」Tunggu Sebentar...`)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await bbot.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await bbot.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await bbot.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await bbot.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await bbot.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await bbot.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await bbot.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await bbot.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await bbot.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await bbot.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await bbot.downloadAndSaveMediaMessage(quoted)
                await bbot.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await bbot.downloadAndSaveMediaMessage(quoted)
                await bbot.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                bbot.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            bbot.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: bbot.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            bbot.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: bbot.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            bbot.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: bbot.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            bbot.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${bbot.user.id}
`
bbot.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await bbot.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await bbot.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, `Mode Group`, bbot.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await bbot.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await bbot.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, `Mode Edit Info`, bbot.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, `Mode Antilink`, bbot.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${bbot.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${bbot.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, `Mute Bot`, bbot.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await bbot.groupInviteCode(m.chat)
                bbot.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await bbot.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await bbot.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                bbot.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} xfar ganteng`
                let getGroups = await bbot.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Website',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      bbot.send5ButImg(i, txt, bbot.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Instagram',
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Website',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      bbot.send5ButImg(yoi, txt, bbot.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                bbot.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await bbot.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 bbot.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await bbot.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 bbot.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    bbot.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(`「❗」Tunggu Sebentar...`)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await bbot.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await bbot.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case 'emojimix': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await bbot.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(`「❗」Tunggu Sebentar...`)
                let media = await bbot.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    bbot.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(`「❗」Tunggu Sebentar...`)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await bbot.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await bbot.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(`「❗」Tunggu Sebentar...`)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            bbot.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(`「❗」Tunggu Sebentar...`)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            bbot.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${bbot.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(`「❗」Tunggu Sebentar...`)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            bbot.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(`「❗」Tunggu Sebentar...`)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await bbot.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await bbot.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
		db.data.users[m.sender].limit -= 1 // -1 limit
  m.reply(`「❗」Tunggu Sebentar...`)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await bbot.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
                        case 'imagenobg': case 'removebg': case 'remove-bg': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
        if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
        if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
        if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
        let remobg = require('remove.bg')
        let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
        let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
        hmm = await './src/remobg-'+getRandom('')
        localFile = await bbot.downloadAndSaveMediaMessage(quoted, hmm)
        outputFile = await './src/hremo-'+getRandom('.png')
        m.reply(`「❗」Tunggu Sebentar...`)
        remobg.removeBackgroundFromImageFile({
          path: localFile,
          apiKey: apinobg,
          size: "regular",
          type: "auto",
          scale: "100%",
          outputFile 
        }).then(async result => {
        bbot.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
        await fs.unlinkSync(localFile)
        await fs.unlinkSync(outputFile)
        })
        }
        break
	    case 'yts': case 'ytsearch': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                bbot.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
			    case 'lirik':
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
          if (args.length < 1) return reply("Apa Yang Mau Di Cari? ")
          m.reply(`「❗」Tunggu Sebentar...`)
          teks = body.slice(7)
          lirikLagu(teks).then((res) => {
          lirik = (`❒「  SEARCH LIRIK  」\n└ Lirik Lagu :\n\n${res[0].result}\n`)
          m.reply(lirik)
          })
          break
		case 'brainly':
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
brainly(args.join(" ")).then(res => {
hmm = '\n❉──────────────────❉\n'
for (let Y of res.data) {
hmm += `\n\n*› Pertanyaan:* ${Y.pertanyaan}\n*› Jawaban:* ${Y.jawaban[0].text}\n\n`
}
m.reply(hmm)
console.log(res)
})
break
case 'pornhub':
case 'phubsearch':
if(!isPremium) return m.reply(global.premium)
if (!q) return m.reply('Ketik ${prefix + command} [query]\nContoh : ${prefix + command} japan') 
m.reply(`「❗」Tunggu Sebentar...`)
get = await fetchJson(`https://fafa-api.herokuapp.com/api/downloader/pornhub?query=${q}&apikey=FafaKawaii`)
teks = `_*PornHub*_ 🔞\n\n`
    for (let i of get.result.results) {
    teks += `💬 *Title* : ${i.title}\n📺 *Views* : ${i.views}\n👤 *Author* : ${i.author}\n📈 *Duration* : ${i.duration}\n🔗 *Link* : ${i.link}\n🖼️ *HD* : ${i.hd}\n💎 *Premium* : ${i.premium}\n\n`
    }
    m.reply(teks.trim()) 
    break
case 'xnxx':
case 'xnxxsearch':
if(!isPremium) return m.reply(global.premium)
if (!q) return m.reply('Ketik ${prefix + command} [query]\nContoh : ${prefix + command} japan') 
m.reply(`「❗」Tunggu Sebentar...`)
get = await fetchJson(`https://fafa-api.herokuapp.com/api/downloader/xnxx?query=${q}&apikey=FafaKawaii`)
teks = `_*XNXX*_ 🔞\n\n`
    for (let i of get.result) {
    teks += `💬 *Title* : ${i.title}\nℹ️ *Info* : ${i.info}\n🔗 *Link* : ${i.link}\n\n`
    }
    m.reply(teks.trim()) 
    break
case 'xvideos':
case 'xvideossearch':
if(!isPremium) return m.reply(global.premium)
if (!q) return m.reply('Ketik ${prefix + command} [query]\nContoh : ${prefix + command} japan') 
m.reply(`「❗」Tunggu Sebentar...`)
get = await fetchJson(`https://fafa-api.herokuapp.com/api/downloader/xvideo?query=${q}&apikey=FafaKawaii`)
teks = `_*XVIDEOS*_ 🔞\n\n`
    for (let i of get.result) {
    teks += `💬 *Title* : ${i.title}\nℹ️ *Info* : ${i.info}\n🔗 *Link* : ${i.link}\n\n`
    }
    m.reply(teks.trim()) 
    break
case 'shopee':
if(!isPremium) return m.reply(global.premium)
if (!q) return m.reply('Ketik ${prefix + command} [query]\nContoh : ${prefix + command} jaket') 
m.reply(`「❗」Tunggu Sebentar...`)
get = await fetchJson(`https://fafa-api.herokuapp.com/api/download/shoppe?q=${q}&apikey=FafaKawaii`)
teks = `_*Shopee*_ 🛍️\n\n`
    for (let i of get.result) {
    teks += `💬 *Nama* : ${i.name}\n💸 *Harga* : ${i.harga}\n🏷️ *Terjual* : ${i.terjual}\n🚩 *Lokasi* : ${i.location}\n\n*DESKRIPSI PRODUK*\n\n${i.desc}\n\n🛍️ *Stock* : ${i.stock}\nℹ️ *Info* : ${i.information}\n🔗 *URL* : ${i.url}\n\n`
    }
    m.reply(teks.trim()) 
    break
        case 'google': {
        	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: bbot.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                bbot.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
		 if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
💬 *Title* : ${anu.title}
💢 *Ext* : Search
🔢 *ID* : ${anu.videoId}
📈 *Duration* : ${anu.timestamp}
⚜ *Viewers* : ${anu.views}
📩 *Upload At* : ${anu.ago}
👤 *Author* : ${anu.author.name}
📺 *Channel* : ${anu.author.url}
🌱 *Description* : ${anu.description}
🔗 *Url* : ${anu.url}`,
                    footer: bbot.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                bbot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
		 if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('「*ERROR*」\n\nFile Melebihi Batas '+util.format(media))
                bbot.sendImage(m.chat, media.thumb, `💬 *Title* : ${media.title}\n📈 *File Size* : ${media.filesizeF}\n🔗 *Url* : ${isUrl(text)}\n💢 *Ext* : MP3\n🔰 *Resolusi* : ${args[1] || '128kbps'}`, m)
                bbot.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
            	 if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('「*ERROR*」\n\nFile Melebihi Batas '+util.format(media))
                bbot.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🌱 *Title :* ${media.title}\n📈 *File Size : *${media.filesizeF}\n🔗 *Url :* ${isUrl(text)}\n📥🕥*Ext :* MP3\n📊 *Resolusi :* ${args[1] || '360p'}` }, { quoted: m })
            }
            break
case 'soundcloud': case 'scdl': {
	 if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'No Query Title'
                m.reply(`「❗」Tunggu Sebentar...`)
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/scdl?link=${text}`)
                let msg = await bbot.sendImage(m.chat, anu.thumb, `⚜ Title : ${anu.title}\n🔗 Url : ${isUrl(text)[0]}`)
                bbot.sendMessage(m.chat, { audio: { url: anu.link }, mimetype: 'audio/mpeg', fileName: anu.title+'.m4a' }, { quoted: msg })
            }
            break
	    case 'getmusic': {
		 if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                bbot.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                bbot.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
            	 if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                bbot.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                m.reply(`「❗」Tunggu Sebentar...`)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                bbot.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
	    case 'couple': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                m.reply(`「❗」Tunggu Sebentar...`)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                bbot.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                bbot.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: bbot.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                bbot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: bbot.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                bbot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: bbot.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                bbot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'alphacoders': {
	if (!q) return m.reply(`Ketik ${prefix + command} [query]\nContoh : ${prefix + command} genshin`) 
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
m.reply(mess.wait)
            let buttons = [
                    {buttonId: `!alphacoders ${q}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `https://api.akuari.my.id/search/alphacoders?query=${q}` },
                    caption: `Alphacoders - ${q}`,
                    footer: bbot.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                bbot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'pixiv': case 'pixivdl':
if (!q) return m.reply(`Ketik ${prefix + command} [id pixiv]\nContoh : ${prefix + command} 94216857`) 
db.data.users[m.sender].limit -= 1
m.reply(`「❗」Tunggu Sebentar...`)
bbot.sendMessage(m.chat, { image: { url: `https://api.akuari.my.id/downloader/pixiv?id=${q}&ext=.jpg`}, caption: `「✅」Sukses` }, { quoted: m })
break
case 'konachan': {
if(!isPremium) return m.reply(mess.premium)
if (!q) return m.reply(`Ketik ${prefix + command} [query]\nContoh : ${prefix + command} genshin`) 
m.reply(`「❗」Tunggu Sebentar...`)
let buttons = [
                    {buttonId: `!konachan ${q}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `https://api.akuari.my.id/search/konachan?query=${q}` },
                    caption: `_Didownload Oleh BBOT_`,
                    footer: `${footer}`,
                    buttons: buttons,
                    headerType: 4
                }
                bbot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'tulis': case 'nulis':
if (!q) return m.reply(`Ketik ${prefix + command} [teks]\nContoh : ${prefix + command} bbot`) 
db.data.users[m.sender].limit -= 1
m.reply(`「❗」Tunggu Sebentar...`)
bbot.sendMessage(m.chat, { image: { url: `https://api.akuari.my.id/other/nulis?text=${q}`}, caption: `「✅」Sukses` }, { quoted: m })
break
		case 'kbbi':
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
    if (args.length < 1) return m.reply(`Kirim perintah ${command} Kata\nContoh : ${command} WhatsApp`)
m.reply(`「❗」Tunggu Sebentar...`)
const kbbi = args.join(" ")
     data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/kbbi?kata=${kbbi}&apikey=Syaa`)
    captionnya = `*KBBI*\n_Kamus Besar Bahasa Indonesia_\n\nKata : ${kbbi}\nLema : ${data.result.lema}\nArti : ${data.result.arti}`
    bbot.sendMessage(from, {caption: captionnya, image: {url: `https://kantorbahasagorontalo.kemdikbud.go.id/wp-content/uploads/2020/02/KBBI.png`}}, {quoted: m})
    break
		case 'wiki':
  case 'wikipedia':
  if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
    if (args.length < 1) return m.reply(`Kirim perintah ${command} Kata\nContoh : ${command} WhatsApp`)
m.reply(`「❗」Tunggu Sebentar...`)
     data = await fetchJson(`https://hadi-api.herokuapp.com/api/wiki?query=${q}`)
    captionnya = `*WIKIPEDIA*\n_Wikipedia.org_\n\n${data.result}`
    bbot.sendMessage(from, {caption: captionnya, image: {url: `https://telegra.ph/file/b4a72e6438af9770300eb.jpg`}}, {quoted: m})
    break
// mtk
case 'luaspersegi':
if (!q) return m.reply(`Ketik ${prefix + command} [angka]\nContoh : ${prefix + command} 12`) 
     m.reply(`「❗」Tunggu Sebentar...`)
try {
const luaspersegi = bdr.datar.luas.persegi(q, false)
const luaspersegis = bdr.datar.luas.persegi(q, true)
m.reply(`「LUAS PERSEGI」\n\n*Jawaban :* ${luaspersegi}\n*Cara Kerja :* ${luaspersegis}`) 
} catch (err) {
m.reply('Format Yang Anda Ketik Salah!') 
}
break
case 'luassegitiga':
if (!q) return m.reply(`Ketik ${prefix + command} [angka]\nContoh : ${prefix + command} 12`)
     m.reply(`「❗」Tunggu Sebentar...`)
try {
const luasseg = bdr.datar.luas.segitiga(args[0], args[1], false)
const caraluas = bdr.datar.luas.segitiga(args[0], args[1], true)
m.reply(`「LUAS SEGITIGA」*Jawaban :* ${luasseg}\n*Cara Kerja :* ${caraluas}`)
} catch (err) {
m.reply('Format Yang Anda Ketik Salah!')
}
break
case 'kelsegitiga':
if (!q) return m.reply(`Ketik ${prefix + command} [s1] [s2] [s3]\nContoh : ${prefix + command} 3 4 5`)
     m.reply(`「❗」Tunggu Sebentar...`)
try {
const kelsegitiga = bdr.datar.keliling.segitiga(args[0], args[1], args[2], false)
const carakel = bdr.datar.keliling.segitiga(args[0], args[1], args[2], true)
m.reply(`「KELILING SEGITIGA」\n\n*Jawaban :* ${kelsegitiga}\n*Cara Kerja :* ${carakel}`)
} catch (err) {
m.reply('Format Yang Anda Ketik Salah!')
}
break
case 'luaspersegi':
if (!q) return m.reply(`Ketik ${prefix + command} [angka]\n${prefix + command} 12`) 
m.reply(`「❗」Tunggu Sebentar...`)
try {
const luaspersegi = bdr.datar.luas.persegi(q, false)
const luaspersegis = bdr.datar.luas.persegi(q, true)
m.reply(`「LUAS PERSEGI」\n\n*Jawaban :* ${luaspersegi}\n*Cara Kerja :* ${luaspersegis}`) 
} catch (err) {
m.reply('Format Yang Anda Ketik Salah!') 
}
break
case 'pythagoras':
if (!q) return m.reply(`Ketik ${prefix + command} [opsi] [angka1] [angka2]\nContoh : ${prefix + command} miring 8 6`) 
m.reply(`「❗」Tunggu Sebentar...`)
try {
const pytha = bdr.rdb.pythagoras(args[0], args[1], args[2], false)
const rumuspytha = bdr.rdb.pythagoras(args[0], args[1], args[2], true)
m.reply(`「PYTHAGORAS」\n\n*Jawaban :* ${pytha}\n*Cara Kerja :* ${rumuspytha}`) 
} catch (err) {
m.reply('Format Yang Anda Ketik Salah!') 
}
break
case 'perkalian':
if (!q) return m.reply(`Ketik ${prefix + command} [angka1] [angka2]\nContoh : ${prefix + command} 5 12`) 
     m.reply(`「❗」Tunggu Sebentar...`)
try {
const perkal = bdr.rdb.perkalian(args[0], args[1])
m.reply(`「PERKALIAN」\n\n*Jawaban :* ${perkal}\n*Cara Kerja :* ${rumusperkal}`) 
} catch (err) {
m.reply('Format Yang Anda Ketik Salah!') 
}
break
case 'kelpersegi':
if (!q) return m.reply(`Ketik ${prefix + command} [angka]\nContoh : ${prefix + command} 12`) 
m.reply(`「❗」Tunggu Sebentar...`)
try {
const persegi = bdr.datar.keliling.persegi(q, false)
const caraPersegi = bdr.datar.keliling.persegi(q, true)
m.reply(`「KELILING PERSEGI」\n\n*Jawaban :* ${persegi}\n*Cara Kerja :* ${caraPersegi}`) 
} catch (err) {
m.reply('Format Yang Anda Ketik Salah!') 
}
break
case 'kuadrat':
if (!q) return m.reply(`Ketik ${prefix + command} [angka]\nContoh : ${prefix + command} 12`) 
     m.reply(`「❗」Tunggu Sebentar...`)
try {
const kuadrat = bdr.rdb.kuadrat(q)
m.reply(`「KUADRAT」\n\n*Jawaban :* ${kuadrat}`) 
} catch (err) {
m.reply('Format Yang Anda Ketik Salah!') 
}
break
case 'kubik':
if (!q) return reply(`Ketik ${prefix + command} [angka]\nContoh : ${prefix + command} 12`) 
     m.reply(`「❗」Tunggu Sebentar...`)
try {
const kubik = bdr.rdb.kubik(q)
m.reply(`「KUBIK」\n\n*Jawaban :* ${kubik}`) 
} catch (err) {
reply('Format Yang Anda Ketik Salah!') 
}
break
// anime menu
case 'nekonime':
      if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
    db.data.users[m.sender].limit -= 1    
    if (!q) return m.reply(`Ketik ${prefix + command} [judul anime]\nContoh : ${prefix + command} boruto`) 
    m.reply(`「❗」Tunggu Sebentar...`)
    get = await fetchJson(`https://api.violetics.pw/api/anime/nekonime?apikey=beta&manga=${q}`)
    teks = `_*Nekonime*_ 🌱\n\n`
    for (let i of get.result) {
    teks += `💬 *Title* : ${i.title}\n🔗 *Url* : ${i.url}\n📚 *Chapter* : ${i.chapter}\n🗓 *Released* : ${i.released}\n\n`
    }
    m.reply(teks.trim()) 
  break
  case 'komiku':
      if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
    db.data.users[m.sender].limit -= 1    
    if (!q) return m.reply(`Ketik ${prefix + command} [judul anime]\nContoh : ${prefix + command} boruto`) 
    m.reply(`「❗」Tunggu Sebentar...`)
    get = await fetchJson(`https://api.violetics.pw/api/anime/komiku?apikey=beta&manga=${q}`)
    teks = `_*Komiku*_ 🌱\n\n`
    for (let i of get.result) {
    teks += `💬 *Title* : ${i.title}\n🔗 *Url* : ${i.url}\n📚 *Chapter* : ${i.chapter}\n📝 *Description* : ${i.description}\n\n`
    }
    m.reply(teks.trim()) 
  break
  case 'anoboy':
      if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
    db.data.users[m.sender].limit -= 1    
    if (!q) return m.reply(`Ketik ${prefix + command} [judul anime]\nContoh : ${prefix + command} boruto`) 
    m.reply(`「❗」Tunggu Sebentar...`)
    get = await fetchJson(`https://api.violetics.pw/api/anime/anoboy?apikey=beta&manga=${q}`)
    teks = `_*Anoboy*_ 🌱\n\n`
    for (let i of get.result) {
    teks += `💬 *Title* : ${i.title}\n🔗 *Url* : ${i.url}\n🗓 *Show Up* : ${i.showup}\n\n`
    }
    m.reply(teks.trim()) 
  break
  case 'anibatch':
      if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
    db.data.users[m.sender].limit -= 1    
    if (!q) return m.reply(`Ketik ${prefix + command} [judul anime]\nContoh : ${prefix + command} boruto`) 
    m.reply(`「❗」Tunggu Sebentar...`)
    get = await fetchJson(`https://api.violetics.pw/api/anime/anibatch?apikey=beta&manga=${q}`)
    teks = `_*Anibatch*_ 🌱\n\n`
    for (let i of get.result) {
    teks += `💬 *Title* : ${i.title}\n🔗 *Url* : ${i.url}\n✨ *Rate* : ${i.rate}\n\n`
    }
    m.reply(teks.trim()) 
  break
  case 'kiryu':
      if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
    db.data.users[m.sender].limit -= 1    
    if (!q) return m.reply(`Ketik ${prefix + command} [judul anime]\nContoh : ${prefix + command} boruto`) 
    m.reply(`「❗」Tunggu Sebentar...`)
    get = await fetchJson(`https://api.violetics.pw/api/anime/kiryu?apikey=beta&manga=${q}`)
    teks = `_*Kiryu*_ 🌱\n\n`
    for (let i of get.result) {
    teks += `💬 *Title* : ${i.title}\n🔗 *Url* : ${i.url}\n📚 *Chapter* : ${i.chapter}\n✨ *Rate* : ${i.rate}\n\n`
    }
    m.reply(teks.trim()) 
  break
  case 'samehadaku':
      if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
    db.data.users[m.sender].limit -= 1    
    if (!q) return m.reply(`Ketik ${prefix + command} [judul anime]\nContoh : ${prefix + command} boruto`) 
    m.reply(`「❗」Tunggu Sebentar...`)
    get = await fetchJson(`https://api.violetics.pw/api/anime/samehadaku?apikey=beta&manga=${q}`)
    teks = `_*Samehadaku*_ 🌱\n\n`
    for (let i of get.result) {
    teks += `💬 *Title* : ${i.title}\n🔗 *Url* : ${i.url}\n〽 *Status* : ${i.status}\n✨ *Rate* : ${i.rate}\n⚜ *Description* : ${i.description}\n\n`
    }
    m.reply(teks.trim()) 
  break
  case 'otakudesu':
      if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
    db.data.users[m.sender].limit -= 1    
    if (!q) return m.reply(`Ketik ${prefix + command} [judul anime]\nContoh : ${prefix + command} boruto`) 
    m.reply(`「❗」Tunggu Sebentar...`)
    i = await fetchJson(`https://hardianto.xyz/api/anime/otakudesu?title=${q}&apikey=hardianto`)
    teks = `_*Otakudesu*_ 🌱\n\n💬 *Title* : ${i.judul}\n🔰 *Title Jepang* : ${i.jepang}\n💢 *Genre* : ${i.genre}\n🎨 *Produser* : ${i.produser}\n🌱 *Status* : ${i.status}\n📺 *Episode* : ${i.episode}\n📈 Durasi : ${i.durasi}\n🐣 *Rilis* : ${i.rilis}\n🎙 *Studio* : ${i.studio}\n✨ *Rate* : ${i.rate}\n⚜ *Description* : ${i.desc}\n\n📩 *DOWNLOAD*\n⚜ *Batch* : ${i.batch}\n⚜ *Batch SD* ${i.batchSD}\n⚜ *Batch HD* : ${i.batchHD}`
    m.reply(teks) 
  break
case 'pixivsearch':
      if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
    db.data.users[m.sender].limit -= 1    
    if (!q) return m.reply(`Ketik ${prefix + command} [judul anime]\nContoh : ${prefix + command} boruto`) 
    m.reply(`「❗」Tunggu Sebentar...`)
    i = await fetchJson(`https://api.akuari.my.id/search/pixiv?query=${q}`)
    teks = `_*Pixiv*_ 🌱\n\n💬 *Title* : ${i.result.title}\n👤 *Author* : ${i.result.author}\n✅ *ID* : ${i.result.pid}\n🎨 *Width* : ${i.result.width}\n🎨 *Height* : ${i.result.height}\n🌱 *Tags* : ${i.result.tags}\n🔗 *URL :* ${i.result.urls}\n\n`
    m.reply(teks) 
  break
case 'webtonsearch': case 'webtoon':
  if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
    db.data.users[m.sender].limit -= 1    
if (!q) return m.reply(`Kirim perintah ${prefix + command} [query]\nContoh : ${prefix + command} marry my husband`)
m.reply(`「❗」Tunggu Sebentar...`)
xfar.Webtoons(q).then(async data => {
let txt = `*------「 WEBTOONS 」------*\n\n`
for (let i of data) {
txt += `*🛡 Title :* ${i.judul}\n`
txt += `*👍🏻 Like :* ${i.like}\n`
txt += `*👤 Creator :* ${i.creator}\n`
txt += `*🎥 Genre :* ${i.genre}\n`
txt += `*📃Url :* ${i.url}\n -----------------------------------------------------\n`
}
await m.reply(txt)
})
.catch((err) => {
m.reply(lang.err())
})
break
case 'drakor':
                if (!text) return m.reply('Yang mau di cari apa?')
                await m.reply(mess.wait)
                xfar.Drakor(`${text}`).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📆 Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
            break
case 'playstore': case 'apk':
  if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
    db.data.users[m.sender].limit -= 1    
m.reply(`「❗」Tunggu Sebentar...`)
let play = await hx.playstore(q)
let storee = '❉─────────────────────❉\n'
for (let i of play){
storee += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
}
m.reply(storee)
break
case 'manga':
                if (!text) return m.reply('Yang mau di cari apa?')
                await m.reply(mess.wait)
                xfar.Manga(`${text}`).then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Title :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Instagram",
						"url": `${sc}`
						}
					}
				]
				await chika.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
            break
case 'mediafire':
if (args.length < 1) return m.reply(`Kirim perintah ${prefix + command} [link]\nContoh : ${prefix + command}  https://www.mediafire.com/file/rniewk7i0zlwoye/bbot.txt/file`)
     m.reply(`「❗」Tunggu Sebentar...`)
const teks1 = args.join(' ')
const baby1 = await mediafireDl(teks1)
const result4 = `*DATA DITEMUKAN*				
🔖Judul : ${baby1[0].nama}
🔖 Link : ${baby1[0].link}
🔖 Size : ${baby1[0].size}				
_Mengirim file..._`
m.reply(result4)
bbot.sendMessage(from, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }) 
break
// anime photo
case 'waifu': case 'loli':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
					m.reply(`「❗」Tunggu Sebentar...`)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					bbot.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
m.reply(`「❗」Tunggu Sebentar...`)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						bbot.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
case 'blowjob':
case 'ahegao':
case 'ass':
case 'bdsm':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'jahy':
case 'mastubation':
case 'neko':
case 'orgy':
case 'panties':
case 'pussy':
case 'neko2': {
if(!isPremium) return m.reply(mess.premium)
m.reply(`「❗」Tunggu Sebentar...`)
let buttons = [
                    {buttonId: `!${command}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `https://fafa-api.herokuapp.com/api/nsfw/${command}?apikey=FafaKawaii` },
                    caption: `${command}`,
                    footer: bbot.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                bbot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break

            case 'quotesanime': case 'quoteanime': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                bbot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        
case 'smeme': case 'stickermeme': case 'stickmeme': {
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
let { TelegraPh } = require('./lib/uploader')
if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
m.reply(`「❗」Tunggu Sebentar...`)
mee = await bbot.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await bbot.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'wasted':
case 'fisheye':
case 'invert':
case 'pixelate':
case 'roundimage': {
let { TelegraPh } = require('./lib/uploader')
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto`)
m.reply(`「❗」Tunggu Sebentar...`)
mee = await bbot.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.lolhuman.xyz/api/editor/${command}?apikey=sanzychan01&img=${mem}`
memek = await bbot.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'xpro2': {
let { TelegraPh } = require('./lib/uploader')
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto`)
m.reply(`「❗」Tunggu Sebentar...`)
mee = await bbot.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.lolhuman.xyz/api/filter/${command}?apikey=sanzychan01&img=${mem}`
memek = await bbot.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'jail':
case 'rainbow':
case 'rip': 
case 'sepia': {
let { TelegraPh } = require('./lib/uploader')
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto`)
m.reply(`「❗」Tunggu Sebentar...`)
mee = await bbot.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.lolhuman.xyz/api/creator1/${command}?apikey=sanzychan01&img=${mem}`
memek = await bbot.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'spacksearch':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
if (args.length < 1) return m.reply(`Kirim perintah ${prefix + command} Teks\nContoh : ${prefix + command} pentol`)
stick = await fetchJson(`https://api.akuari.my.id/search/sticker?query=${body.slice(13)}`)
hmm = '*STICKER PACK SEARCH*\n'
for (let Y of stick.result) {
hmm += `\n\n*› Judul :* ${Y.title}\n*› Link :* ${Y.url}\n\n`
}
m.reply(hmm)
break
case 'happymod':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
if (args.length < 1) return m.reply(`Kirim perintah ${prefix + command} Teks\nContoh : ${prefix + command} minecraft`)
mod = await fetchJson(`https://api.akuari.my.id/search/happymod?query=${body.slice(10)}`)
hmm = '*HAPPYMOD SEARCH*\n'
for (let Y of mod.result) {
hmm += `\n\n*› Judul :* ${Y.title}\n*› Link :* ${Y.link}\n*› Icon :* ${Y.icon}\n\n`
}
m.reply(hmm)
break
case 'rexdl':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
if (args.length < 1) return m.reply(`Kirim perintah ${prefix + command} Teks\nContoh : ${prefix + command} minecraft`)
mod = await fetchJson(`https://fafa-api.herokuapp.com/api/download/apk?query=${body.slice(7)}&apikey=FafaKawaii`)
hmm = '*REXDL SEARCH*\n'
for (let Y of mod.result) {
hmm += `\n\n*› Judul :* ${Y.name}\n*› URL :* ${Y.url}\n\n`
}
m.reply(hmm)
break
case 'gcwasearch':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
if (args.length < 1) return m.reply(`Kirim perintah ${prefix + command} Teks\nContoh : ${prefix + command} random`)
gc = await fetchJson(`https://api.akuari.my.id/search/carigc?query=${body.slice(12)}`)
hmm = '*GROUP CHAT WHATSAPP SEARCH*\n'
for (let Y of gc.result) {
hmm += `\n\n*› Nama Group :* ${Y.nama}\n*› Link :* ${Y.link}\n\n`
}
m.reply(hmm)
break
case 'sfilesearch':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
if (args.length < 1) return m.reply(`Kirim perintah ${prefix + command} Teks\nContoh : ${prefix + command} bot wa`)
sfile = await fetchJson(`https://api.akuari.my.id/search/sfilesearch?query=${body.slice(13)}`)
hmm = '*SFILE SEARCH*\n'
for (let Y of sfile.result) {
hmm += `\n\n*› Nama :* ${Y.nama}\n*› Ukuran :* ${Y.size}\n*› Link :* ${Y.link}\n\n`
}
m.reply(hmm)
break
case 'quotes':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
if (args.length < 1) return m.reply(`Kirim perintah ${prefix + command} Teks\nContoh : ${prefix + command} kehidupan`)
quotes = await fetchJson(`https://api.akuari.my.id/search/quotes?query=${body.slice(7)}`)
hmm = '*QUOTES*\n'
for (let Y of quotes.result.data) {
hmm += `\n\n_${Y.quote}_\n\n- ${Y.author}\n_${Y.bio}_`
}
m.reply(hmm)
break
case 'chordgitar':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
if (args.length < 1) return m.reply(`Kirim perintah ${prefix + command} Teks\nContoh : ${prefix + command} easy on me`)
chord = await fetchJson(`https://api.akuari.my.id/search/chord?judul=${body.slice(12)}`)
m.reply(chord.respon.result)
break
	    case 'nomerhoki': case 'nomorhoki': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} B-BOT, 8, 4, 2022, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} B-BOT, 8, 4, 2022, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} B-BOT, 8, 4, 2022, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} B-BOT, 8, 4, 2022, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} B-BOT Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} B-BOT, 8, 4, 2022`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} B-BOT|B-BOT`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} B-BOT, 1, 2022\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} B-BOT, 8, 4, 2022, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} 8, 4, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} B-BOT, 8, 4, 2022`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} B-BOT, 8, 4, 2022`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix+ command} 7 7 2022`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                bbot.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
	        case 'ig':
	case 'instagram':
case 'igdl': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
if (!q) m.reply(`Kirim perintah ${prefix + command} [link]`)
      m.reply(`「❗」Tunggu Sebentar...`) 
    try{
    let anu = await igDownloader(`${q}`)
     .then((data) => { 
      let linck = data.result.link
      let desksz = data.result.desc
     if (linck.includes("mp4")){
       bbot.sendMessage(from, { video: { url : linck }, caption: desksz}, { quoted: m } )
      } else 
     if (linck.includes("jpg")){
       bbot.sendMessage(from, { image: { url : linck }, caption: desksz}, { quoted: m } )
     }
     console.log(data)
    }
    )
   } catch { reply('err') }
  }
  break
case 'likee': 
case 'likeedl':{
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
if (!q) m.reply(`Kirim perintah ${prefix + command} [link]`)
m.reply(`「❗」Tunggu Sebentar...`)
likee = await fetchJson(`https://api.akuari.my.id/downloader/likeedl?link=${q}`)
  bbot.sendMessage(m.chat, {
 video: { url: likee.medias.url },
 caption: `💬 *Judul :* ${likee.title}\n📊 *Durasi :* ${likee.duration}\n✨ *Kualitas :* ${likee.medias.quality}\n\n_Didownload Oleh B-BOT_`,
 buttons: [{buttonId: `${prefix}donasi`, buttonText: { displayText: "Donasi" }, type: 1 }
 footer: `${footer}`
  }, { quoted: m })
})
}
break
case 'tiktok': 
case 'tiktokvid':{
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
if (!q) m.reply(`Kirim perintah ${prefix + command} link`)
m.reply(`「❗」Tunggu Sebentar...`)
xfar.Tiktok(q).then( data => {
  bbot.sendMessage(m.chat, {
 video: { url: data.medias[0].url },
 caption: `${data.title}\n\n_Didownload Oleh B-BOT_`,
 buttons: [{buttonId: `${prefix}tiktoknowm ${args[0]} ${m.sender}`, buttonText: { displayText: "No Watermark" }, type: 1 },{buttonId: `${prefix}tiktokaudio ${args[0]} ${m.sender}`, buttonText: { displayText: "Audio" }, type: 1 },{buttonId: `${prefix}donasi`, buttonText: { displayText: "Donasi" }, type: 1 }],
 footer: `${footer}`
  }, { quoted: m })
})
}
break
case 'tiktoknowm':
if (!q) m.reply(`Kirim perintah ${command} link`)
if (!isUrl(q)) m.reply('no ingpo')
if (q.includes('tiktok'))
m.reply(`「❗」Tunggu Sebentar...`)
hx.ttdownloader(q).then( data => {
  bbot.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
})
break
case 'ttaudio':
case 'tiktokaudio':
if (!q) m.reply(`Kirim perintah ${command} link`)
m.reply(`「❗」Tunggu Sebentar...`)
hx.ttdownloader(q).then( data => {
  bbot.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
	break
case 'twtdl': case 'twt': case 'twitterdl': case 'twitter':
if (q) m.reply(`Kirim perintah ${command} link`)
await m.reply(`「❗」Tunggu Sebentar...`)
xfar.Twitter(q).then(async data => {
let txt = ('p')
bbot.sendMessage(m.chat,{ video: { url: data.medias[1].url}},txt,m)})
break
case 'facebook': case 'fb': case 'fbdl': case 'facebookdl':
if (q) m.reply(`Kirim perintah ${command} link`)
await m.reply(`「❗」Tunggu Sebentar...`)
xfar.Facebook(q).then(async data => {
let txt = `*FACEBOOK DOWNLOADER*\n\n`
txt += `*Title :* ${data.title}\n`
txt += `* Type :* ${data.medias[0].extension}\n`
txt += `*Quality :* ${data.medias[0].quality}\n`
txt += `*Size :* ${data.medias[0].formattedSize}\n`
txt += `*Url :* ${data.url}`
bbot.sendFile(m.chat,data.medias[0].url,txt,msg)
})
break
            case 'umma': case 'ummadl': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib/scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: bbot.user.name,
			buttons,
			headerType: 4
		    }
		    bbot.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        bbot.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
        	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		bbot.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('「*ERROR*」\n\nMaaf, limit harian anda telah habis! Limit akan dereset pada pukul 00.00\nMau unlimited limit? ketik ${prefix}unlimited')
db.data.users[m.sender].limit -= 1
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(`「❗」Tunggu Sebentar...`)
                let media = await bbot.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                bbot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                bbot.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                bbot.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                bbot.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await bbot.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, bbot.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await bbot.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, bbot.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await bbot.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, bbot.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await bbot.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, bbot.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, bbot.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await bbot.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await bbot.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, bbot.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await bbot.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, bbot.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await bbot.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, bbot.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                bbot.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                bbot.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
           case 'owner': case 'creator': {
                bbot.sendContact(m.chat, global.owner, m)
            }
            break
default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    bbot.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
