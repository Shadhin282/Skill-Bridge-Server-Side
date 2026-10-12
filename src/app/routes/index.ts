import { Router } from "express";
import { AuthRouter } from "../module/auth/auth.route.ts";

const router = Router();

type TModuleRoute = {
    path : string,
    route : Router
}

const moduleRoutes : TModuleRoute[] = [
    {
        path : '/auth',
        route : AuthRouter,
    }
];

moduleRoutes.forEach((route)=>{ router.use(route.path, route.route)})

export default router;