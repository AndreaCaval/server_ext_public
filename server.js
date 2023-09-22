const fs = require('fs');
const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/analytics', (req, res) => {
    const f1 = fs.readFileSync('analytics.json');
    const analytics = JSON.parse(f1);
    console.log('analytics');
    res.json(analytics)
})

app.get('/release-calendar', (req, res) => {
    const f2 = fs.readFileSync('../release-calendar.json');
    let release_calendar = JSON.parse(f2);
    release_calendar.sort((a, b) => a.drop_date.localeCompare(b.drop_date))
    console.log('release-calendar');
    res.json(release_calendar)
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})