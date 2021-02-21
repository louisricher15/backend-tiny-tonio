const db = require("../models");
const Users = db.users;

exports.findAll = (req, res) => {
    Users.find().then(data => { res.send(data); })
        .catch(error => res.send(500).send(error));
}