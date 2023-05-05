const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

// cors to connect server side, and the client side
var cors = require('cors')
app.use(cors())

// get all chefs' data
const allChefs = require('./data/chefRecipe.json')

// send all chefs data upon user's request
app.get('/allChefs', (req, res) => {
  res.send(allChefs)
});

// send chef details based on id
app.get('/allChefs/:id', (req, res) => {
  // extract the id 
  const id = req.params.id;
  // find the specified chef based on id
  const specificChef = allChefs.find(c => c.id == id);
  res.send(specificChef);
});

// default message
app.get('/', (req, res) => {
  res.send('Chef Recipe Server is really running well')
});

// listen the response
app.listen(port, () => {
  console.log(`Chef API is running on port:',  ${port}`)
})