const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

const Profile = mongoose.model('profile', profileSchema)

module.exports = Profile