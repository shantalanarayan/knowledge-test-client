'use strict'

const sharedUi = require('../shared/ui')
// const store = require('../store')

const commonStep = () => {
  $('form').trigger('reset')
  sharedUi.toggleForm()
}

const getTopicsSuccess = function (data) {
  console.log('getTopicsSuccess', data)
  commonStep()
}

const getTopicsFailure = function (data) {
  console.log('getTopicsFailure', data)
  commonStep()
}

module.exports = {
  getTopicsSuccess,
  getTopicsFailure
}
