'use strict'

const sharedUi = require('../shared/ui')
const store = require('../store')
const topicsApi = require('../topic/api')
const topicsCb = require('../topic/cb')

const commonStep = (message, isSuccess, refreshTopics) => {
  $('form').trigger('reset')
  sharedUi.toggleForm()
  sharedUi.displayMessage(message, isSuccess)
  sharedUi.setWelcomeMessage()
  // For sign-up success and sign-in success refreshTopics would be true.
  if (refreshTopics) {
    $('.content').empty()
    topicsApi.getTopics()
      .then(topicsCb.getTopicsSuccess)
      .catch(topicsCb.getTopicsFailure)
  }
}

const signUpSuccess = function (data) {
  // Set the user returned from the api call to a user variable in our local store.
  store.user = data.user
  commonStep('Signed up successfully', true, true)
}

const signUpFailure = function (data) {
  commonStep('Sign up failed', false)
}

const signInSuccess = function (data) {
  // Set the user returned from the api call to a user variable in our local store.
  store.user = data.user
  commonStep('Signed in successfully', true, true)
}

const signInFailure = function (data) {
  commonStep('Sign in failed', false)
}

const signOutSuccess = function (data) {
  // set the user to null as the user has signed out successfully.
  store.user = null
  commonStep('Signed out successfully', true)
}

const signOutFailure = function (data) {
  commonStep('Sign out failed', false)
}

const changePasswordSuccess = function (data) {
  commonStep('Password changed successfully', true)
}

const changePasswordFailure = function (data) {
  commonStep('Change password failed', false)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
