'use strict'

const sharedUi = require('../shared/ui')
// const store = require('../store')

const commonStep = (message, isSuccess) => {
  $('form').trigger('reset')
  sharedUi.displayMessage(message, isSuccess)
}

const getTopicsSuccess = function (data) {
  console.log('getTopicsSuccess', data)
  commonStep('Topic retrieved successfully', true)
}

const getTopicsFailure = function (data) {
  console.log('getTopicsFailure', data)
  commonStep('Retrieving topic failed', false)
}

const createTopicSuccess = function (data) {
  console.log('Topic created successfully', data)
  commonStep('Topic created successfully', true)
}

const createTopicFailure = function (data) {
  console.log('Topic creation failed', data)
  commonStep('Topic creation failed', false)
}

module.exports = {
  getTopicsSuccess,
  getTopicsFailure,
  createTopicSuccess,
  createTopicFailure
}
