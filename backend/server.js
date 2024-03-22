const express = require('express');
const cors = require('cors');

const app = express();
const stripe = require('stripe')('pk_test_51OqfYeDvSYddFJCDEAJJwjLZAkUUYeKLQnSdhjFgYy9Kx9O9wHZC2F9INktcq1AleTOZgrM3Kx0PLtlZXvcuNv2N00Q4mevZrS')


app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.post('/', async (req, res) => {
  const session = await stripe.checkout.session.create({
    line_item: [Items],
    mode: 'payment',
    // success_url:
    // cancel_url:
  })
});

app.listen(5000, () => console.log('app is listening on port 5000.'))