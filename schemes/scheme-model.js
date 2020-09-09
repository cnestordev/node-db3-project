const db = require('../data/connections')

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes')
        .where({ id })
}

function findSteps(id) {
    return db('schemes')
        .where({ id })
}

module.exports = {
    find,
    findById,
    findSteps
}