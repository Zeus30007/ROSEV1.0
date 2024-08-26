//base by DGXeon

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: Kitsub.arts" //ur yt chanel name
global.socialm = "GitHub: Luxxy4 and Zeus30007" //ur github or insta name
global.location = "Japan,Tokyo" //ur location

//new
global.botname = '⨺⃝𝚁𝙾𝚂𝙴♱' //ur bot name
global.ownernumber = ['918618971837'] //ur owner number, dont add more than one
global.ownername = '𝕹𝖆𝖙𝖍𝖆𝖓♱' //ur owner name
global.websitex = "https://youtu.be/tLq8_qOOGFI"
global.wagc = "https://whatsapp.com/channel/0029VagLBl4DeOMyzdqe690U"
global.themeemoji = '🌹'
global.wm = "𝙻𝚄𝚇𝙸4𝙺𝙸𝚃𝚂𝚄 Inc."
global.botscript = 'https://github.com/Zeus30007/RoseV1.0' //script link
global.packname = "╶⃝𝙼𝚒𝚛𝚊𝚗 𝚏𝚘𝚡𓃥|"
global.author = "╶⃝𝕹𝖆𝖙𝖍𝖆𝖓♱"
global.creator = "48699514053@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["918618971837"] // Premium User

//channel id
global.xchannel = {
	jid: 'https://whatsapp.com/channel/0029VagLBl4DeOMyzdqe690U'
	}

//bot sett
global.typemenu = 'v1' // menu type 'v1' => 'v12'
global.typereply = 'v1' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});