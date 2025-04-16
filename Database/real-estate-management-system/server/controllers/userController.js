import { prisma } from "../prisma/prisma.js";

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getDealers = async (req, res) => {
  try {
    const dealers = await prisma.user.findMany({
      where: {
        role: "DEALER",
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
      },
    });

    res.status(200).json(dealers);
  } catch (err) {
    console.error("Error fetching dealers:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUserCount = async (req, res) => {
  try {
    const count = await prisma.user.count();

    res.json({ count });
  } catch (error) {
    res.status(500).json({ error: "Error fetching user count" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await prisma.user.delete({
      where: { id },
    });
    res.status(200).json(deletedUser);
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Failed to delete user" });
  }
};
