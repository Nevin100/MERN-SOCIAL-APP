import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/*Register User :*/

export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body; //getting all the information from the req body

    const salt = await bcrypt.genSalt(); //encrypts the pasword
    const passwordHash = await bcrypt.hash(password, salt); //password hashed

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser); // perfect status code
  } catch (err) {
    res.status(500).json({ error: err.message }); //error message
  }
};
