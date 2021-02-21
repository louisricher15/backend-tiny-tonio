module.exports = backend => {
    const users = require("../controllers/users.controller.js");
    const router = require("express").Router();

    router.get("/users/all", users.findAll);
    router.post("/users/check-credentials", users.checkCredentials);
    router.put("/users/login", users.login);
    router.put("/users/logout", users.logout);

    backend.use('/api', router);
}