'use strict'

const topicsTemplate = require('../templates/topic-listing.handlebars')
const noTopicsTemplate = require('../templates/no-topics.handlebars')
const getFormFields = require(`../../../lib/get-form-fields`)
const sharedUi = require('../shared/ui')
const api = require('./api')

const commonStep = (message, isSuccess) => {
  $('form').trigger('reset')
  sharedUi.displayMessage(message, isSuccess)
}

const getTopicsSuccess = function (data) {
  if (data.topics.length > 0) {
    const topicsHtml = topicsTemplate({ topics: data.topics })
    $('.content').html(topicsHtml)
    addHandlersForTopics(data.topics)
  } else {
    $('.content').html(noTopicsTemplate())
  }
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

const updateTopicSuccess = () => {
  commonStep('Topic updated successfully', true)
  api.getTopics()
    .then(getTopicsSuccess)
    .catch(getTopicsFailure)
}

const updateTopicFailure = () => {
  commonStep('Topic update failed', false)
}

const onTopicToggle = (event) => {
  const targetSection = $(event.target).closest('section')
  const dataId = targetSection.data('id')
  $('#' + dataId + '-answer').slideToggle('slow')
}

const onTopicDelete = (event) => {
  const targetSection = $(event.target).closest('section')
  const dataId = targetSection.data('id')
  api.deleteTopic(dataId)
    .then(deleteTopicSuccess)
    .catch(deleteTopicFailure)
}

const onTopicUpdate = (event) => {
  event.preventDefault()
  // Get form data to update
  const form = event.target
  const data = getFormFields(form)

  // Get topic id to update
  const targetSection = $(event.target).closest('section')
  const dataId = targetSection.data('id')
  api.updateTopic(dataId, data)
    .then(updateTopicSuccess)
    .catch(updateTopicFailure)
}

const onTopicUpdateCancel = (event) => {
  const targetSection = $(event.target).closest('section')
  const dataId = targetSection.data('id')
  $('.' + dataId + '-section').toggle()
}

const addHandlersForTopics = (topics) => {
  topics.forEach(topic => {
    $('#' + topic.id + '-topic').on('click', onTopicToggle)
    $('#' + topic.id + '-delete').on('click', onTopicDelete)
    $('#' + topic.id + '-update').on('click', onTopicUpdateCancel)
    $('#' + topic.id + '-cancel').on('click', onTopicUpdateCancel)
    $('#' + topic.id + '-edit-topic').on('submit', onTopicUpdate)
  })
}

module.exports = {
  getTopicsSuccess,
  getTopicsFailure,
  createTopicSuccess,
  createTopicFailure
}
