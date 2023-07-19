
const Profile = require('../models/profileSchema')

const get_All_Profiles = (req, res) => {
  Profile.find()
    .then(result => {
      res.render('index', { result: result.reverse() })
    })
}

const post_a_Profile = (req, res) => {
  const profile = new Profile(req.body)
  profile.save()
    .then(result => {
      res.redirect('/profiles')
    })
    .catch(err => console.log(err))
}

const render_create_page = (req, res) => {
  res.render('create')
}

const find_Profile = (req, res) => {
  const id = req.params.id
  Profile.findById(id)
    .then(result => res.render('details', { result }))
  console.log(id)
}

const delete_Profile = (req, res) => {
  const id = req.params.id
  Profile.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/profiles' })
    })
    .catch(err => console.log(err))
}

module.exports = {
  get_All_Profiles,
  post_a_Profile,
  render_create_page,
  find_Profile,
  delete_Profile
}