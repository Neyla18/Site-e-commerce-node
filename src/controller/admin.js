export const adminView = (req, res) => {
    res.status(200).render("layout", {
        template: "admin/index",
        component: res.locals.display,
    });
};

// déclaration d'une fonction middleware pour traiter les erreurs