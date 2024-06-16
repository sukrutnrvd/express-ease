import { getController } from "@controllers/controller";
import { Router } from "express";

const router = Router();

router.route("/hello-express").get(getController).post(getController);

export default router;
