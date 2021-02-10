import axios from 'axios';

enum Token {
    BEAR_TOKEN = "AAAAAAAAAAAAAAAAAAAAALR5MgEAAAAA9JRi4lVUlnP2th4OJPP3aDcoaak%3Dx3iaVtA96nYnuX5KSh80uYVsUxel8PoQUp3HPfFJ9oQ2zg1hW1"
};

const url = 'https://api.twitter.com';

// axios.defaults.baseURL = url;
// axios.defaults.headers.common['Authorization'] = Token.BEAR_TOKEN;

const instance = axios.create({
    baseURL: url,
    headers: {'Authorization': `Bearer ${Token.BEAR_TOKEN}`}

})

instance.get('/2/users/44196397/tweets')
.then((response) => {
    console.log(response.data);
})
.catch((error) => {
    console.log(error)
});