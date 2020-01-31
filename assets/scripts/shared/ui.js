'use strict'

const store = require('../store')

const toggleForm = () => {
  if (store.user) {
    // User is logged in
    $('#auth-area').show()
    $('#non-auth-area').hide()
  } else {
    // User is logged out
    $('#auth-area').hide()
    $('#non-auth-area').show()
  }
}

module.exports = {
  toggleForm
}
