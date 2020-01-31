'use strict'

const config = require('../config')
const store = require('../store')

const getTopics = () => {
  return $.ajax({
    url: config.apiUrl + '/topics',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getTopics
}
