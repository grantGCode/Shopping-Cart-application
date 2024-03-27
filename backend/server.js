const express = require('express');
const cors = require('cors');

const app = express();
const stripe = require('stripe')(process.env.STRIPE_API_KEY)

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})


app.post('/', async (req, res) => {
  try{
    const lineItem = req.body
    console.log(lineItem)
    const session = await stripe.checkout.sessions.create({
      line_item: lineItem,
      mode: 'payment',
      success_url: 'http://localhost:3000/Success.jsx',
      cancel_url:  'http://localhost:3000/Cancel.jsx',
    })
    res.send(JSON(session.url))
  }catch (e) {
    res.status(500).json({error: e.message})
    console.log(e.message)
  }
});

app.listen(5000, () => console.log('app is listening on port 5000.'))