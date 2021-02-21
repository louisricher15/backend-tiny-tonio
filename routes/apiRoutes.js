module.exports = backend => {
    const users = require("../controllers/users.controller.js");
    const router = require("express").Router();

    router.get("/users", users.findAll);

    backend.use('/api', router);
}