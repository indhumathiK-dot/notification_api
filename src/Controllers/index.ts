import express from "express";
import UserController from "./user.controller";

const router = express.Router();

router.use("/user", UserController);

export default router;
