import express, { Request, Response, Router } from "express";
import UsersModel from "../models/user.model";
import { addUser } from "../Services/user.service";

const router: Router = express.Router();

router.post("/addUser", async (req: Request, res: Response) => {
  try {
    const response = await addUser(req.body.id);
    res.status(200).send({
      status: "success",
      message: "User Created Successfully",
      data: response,
    });
  } catch (error: any) {
    res.status(400).send({ status: "error", message: error.message });
  }
});

export default router;
