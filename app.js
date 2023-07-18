const express = require('express')
const mongoose = require('mongoose')
const Profile = require('./models/profileSchema')

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


app.get('/profiles/', (req, res) => {
  res.render('index')
})

app.post('/profiles', (req, res) => {
  const profile = new Profile(req.body)
  profile.save()
    .then(result => {
      res.render('index', { result })
    })
    .catch(err => console.log(err))

})

app.get('/profiles/create', (req, res) => {
  res.render('create')
})



