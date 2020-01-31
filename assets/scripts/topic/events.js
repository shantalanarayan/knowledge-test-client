'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

// const api = require('./api')
// const cb = require('./cb')

const onCreateTopic = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
}

const addHandlers = () => {
  $('#create-topic').on('submit', onCreateTopic)
}

module.exports = {
  addHandlers
}
