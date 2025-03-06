import express from 'express';
import { signup } from '../Controllers/auth.controller.js';
import router from './user.routes.js';
const riuter =express.Router();
router.post("/signup",signup);
export default router;