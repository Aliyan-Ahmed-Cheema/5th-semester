import { prisma } from "../prisma/prisma.js";

export const createAgreement = async (req, res) => {
  const {
    dealerId,
    propertyId,
    clientId,
    agreementType,
    price,
    rentAmount,
    duration,
    leaseAmount,
    leaseTerms,
  } = req.body;

  try {
    if (!dealerId || !propertyId || !clientId || !agreementType) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    let additionalFields = {};

    switch (agreementType) {
      case "SALE":
        if (!price) {
          return res
            .status(400)
            .json({ error: "Price is required for sale agreements" });
        }
        additionalFields = { price: parseFloat(price) };
        break;

      case "RENT":
        if (!rentAmount || !duration) {
          return res.status(400).json({
            error: "Rent amount and duration are required for rent agreements",
          });
        }
        additionalFields = {
          rentAmount: parseFloat(rentAmount),
          duration,
        };
        break;

      case "LEASE":
        if (!leaseAmount || !leaseTerms) {
          return res.status(400).json({
            error:
              "Lease amount and lease terms are required for lease agreements",
          });
        }
        additionalFields = {
          leaseAmount: parseFloat(leaseAmount),
          leaseTerms,
        };
        break;

      default:
        return res.status(400).json({ error: "Invalid agreement type" });
    }

    const newAgreement = await prisma.agreement.create({
      data: {
        dealerId,
        clientId,
        propertyId,
        agreementType,
        ...additionalFields,
      },
    });

    res.status(201).json({
      success: true,
      message: "Agreement created successfully!",
      data: newAgreement,
    });
  } catch (err) {
    console.error("Error creating agreement:", err);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

export const getAllAgreements = async (req, res) => {
  try {
    const agreements = await prisma.agreement.findMany({
      include: {
        dealer: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
        client: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
        property: {
          select: {
            propertyName: true,
          },
        },
      },
    });

    const transformedAgreements = agreements.map((agreement) => ({
      ...agreement,
      dealer: `${agreement.dealer.firstName} ${agreement.dealer.lastName}`,
      client: `${agreement.client.firstName} ${agreement.client.lastName}`,
      property: agreement.property.propertyName,
    }));

    res.status(200).json(transformedAgreements);
  } catch (error) {
    console.error("Error fetching agreements:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAgreementCount = async (req, res) => {
  try {
    const count = await prisma.agreement.count();
    res.json({ count });
  } catch (error) {
    res.status(500).json({ error: "Error fetching agreement count" });
  }
};

export const getAgreementsByDealer = async (req, res) => {
  try {
    const { dealerId } = req.query;

    if (!dealerId) {
      return res.status(400).json({ error: "Dealer ID is required" });
    }

    const agreements = await prisma.agreement.findMany({
      where: {
        dealerId: dealerId,
      },
      include: {
        dealer: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
        client: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
        property: {
          select: {
            propertyName: true,
          },
        },
      },
    });

    const transformedAgreements = agreements.map((agreement) => ({
      ...agreement,
      dealer: `${agreement.dealer.firstName} ${agreement.dealer.lastName}`,
      client: `${agreement.client.firstName} ${agreement.client.lastName}`,
      property: agreement.property.propertyName,
    }));

    res.status(200).json(transformedAgreements);
  } catch (err) {
    console.error("Error fetching agreements:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAgreementsByClient = async (req, res) => {
  try {
    const { clientId } = req.query;

    if (!clientId) {
      return res.status(400).json({ error: "Client ID is required" });
    }

    const agreements = await prisma.agreement.findMany({
      where: {
        clientId,
      },
      include: {
        dealer: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
        client: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
        property: {
          select: {
            propertyName: true,
          },
        },
      },
    });

    const transformedAgreements = agreements.map((agreement) => ({
      ...agreement,
      dealer: `${agreement.dealer.firstName} ${agreement.dealer.lastName}`,
      client: `${agreement.client.firstName} ${agreement.client.lastName}`,
      property: agreement.property.propertyName,
    }));

    res.status(200).json(transformedAgreements);
  } catch (err) {
    console.error("Error fetching agreements:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteAgreement = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAgreement = await prisma.agreement.delete({
      where: { id },
    });
    res.status(200).json(deletedAgreement);
  } catch (error) {
    console.error("Error deleting agreement:", error);
    res.status(500).json({ error: "Failed to delete agreement" });
  }
};
