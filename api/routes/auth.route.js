import express from "express";
import { signUp } from "../Controller/auth.controller.js"
const router = express.Router();


router.post("/signup", signUp);
export default router