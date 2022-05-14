import User from "../models/user.js";

const createUser = async (req, res) => {
  const { name, tag } = req.body;
  try {
    const userExist = await User.findOne({ tag });
    if (userExist) throw "User already exists";

    const user = new User({ name, tag });

    await user.save();

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("phrases", "history");

    return res.status(200).json({ users });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id }).populate(
      "phrases",
      "content"
    );

    if (!user) throw "User doesn´t exist";

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export { createUser, getUsers, getUser };
