'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const cb = require('./cb')

const onCreateTopic = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createTopic(data)
    .then(cb.createTopicSuccess)
    .catch(cb.createTopicFailure)
}

const onGetTopics = () => {
  api.getTopics()
    .then(cb.getTopicsSuccess)
    .catch(cb.getTopicsFailure)
}

const onToggleTopic = () => {
  const targetSection = $(event.target).closest('section')
  const dataId = targetSection.data('id')
  $('#' + dataId + '-answer').slideToggle('slow')
}

const addHandlers = () => {
  $('#create-topic').on('submit', onCreateTopic)
  $('#get-topics').on('click', onGetTopics)
  $('.content').on('click', onToggleTopic)
}

module.exports = {
  addHandlers
}
