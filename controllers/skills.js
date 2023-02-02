const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    newSkill,
    create,
    delSkill,
    edit,
    update,
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
function delSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function edit(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', {
        title: 'edit skill',
        skill,
    })
}

function update(req, res) {
    req.body.level = req.body.level;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}