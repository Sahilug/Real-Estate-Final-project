import express from 'express';
import { signin, signup } from '../Controllers/auth.controller.js';
import routes from './user.routes.js';
const router =express.Router();
router.post("/signup",signup);
router.post("/signin",signin);
export default router;