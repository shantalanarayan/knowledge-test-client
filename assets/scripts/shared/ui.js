'use strict'

const store = require('../store')

const toggleForm = () => {
  if (store.user) {
    // User is logged in
    $('#auth-area').show()
    $('#sign-out').show()
    $('#non-auth-area').hide()
  } else {
    // User is logged out
    $('#auth-area').hide()
    $('#sign-out').hide()
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
    $('#user-welcome').text('Hello ' + store.user.email + '!')
  } else {
    // User is logged out. Hence, clear welcome message
    $('#user-welcome').empty()
  }
}

const resetTabs = () => {
  $('#sign-in-tab').tab('show')
  $('#study-tab').tab('show')
}

module.exports = {
  toggleForm,
  displayMessage,
  setWelcomeMessage,
  resetTabs
}
