const express = require('express')
const app = express()

app.use(express.json())
const fs = require('fs')

const multer = require('multer')

const { v4: uuidv4 } = require('uuid')

const upload = multer({ dest: './public/uploads' })

const router = express.Router()
const models = require('./models')

module.exports = router