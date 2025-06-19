const express = require('express')
const app = express()

app.use(express.json())
const fs = require('fs')

const multer = require('multer')

const { v4: uuidv4 } = require('uuid')

const upload = multer({ dest: './public/uploads' })

const router = express.Router()
const models = require('./models')

const userController = require('./controllers/UserController');
const articleController = require('./controllers/ArticleController');
const QuizzQuestionController = require('./controllers/QuizzQuestionController');
const QuizzResultController = require('./controllers/QuizzResultController');

router.get('/article', articleController.browse);
router.get('/article/:id', articleController.read);
router.post('/article', articleController.add);
router.put('/article/:id', articleController.edit);
router.delete('/article/:id', articleController.destroy);

router.get("/quizz/questions", QuizzQuestionController.getAllQuestions);
router.get("/quizz/questions/:id/responses", QuizzQuestionController.getResponsesByQuestionId);
router.get("/quizz/questions-with-responses", QuizzQuestionController.getAllQuestionsWithResponses);

router.get('/quizz/results', QuizzResultController.getAllResultsWithAnswers);
router.get('/quizz/result', QuizzResultController.getAllResults);
router.get('/quizz/result/:id', QuizzResultController.getResultById);

module.exports = router