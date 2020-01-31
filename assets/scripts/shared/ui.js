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

const clearMessage = () => {
  $('#message').removeClass('alert-success alert-danger')
  $('#message').empty()
}

const displayMessage = (message, isSuccess) => {
  const cssClass = isSuccess ? 'alert-success' : 'alert-danger'
  $('#message').text(message)
  $('#message').removeClass('alert-success alert-danger')
  $('#message').addClass(cssClass)
  setTimeout(clearMessage, 3000)
}

const setWelcomeMessage = () => {
  if (store.user) {
    // User is logged in. Hence, set welcome message
    $('#user-welcome').text('Welcome ' + store.user.email)
  } else {
    // User is logged out. Hence, clear welcome message
    $('#user-welcome').empty()
  }
}

module.exports = {
  toggleForm,
  displayMessage,
  setWelcomeMessage
}
