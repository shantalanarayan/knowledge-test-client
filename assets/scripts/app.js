'use strict'

const sharedUi = require('./shared/ui')
const authEvents = require('./auth/events')

$(() => {
  sharedUi.toggleForm()
  authEvents.addHandlers()
})
