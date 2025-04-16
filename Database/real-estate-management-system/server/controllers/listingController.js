import { prisma } from "../prisma/prisma.js";

export const createListing = async (req, res) => {
  try {
    const {
      propertyName,
      description,
      price,
      listingType,
      propertyType,
      address,
      city,
      state,
      postalCode,
      bedrooms,
      bathrooms,
      area,
      contactNumber,
      dealerId,
    } = req.body;

    const newListing = await prisma.listing.create({
      data: {
        propertyName,
        description,
        price: parseFloat(price),
        listingType,
        propertyType,
        address,
        city,
        state,
        postalCode,
        bedrooms: parseInt(bedrooms),
        bathrooms: parseInt(bathrooms),
        area: parseFloat(area),
        contactNumber,
        dealerId,
      },
    });

    res.status(201).json({
      success: true,
      message: "Listing created successfully.",
    });
  } catch (err) {
    console.error("Error creating listing:", err);
    res.status(500).json({
      success: false,
      error: "Internal server error.",
    });
  }
};

export const getUserListings = async (req, res) => {
  const { dealerId } = req.query;

  if (!dealerId) {
    return res.status(400).json({ error: "Dealer ID is required" });
  }

  try {
    const listings = await prisma.listing.findMany({
      where: {
        dealerId,
      },
    });

    res.status(200).json(listings);
  } catch (err) {
    console.error("Error fetching listings:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getListings = async (req, res) => {
  try {
    const listings = await prisma.listing.findMany({
      include: {
        dealer: true,
      },
    });

    const listingsWithDealerName = listings.map((listing) => ({
      ...listing,
      dealer: `${listing.dealer.firstName} ${listing.dealer.lastName}`,
    }));

    res.status(200).json(listingsWithDealerName);
  } catch (err) {
    console.error("Error fetching listings:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const toggleInterestedUser = async (req, res) => {
  const { listingId, userId } = req.body;

  if (!listingId || !userId) {
    return res
      .status(400)
      .json({ error: "Listing ID and User ID are required" });
  }

  try {
    const listing = await prisma.listing.findUnique({
      where: { id: listingId },
    });

    if (!listing) {
      return res.status(404).json({ error: "Listing not found" });
    }

    let updatedInterestedClients;

    if (listing.interestedClients.includes(userId)) {
      updatedInterestedClients = listing.interestedClients.filter(
        (id) => id !== userId
      );
    } else {
      updatedInterestedClients = [...listing.interestedClients, userId];
    }

    const updatedListing = await prisma.listing.update({
      where: { id: listingId },
      data: { interestedClients: updatedInterestedClients },
    });

    res.status(200).json({
      success: true,
      message: listing.interestedClients.includes(userId)
        ? "Interest cancelled successfully."
        : "Interest registered successfully.",
      data: updatedListing,
    });
  } catch (err) {
    console.error("Error toggling interested user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getInterestedClients = async (req, res) => {
  const { propertyId } = req.query;

  if (!propertyId) {
    return res.status(400).json({ error: "Property ID is required" });
  }

  try {
    const listing = await prisma.listing.findUnique({
      where: { id: propertyId },
      select: { interestedClients: true },
    });

    if (!listing) {
      return res.status(404).json({ error: "Listing not found" });
    }

    const interestedClients = await prisma.user.findMany({
      where: {
        id: { in: listing.interestedClients },
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
      },
    });

    res.status(200).json(interestedClients);
  } catch (error) {
    console.error("Error fetching interested clients:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getListingCount = async (req, res) => {
  try {
    const count = await prisma.listing.count();
    res.json({ count });
  } catch (error) {
    res.status(500).json({ error: "Error fetching listing count" });
  }
};

export const deleteListing = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedListing = await prisma.listing.delete({
      where: { id },
    });
    res.status(200).json(deletedListing);
  } catch (error) {
    console.error("Error deleting listing:", error);
    res.status(500).json({ error: "Failed to delete listing" });
  }
};
