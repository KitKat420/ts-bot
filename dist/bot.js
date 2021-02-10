"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var dotenv = __importStar(require("dotenv"));
dotenv.config({ path: __dirname + '/.env' });
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
client.login(process.env.BOT_TOKEN);
