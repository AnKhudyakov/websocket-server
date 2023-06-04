import Router from "express";
import RegController from "./controllers/RegController.js";
import { validateMiddlewareReg } from "../../middleware/validateMiddleware.js";

const router = Router();

router.post("/register", validateMiddlewareReg, RegController.regUser);

export default router;
