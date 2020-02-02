'use strict'

const topicsTemplate = require('../templates/topic-listing.handlebars')
const sharedUi = require('../shared/ui')
const api = require('./api')

const commonStep = (message, isSuccess) => {
  $('form').trigger('reset')
  sharedUi.displayMessage(message, isSuccess)
}

const getTopicsSuccess = function (data) {
  const topicsHtml = topicsTemplate({ topics: data.topics })
  $('.content').html(topicsHtml)
  addHandlersForTopics(data.topics)
}

const getTopicsFailure = function (data) {
  commonStep('Retrieving topic failed', false)
}

const createTopicSuccess = function (data) {
  commonStep('Topic created successfully', true)
  api.getTopics()
    .then(getTopicsSuccess)
    .catch(getTopicsFailure)
}

const createTopicFailure = function (data) {
  commonStep('Topic creation failed', false)
}

const deleteTopicSuccess = () => {
  commonStep('Topic deleted successfully', true)
  api.getTopics()
    .then(getTopicsSuccess)
    .catch(getTopicsFailure)
}

const deleteTopicFailure = () => {
  commonStep('Topic deletion failed', false)
}

const onTopicToggle = (event) => {
  const targetSection = $(event.target).closest('section')
  const dataId = targetSection.data('id')
  $('#' + dataId + '-answer').slideToggle('slow')
}

const onTopicDelete = (event) => {
  api.deleteTopic(event.target.getAttribute('data-id'))
    .then(deleteTopicSuccess)
    .catch(deleteTopicFailure)
}

const onTopicUpdate = (event) => {
  console.log('Update clicked for', event.target.getAttribute('data-id'))
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
