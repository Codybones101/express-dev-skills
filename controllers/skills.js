const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    newSkill,
    create,
}

function index(req, res) {
    res.render('skills/index',{
        skills: Skill.getAll(),
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
    });
}

function newSkill(req, res) {
    res.render('skills/new', {
        title: 'Add New Skill',
    });
}

function create(req, res) {
    req.body.id = Math.floor(Math.random() * 100 +1);
    Skill.create(req.body);
    res.redirect('/skills');
}

