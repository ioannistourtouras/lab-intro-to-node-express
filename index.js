
console.log('test')

const express = require('express')
const app = express()

let roleModel = {
    name: "Leonardo Di Cabrio",
    occupation: "Actor",
    languages:["English"]
  }

  app.get('/role-model', (req, res)=> {
        res.json(roleModel)
  })

  app.listen(5005)