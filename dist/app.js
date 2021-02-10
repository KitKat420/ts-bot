"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var Token;
(function (Token) {
    Token["BEAR_TOKEN"] = "AAAAAAAAAAAAAAAAAAAAALR5MgEAAAAA9JRi4lVUlnP2th4OJPP3aDcoaak%3Dx3iaVtA96nYnuX5KSh80uYVsUxel8PoQUp3HPfFJ9oQ2zg1hW1";
})(Token || (Token = {}));
;
var url = 'https://api.twitter.com';
// axios.defaults.baseURL = url;
// axios.defaults.headers.common['Authorization'] = Token.BEAR_TOKEN;
var instance = axios_1.default.create({
    baseURL: url,
    headers: { 'Authorization': "Bearer " + Token.BEAR_TOKEN }
});
instance.get('/2/users/44196397/tweets')
    .then(function (response) {
    console.log(response.data);
})
    .catch(function (error) {
    console.log(error);
});
