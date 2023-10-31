import express from 'express';

const router = express.router();

const moduleRoutes = [
    {
        path: "",
        route: "",
    },
    {
        path: "/blogs",
        route: "",
    }
]

moduleRoutes.forEach(route => {
    router.use(route.path, route.route);
})

export default router;