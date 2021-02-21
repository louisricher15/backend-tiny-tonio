const db = require("../models");
const Users = db.users;

exports.findAll = (req, res) => {
    Users.find()
    	.then(data => {
    		res.status(200).json(data);
    	})
        .catch(error => res.status(500).send(error));
}

exports.checkCredentials = (req, res) => {
	if (!req.body.username || !req.body.password) {
		res.status(400).send(false);
	}

    Users.find({ email: req.body.username, password: req.body.password })
    	.then((data) => {
    		if (data.length > 0) {
    			res.status(200).json(data);
    		} else {
    			res.status(200).json(false);
    		}
    	})
        .catch(() => res.status(500).send(false));
}

exports.login = (req, res) => {
	if (!req.body.username) {
		res.status(400).send(false);
	}

	Users.updateOne(
		{ email: req.body.username },
		{ $set: { isConnected: true } },
		(err, data) => {
			if (err) {
				res.status(500).send(false);
			} else {
				res.status(200).send(data);
			}
		});
}

exports.logout = (req, res) => {
	if (!req.body.username) {
		res.status(400).send(false);
	}

	Users.updateOne(
		{ email: req.body.username },
		{ $set: { isConnected: false } },
		(err, data) => {
			if (err) {
				res.status(500).send(false);
			} else {
				res.status(200).send(data);
			}
		});
}