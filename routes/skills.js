var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills');


/* GET users listing. */
router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.newSkill);

router.get('/:id', skillsCtrl.show);
//GET POST/Skills
router.get('/:id/edit', skillsCtrl.edit);

router.post('/', skillsCtrl.create);

router.put('/:id', skillsCtrl.update);

//GET DELETE /skills:id
router.delete('/:id', skillsCtrl.delSkill);

module.exports = router;
