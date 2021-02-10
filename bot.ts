import { Client, DiscordAPIError } from 'discord.js';

const client = new Client();

client.on('ready', () => {
    console.log("Logged in as " + client.user?.tag);
});

client.on('message', (msg) => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});
client.login("ODA4ODg3NjkxOTU3NTAxOTYy.YCNFXg.N9ySRyD2XXQ9KIj5FLsaDF49BJ4");