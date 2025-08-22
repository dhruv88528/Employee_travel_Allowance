
import express from "express";
import {createUser , createAllowanceRequest} from "../controller/userController.js";

const router = express.Router();

router.post("/create", createUser);
router.post("/request", createAllowanceRequest);
// router.put("/:id", updateRequestStatus);
// router.delete("/:id", deleteRequest);

export default router;
