import express from "express";
import { createBook } from "./bookController.js";
import { BookValidations } from "./validation.js";
import { validate } from "express-validation";
const router =express.Router();


router.post('/book/create',validate(BookValidations.createBook),createBook)


export default router;