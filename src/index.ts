require("dotenv").config();

import Discord from "discord.js";
import handleCom from "./handleCom";

const bot = new Discord.Client();

const token = process.env.BOT_TOKEN;

bot.on("ready", () => {
  console.log("Job's Ready");
});

bot.on("message", (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content.startsWith("$")) {
    handleCom(message);
  }
});

bot.login(token);
