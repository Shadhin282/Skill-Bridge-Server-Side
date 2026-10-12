import { Router } from "express";
import { AuthController } from "./auth.controller.ts";

export const AuthRouter = Router();

AuthRouter.post('/register',AuthController.register);
AuthRouter.post('/login',AuthController.login)