const express = require('express');
const cors = require('cors');

const app = express();
const stripe = require('stripe')(process.env.STRIPE_API_KEY)

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