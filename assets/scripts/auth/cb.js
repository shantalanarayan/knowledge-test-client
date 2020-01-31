'use strict'

const sharedUi = require('../shared/ui')
const store = require('../store')

const commonStep = () => {
  $('form').trigger('reset')
  sharedUi.toggleForm()
}

const signUpSuccess = function (data) {
  console.log('signUpSuccess', data)
  commonStep()
}

const signUpFailure = function (data) {
  console.log('signUpFailure', data)
  commonStep()
}

const signInSuccess = function (data) {
  // Set the user returned from the api call to a user variable in our local store.
  store.user = data.user
  console.log('signInSuccess', data)
  commonStep()
}

const signInFailure = function (data) {
  console.log('signInFailure', data)
  commonStep()
}

const signOutSuccess = function (data) {
  console.log('signOutSuccess', data)
  commonStep()
  // set the user to null as the user has signed out successfully.
  store.user = null
}

const signOutFailure = function (data) {
  console.log('signOutFailure', data)
  commonStep()
}

const changePasswordSuccess = function (data) {
  console.log('changePasswordSuccess', data)
  commonStep()
}

const changePasswordFailure = function (data) {
  console.log('changePasswordFailure', data)
  commonStep()
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
