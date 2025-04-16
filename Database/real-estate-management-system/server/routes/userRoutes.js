import express from "express";
import {
  getUsers,
  getDealers,
  getUserCount,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/dealers", getDealers);
router.get("/count", getUserCount);
router.delete("/:id", deleteUser);

export default router;
