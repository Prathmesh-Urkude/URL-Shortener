import express from 'express';

import {handleUserSignup, handleUserLogin, handleGetUserProfile} from '../controllers/userController.js';

const router = express.Router();

router.route('/login')
.get((req, res) => {
    res.render("login");
})
.post(handleUserLogin);

router.route('/signup')
.get((req, res) => {
    res.render("signup");
})
.post(handleUserSignup);

router.get('/profile', handleGetUserProfile);

export default router;