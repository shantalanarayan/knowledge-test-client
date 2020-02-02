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

const createTopic = (data) => {
  return $.ajax({
    url: config.apiUrl + '/topics',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      topic: {
        title: data.title,
        question: data.question,
        answer: data.answer
      }
    }
  })
}

const deleteTopic = (id) => {
  return $.ajax({
    url: config.apiUrl + '/topics/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getTopics,
  createTopic,
  deleteTopic
}
