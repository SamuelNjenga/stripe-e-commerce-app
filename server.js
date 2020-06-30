require('dotenv/config');
const key1 = process.env.STRIPE_SECRET_KEY
const key2 = process.env.STRIPE_PUBLIC_KEY
console.log(key1)
console.log(key2)
const express = require('express');
const app = express();
const fs = require('fs');
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/store', function (req, res) {
    fs.readFile('items.json', function (error, data) {
        if (error) {
            res.status(500).end()
        } else {
            res.render('store.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.listen(3000);