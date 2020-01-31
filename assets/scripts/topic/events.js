'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const cb = require('./cb')

const onCreateTopic = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
}

const onGetTopics = () => {
  api.getTopics()
    .then(cb.getTopicsSuccess)
    .catch(cb.getTopicsFailure)
}

const addHandlers = () => {
  $('#create-topic').on('submit', onCreateTopic)
  $('#get-topics').on('click', onGetTopics)
}

module.exports = {
  addHandlers
}
