const express = require('express')
const app = express();
const port = process.env.PORT || 5000;


// default message
app.get('/', (req, res) => {
  res.send('Chef Recipe Server is really running well')
});

// listen the response
app.listen(port, () => {
  console.log(`Chef API is running on port:',  ${port}`)
})