export default (req, res, next) => {
    if (req.url === "/") {
        res.locals.display = "../admin/list";
    }

// on initialise une condition pour accéder à l'url list. 
// la page list vas s'afficher
    if (req.url === "/product/add") {
        res.locals.display = "../admin/add_product";
    }
    next();
};

// on initialise une condition pour accéder à l'url add product. 
// la page addProduct vas s'afficher
