require('dotenv').config();

import Discord from "discord.js"
const bot = new Discord.Client();

const token = process.env.BOT_TOKEN;

bot.on("ready", () => { 
    console.log("bot jalan")
})

bot.login(token);