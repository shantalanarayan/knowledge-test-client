'use strict'

const sharedUi = require('./shared/ui')
const authEvents = require('./auth/events')
const topicEvents = require('./topic/events')

$(() => {
  sharedUi.toggleForm()
  authEvents.addHandlers()
  topicEvents.addHandlers()
})
