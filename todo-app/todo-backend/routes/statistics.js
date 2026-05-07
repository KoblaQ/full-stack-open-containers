const express = require('express')
const statisticsRouter = express.Router()
const { get } = require('../redis')

// GET stats
statisticsRouter.get('/', async (req, res) => {
  const count = await get('added_todos')
  res.send({
    added_todos: parseInt(count || 0, 10),
  })
})

module.exports = statisticsRouter
