export const adminView = (req, res) => {
    res.status(200).render("layout", {
        template: "admin/index",
        component: res.locals.display,f
    });
};

// déclaration d'une fonction middleware pour traiter les erreurs