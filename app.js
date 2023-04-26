import express from 'express'

import router from "./router/index.routes.js";
import getDatas from "./middleware/getDatas.js";
import getAddproduct from './middleware/getAddproduct.js';

const app = express();
const PORT = 5000;

app.set("views", "./src/views").set("view engine", "ejs");

app.use(express.static("public"))
    .use(express.urlencoded({ extended: true }))
    .use(getDatas)
    .use(getAddproduct)
    .use(router);

app.listen(PORT, (err) => {
    err
        ? console.log(err)
        : console.log(`Listening at http://localhost:${PORT}`);
});
