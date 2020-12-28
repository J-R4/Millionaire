import discord from "discord.js";

export default function handleCom(message: discord.Message) {
  //   message.channel.send(message.content.substring(1));
  //   console.log(message.content);
  const [command, ...rest] = message.content.split(" ");

  switch (command.substring(1).toLowerCase()) {
    case "start":
      message.channel.send("Start");
      break;
    case "a":
      message.channel.send("Answer");
      break;
    case "status":
      message.channel.send("Status");
      break;
    case "call-friend":
      message.channel.send("Call Friend");
      break;
    case "50-50":
      message.channel.send("50-50");
      break;
    case "change":
      message.channel.send("Change");
      break;
    case "desperate":
      message.channel.send("Desperate");
      break;
    case "new-question":
      message.channel.send("New Question");
      break;
    case "help":
      message.channel.send("Help");
      break;
    default:
      message.channel.send("Unkown Command");
      break;
  }
}
