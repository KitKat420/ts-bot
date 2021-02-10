import { Client, DiscordAPIError } from 'discord.js';
import * as dotenv from "dotenv";
import { tweet } from './app';
dotenv.config({ path: __dirname+'/.env' });

const client = new Client();

client.on('ready', () => {
    console.log("Logged in as " + client.user?.tag);
});

client.on('message', (message) => {
    if (message.content === 'ping') {
        message.reply(`${tweet}`);
    }
});


client.login(process.env.BOT_TOKEN);