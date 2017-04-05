const express = require('express')
const app = express();
const port = 8181 || process.env.PORT
const fs = require('fs')

let datafile = {}

app.use(function(req,res,next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next();
})


fs.readFile('./data.json', 'utf-8', (err, data) => {
  if (err) throw err;
	datafile = JSON.parse(data)
	return datafile
});

app.get('/tips', (req,res) => {
	res.send({
	'tips': datafile
	})
})

app.listen(port)
console.log(`Server listening on port ${port}`)
