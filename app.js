const express = require('express')
const mongoose = require('mongoose')
const profileRoutes = require('./routes/profileRoutes')

const app = express()
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

const dbURI = 'mongodb+srv://palaspas2410:Archimedes*2410@cluster0.heybg9d.mongodb.net/JAMtogether?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    app.listen(3000, 'localhost', () => {
      console.log('Connected')
    })
  })
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.redirect('/profiles')
})

app.get('/mylikes', (req, res) => {
  res.render('mylikes')
})


app.use(profileRoutes)


