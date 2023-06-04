import Router from "express";
import MessageController from "./controllers/MessageController.js";

const router = Router();

router.get("/", MessageController.getMessages);

export default router;
