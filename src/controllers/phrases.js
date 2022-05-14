import Phrase from "../models/phrase.js";
import User from "../models/user.js";

const createPhrase = async (req, res) => {
  const { userId } = req.params;
  const { content } = req.body;
  try {
    const phrase = new Phrase({ user: userId, content });

    const user = await User.findOne({ _id: userId });
    if (!user) throw "User doesn't exist";

    user.phrases.push(phrase);

    await user.save();

    await phrase.save();

    return res.status(200).json({ phrase });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const getPhrases = async (req, res) => {
  try {
    const phrases = await Phrase.find().populate("user", "name tag");

    return res.status(200).json({ phrases });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const getPhrase = async (req, res) => {
  try {
    const phrase = await Phrase.findOne({ _id: req.params.id }).populate(
      "user",
      "name tag"
    );

    if (!phrase) throw "Phrase doesn´t exist";

    return res.status(200).json({ phrase });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export { createPhrase, getPhrases, getPhrase };
