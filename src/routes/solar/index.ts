import { Router } from "express";
import { check } from "express-validator";
import { validateRequest } from "../../middlewares/validateRequest";
import { verifyAccess } from "../../middlewares/verifyAccess";
import { getCurrentData } from "./getCurrentData";
import { getHistoryData } from "./getHistoryData";

const router = Router();

router.use("/current", getCurrentData);

router.use("/history", getHistoryData);

export default router;
