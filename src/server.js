const knex = require('knex')
const app = require('../src')
const express = require('express')
const { PORT, DB_URL } = require('./config')



 const db = knex({
 client: 'pg',
  connection: DB_URL,
})

app.set('db', db)


  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
  })