import User from "../models/User";
import { errorHandler } from "../utils/error";
import bcryptjs from "bcryptjs";

export const test = (req, res) => {
  res.json({ message: "Hello World!" });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "Not authenticated!"));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            avatar: req.body.avatar,
          },
        },
        { new: true }
      );
    }
    const { password: pass, ...rest } = updatedUser._doc;
    res.status(200, "All good!");
  } catch (error) {
    next(error);
  }
};
