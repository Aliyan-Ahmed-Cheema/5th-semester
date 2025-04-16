import express from "express";
import {
  createAgreement,
  getAllAgreements,
  getAgreementCount,
  getAgreementsByDealer,
  getAgreementsByClient,
  deleteAgreement,
} from "../controllers/agreementController.js";
const router = express.Router();

router.post("/create", createAgreement);
router.get("/", getAllAgreements);
router.get("/count", getAgreementCount);
router.get("/dealer", getAgreementsByDealer);
router.get("/client", getAgreementsByClient);
router.delete("/:id", deleteAgreement);

export default router;
