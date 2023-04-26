import { readFile } from "fs";

export default (req, res, next) => {
    readFile("src/data/addProduct.json", "utf8", (err, datas) => {
        if (err) {
            console.log("error during the process of retrieving file", err);
            return;
        }
        res.locals.datas = JSON.parse(datas);
        next();
    });
};



