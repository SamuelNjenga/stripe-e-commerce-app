require('dotenv/config');
const key1 = process.env.STRIPE_SECRET_KEY
const key2 = process.env.STRIPE_PUBLIC_KEY
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
                stripePublicKey: key2,
                items: JSON.parse(data)
            })
        }
    })
})

app.listen(3000);