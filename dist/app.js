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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tweet = void 0;
var axios_1 = __importDefault(require("axios"));
var dotenv = __importStar(require("dotenv"));
dotenv.config({ path: __dirname + '/.env' });
var url = 'https://api.twitter.com';
var instance = axios_1.default.create({
    baseURL: url,
    headers: { 'Authorization': "Bearer " + process.env.BEARER_TOKEN }
});
var tweet = instance.get('/2/users/44196397/tweets')
    .then(function (response) {
    var twitterData = response.data;
    exports.tweet = tweet = twitterData.data[0].text;
    console.log(twitterData.data[0].text);
})
    .catch(function (error) {
    console.log(error);
});
exports.tweet = tweet;
