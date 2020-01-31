'use strict'

// use require with a reference to bundle the file and use it in this file
const sharedUi = require('./shared/ui')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  sharedUi.toggleForm()
})
