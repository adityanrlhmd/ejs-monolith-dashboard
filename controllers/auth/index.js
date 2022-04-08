const User = require('../../models/users')
const bycypt = require('bcrypt')

const locals = {
  title: 'Logins',
  error: false
}

module.exports = {
  // SHOW LOGIN FORM
  login: (req, res) => {
    res.render('login', locals)
  },
  // LOGIN FUNCTION
  login_store: (req, res) => {
    if (req.body.username === User.username && bycypt.compareSync(req.body.password, User.password)) {
      locals.error = false
      User.login = true
      res.redirect('/')
    } else {
      locals.error = true
      User.login = false
      res.render('login', locals)
    }
  },
  // LOGOUT FUNCTION
  logout: (req, res) => {
    locals.error = false
    User.login = false
    res.render('login', locals)
  }
}
