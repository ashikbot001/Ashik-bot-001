const fs = require("fs");
module.exports = {
  config:{
	name: "Joy21",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf("💔")==0 || body.indexOf("😷")==0) {
		var msg = {
				body: "চেয়েছিলাম সবসময় ভালোবাস্তে কিন্তু\n বিরক্তির কারণ হয়ে যাবো কখন ভাবিনি🙃😅\n\nBOSS~ASHIK",
				attachment: fs.createReadStream(__dirname + `/Joy/joyefa1.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
