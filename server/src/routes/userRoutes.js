import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

// Signin route
router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user || !(await user.comparePassword(req.body.password))) {
      return res.status(401).send({ error: "Invalid login credentials." });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    // Return user data without the password
    const userData = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };

    res.send({ user: userData, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Signup route (corrected)
router.post(
  "/signup",
  [
    body("firstName").notEmpty().withMessage("First name is required."),
    body("lastName").notEmpty().withMessage("Last name is required."),
    body("email").isEmail().withMessage("Invalid email address."),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long."),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { firstName, lastName, email, password } = req.body;

      // Check if the user already exists
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ error: "User already exists." });
      }

      // Create a new user
      const user = await User.create({
        firstName,
        lastName,
        email,
        password,
      });

      // Add token for user
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });
      res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000,
      });

      // Send response
      res.status(201).json({ user, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

// // Check auth
router.get("/check-auth", (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.send({ isAuthenticated: false });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    res.json({ isAuthenticated: true });
  } catch (error) {
    res.send({ isAuthenticated: false });
  }
});

// Signout Route (corrected)
router.post("/signout", (req, res) => {
  res.clearCookie("jwt");
  res.send({ message: "Signout successful" });
});

export default router;
