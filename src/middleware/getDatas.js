import { readFile } from "fs";

export default (req, res, next) => {
    readFile("src/data/product.json", "utf8", (err, data) => {
        if (err) {
            console.log("error during the process of retrieving file", err);
            return;
        }
        res.locals.datas = JSON.parse(data);
        next();
    });
};
// on initialise la fonction readFile pour lire le fichier json avec la gestion des  erreurs
