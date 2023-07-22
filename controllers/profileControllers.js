
const Profile = require('../models/profileSchema')

const get_All_Profiles = (req, res) => {
  Profile.find()
    .then(result => {
      res.render('index', { result: result.reverse() })
    })
}

const post_a_Profile = (req, res) => {
  const obj = { ...req.body, isLiked: false }
  const profile = new Profile(obj)
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

}

const delete_Profile = (req, res) => {
  const id = req.params.id
  Profile.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/profiles' })
    })
    .catch(err => console.log(err))
}

const update_Profile = (req, res) => {
  let isLiked = null
  const id = req.params.id
  Profile.findById(id)
    .then(result => {
      isLiked = result.isLiked
    })
    .then(function () {
      Profile.updateOne({ _id: id }, { isLiked: !isLiked })
        .then(result => console.log(result))
    })
}

const get_edit_page = (req, res) => {
  res.render('edit')
}

module.exports = {
  get_All_Profiles,
  post_a_Profile,
  render_create_page,
  find_Profile,
  delete_Profile,
  update_Profile,
  get_edit_page
}