const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 1337  // Obs! Fungerar bara lokalt!

// Middleware - TODO
app.use(cors());
// Exempel: static folders, logger
app.use( express.static(__dirname + '/../build') )

// Endpoints
// app.use om vi har en separat router-fil
/* app.get('/', (req, res) => {
	console.log('Server received GET request /');
	res.status(200).send('Server is online')
}) */
const animalsData = ['Hund', 'Katt', 'Grävling', 'Orm', 'Älg']
app.get('/animals', (req, res) => {
	res.send(animalsData)
})

//behövs om man använder react router
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/build/index.html')
})

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}.`);
})