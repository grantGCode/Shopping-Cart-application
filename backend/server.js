const express = require('express')

const app = express();
// const port = process.env.PORT;
const stripe = require('stripe')('pk_test_51OqfYeDvSYddFJCDEAJJwjLZAkUUYeKLQnSdhjFgYy9Kx9O9wHZC2F9INktcq1AleTOZgrM3Kx0PLtlZXvcuNv2N00Q4mevZrS')


// app.use(cors());
// app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.post('/', (req, res) => {
  res.send(req.body);
});

app.listen(5000, () => console.log('Example app is listening on port 5000.'))