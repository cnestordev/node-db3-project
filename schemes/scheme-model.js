const db = require('../data/connections')

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes')
        .where({ id })
}

// function findSteps(id) {
//     return db("steps")
//         .select(
//             "steps.id",
//             "schemes.scheme_name",
//             "steps.step_number",
//             "steps.instructions"
//         )
//         .join("schemes as schemes", "steps.scheme_id", "schemes.id")
//         .where("schemes.id", id)
//         .orderBy("steps.step_number", "asc");
// }


function findSteps(id) {
    return db('steps')
        .join('schemes', 'steps.scheme_id', 'schemes.id')
        .select('steps.step_number', 'steps.instructions', 'schemes.scheme_name')
        .where('schemes.id', id)
        .orderBy('steps.step_number', 'asc')
}

function add(body) {
    return db('schemes')
        .insert(body)
}

function addStep(body, id) {
    return db('steps')
        .where({ id })
        .insert(body)
}

function remove(id) {
    return db('schemes')
        .where({ id })
        .del()
}

function update(body, id) {
    return db('schemes')
        .where({ id })
        .update(body)
}

module.exports = {
    find,
    findById,
    findSteps,
    remove,
    addStep,
    update
}