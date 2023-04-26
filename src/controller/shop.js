export const shopView = (req, res) => {
    res.status(200).render("layout", {
        template: "shop/index",
        datas: res.locals.datas,
    });
};

export const productView = (req, res) => {
    res.status(200).render("layout", { template: "shop/product" });
};
// déclaration d'une fonction middleware pour traiter les erreurs