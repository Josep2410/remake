const express = require('express')
const router = express.Router()
const Profile = require('../models/profileSchema')
const profilePaths = require('../controllers/profileControllers')

router.get('/profiles', profilePaths.get_All_Profiles)

router.post('/profiles', profilePaths.post_a_Profile)

router.get('/profiles/create', profilePaths.render_create_page)


router.get('/profiles/:id', profilePaths.find_Profile)

router.delete('/profiles/:id', profilePaths.delete_Profile)

module.exports = router