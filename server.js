require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const users = require("./data/users.json");

const backend = express();

const corsOptions = { origin: process.env.CORS_OPTIONS.split(process.env.CORS_OPTIONS_SEPARATOR) };

backend.use(cors(corsOptions));
backend.use(bodyParser.json());
backend.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");


db.mongoose
    .connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((dbData) => {
        console.log("Connecté à la base de données !");

        ['users'].forEach(
            c => {
                dbData.connections[0].db.dropCollection(c).then(() => {
                    console.log("(>^^)> Collection users supprimee !");
                })

                dbData.connections[0].db.createCollection(c).then(() => {
                    console.log("(>^^)>Tarpe !");
                })
            }
        );

        ['users'].forEach(
            c => {
                db[c].insertMany({
                    users
                }[c]).then(() => {
                    console.log("(>^^)>Tarpe mon frere !");
                })
            }
        )
    }).catch(err => console.log(err));

require("./routes/apiRoutes")(backend);

const PORT = process.env.PORT;

backend.listen(PORT, () => { console.log(`Le serveur tourne sur le port ${PORT}.`); });
