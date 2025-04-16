import express from "express";
import {
  getListings,
  getUserListings,
  createListing,
  toggleInterestedUser,
  getInterestedClients,
  getListingCount,
  deleteListing,
} from "../controllers/listingController.js";

const router = express.Router();

router.post("/create", createListing);
router.get("/", getUserListings);
router.get("/all", getListings);
router.post("/toggle-interest", toggleInterestedUser);
router.get("/interested-clients", getInterestedClients);
router.get("/count", getListingCount);
router.delete("/:id", deleteListing);

export default router;
