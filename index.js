const express= require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('x-server-date', new Date());
    return next;
})

app.get('/', (req, res, next) => {
    return res.send('Hello, I am webserver');
});

app.get('/time', (req, res, next) => {
    return res.send(new Date().toString());
});

app.get('/hello', (req, res, next) => {
    if(!req.query.name) {
        return res.status(400).end();
    }
    return res.send(`Hello ${req.query.name}`);
});

//UseProfile
app.get('/user/:name', (req, res, next) => {
    return res.send(`Userprofile of ${req.params.name}`);
});

app.listen(3000);