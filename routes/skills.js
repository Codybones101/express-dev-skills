var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills');


/* GET users listing. */
router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.newSkill);

router.get('/:id', skillsCtrl.show);
//GET POST/Skills
router.post('/', skillsCtrl.create);

module.exports = router;
