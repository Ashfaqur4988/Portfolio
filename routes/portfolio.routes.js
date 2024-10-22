import express from "express";
import { saveMessage } from "../controller/portfolio.controller.js";
const router = express.Router();

router.post("/save", saveMessage);

export default router;