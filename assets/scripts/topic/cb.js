'use strict'

const topicsTemplate = require('../templates/topic-listing.handlebars')
const sharedUi = require('../shared/ui')

const commonStep = (message, isSuccess) => {
  $('form').trigger('reset')
  sharedUi.displayMessage(message, isSuccess)
}

const getTopicsSuccess = function (data) {
  commonStep('Topic retrieved successfully', true)
  const topicsHtml = topicsTemplate({ topics: data.topics })
  $('.content').html(topicsHtml)
  addHandlersForTopics(data.topics)
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

const onTopicToggle = (event) => {
  const targetSection = $(event.target).closest('section')
  const dataId = targetSection.data('id')
  $('#' + dataId + '-answer').slideToggle('slow')
  console.log('Topic toggle for', dataId)
}

const onTopicDelete = (event) => {
  console.log('Delete clicked for', event.target.id)
}

const onTopicUpdate = (event) => {
  console.log('Update clicked for', event.target.id)
}

const addHandlersForTopics = (topics) => {
  topics.forEach(topic => {
    $('#' + topic.id + '-topic').on('click', onTopicToggle)
    $('#' + topic.id + '-delete').on('click', onTopicDelete)
    $('#' + topic.id + '-update').on('click', onTopicUpdate)
  })
}

module.exports = {
  getTopicsSuccess,
  getTopicsFailure,
  createTopicSuccess,
  createTopicFailure
}
