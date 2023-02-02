const skills = [
    {id: 1, name: 'javascript', level: 'intermediate'},
    {id: 2, name: 'HTML', level: 'intermediate'},
    {id: 3, name: 'CSS', level: 'intermediate'},
    {id: 4, name: 'Node.JS', level: 'intermediate'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id) ||
    skills.find((skill) => skill.name === id) 
}

function create(skill) {
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex((skill) => skill.id === id);
    skills.splice(idx, 1);
}

function update(id, updatedSkill) {
    id = parseInt(id)
    const skill = skills.find((skill) => skill.id === id);
    return Object.assign(skill, updatedSkill)
}