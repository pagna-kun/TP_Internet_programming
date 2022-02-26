const express = require('express')
const path = require('path')
const { readFile } = require('fs')

const app = express()

//declare the path for asset
app.use(express.static(__dirname + '/src'))
//set route and read file
app.get('/', function (req, res) { 
    readFile('./src/index.html', 'utf8', (err, result) => {
        if(err){
            res.status(500).send("Error")
        }
        res.send(result)
    })
})
app.get('/detail', (err, res) => {
    // readFile('')
})

app.listen(3000, () => {
    console.log("App is available on http://localhost:3000")
})