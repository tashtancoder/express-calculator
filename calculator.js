const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)
    res.send(`${num1} + ${num2} = ` + (num1 + num2))
})

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmicalculator.html')
})

app.post('/bmicalculator', (req, res) => {
    const weight = parseFloat(req.body.weight)
    const height = parseFloat(req.body.height)
    const bmi = weight / (height * height)
    res.send(`BMI of weight ${weight}, height ${height} = ${bmi}`)
})

app.get('/test', (req, res) => {
    res.send('Calculator Test')
})

app.listen(3000, () => {
    console.log('Calculator App is running on port 3000')
})