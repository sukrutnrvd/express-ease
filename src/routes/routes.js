import { getController, postController } from "controllers/controller";
import { Router } from "express";

const router = Router();

router.route("/hello-express").get(getController).post(postController);

export default router;
