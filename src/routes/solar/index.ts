import { Router } from "express";
import { getCurrentData } from "./getCurrentData";
import { getHistoryData } from "./getHistoryData";

const router = Router();

router.use("/current", getCurrentData);

router.use("/history", getHistoryData);

export default router;
