import discord from "discord.js";
export default function handleCom(message: discord.Message) {
  message.channel.send(message.content.substring(1));
  console.log(message.content);
}
