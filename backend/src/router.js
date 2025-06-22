const express = require('express')
const app = express()

app.use(express.json())
const fs = require('fs')

const multer = require('multer');
const path = require("path");

const { v4: uuidv4 } = require('uuid')

const { validateArticle } = require("./validators/articleValidator");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/uploads');
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const baseName = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, baseName + ext);
    }
});
  
const upload = multer({ storage });

const router = express.Router()
const models = require('./models')

const userController = require('./controllers/UserController');
const articleController = require('./controllers/ArticleController');
const QuizzQuestionController = require('./controllers/QuizzQuestionController');
const QuizzResultController = require('./controllers/QuizzResultController');
// Test
const QuizzTestController = require('./controllers/QuizzTestController');

router.get('/article', articleController.browse);
router.get('/article/:id', articleController.read);
router.post('/article', upload.single('image'), validateArticle, articleController.add);
router.put('/article/:id', upload.single('image'), validateArticle, articleController.edit);
router.delete('/article/:id', articleController.destroy);

router.get("/quizz/questions", QuizzQuestionController.getAllQuestions);
router.get("/quizz/questions/:id/responses", QuizzQuestionController.getResponsesByQuestionId);
router.get("/quizz/questions-with-responses", QuizzQuestionController.getAllQuestionsWithResponses);

router.get('/quizz/results', QuizzResultController.getAllResultsWithAnswers);
router.get('/quizz/result', QuizzResultController.getAllResults);
router.get('/quizz/result/:id', QuizzResultController.getResultById);

router.post('/quizz/test-answers', QuizzTestController.testAnswers);
// router.post("/quizz/test-answers", (req, res) => {
//     console.log("Test inline OK");
//     res.sendStatus(200);
//   });

module.exports = router