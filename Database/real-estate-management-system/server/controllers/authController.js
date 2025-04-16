import bcrypt from "bcryptjs";
import { prisma } from "../prisma/prisma.js";

export const register = async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;
  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role,
      },
    });

    res
      .status(201)
      .json({ success: true, message: "Account created successfully." });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ success: false, error: "Internal server error." });
  }
};

export const login = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user || user.role !== role) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    res.status(200).json({
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      role: user.role,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
