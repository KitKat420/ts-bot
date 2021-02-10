"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var client = new discord_js_1.Client();
client.on('ready', function () {
    var _a;
    console.log("Logged in as " + ((_a = client.user) === null || _a === void 0 ? void 0 : _a.tag));
});
client.on('message', function (msg) {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});
client.login("ODA4ODg3NjkxOTU3NTAxOTYy.YCNFXg.N9ySRyD2XXQ9KIj5FLsaDF49BJ4");
