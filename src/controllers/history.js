import History from "../models/History.js";
import Phrase from "../models/phrase.js";
import User from "../models/user.js";

const createHistory = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findOne({ _id: userId });
    if (!user) throw "User doesn't exist";

    const history = new History({ user: userId });

    await history.save();
    user.history = history.id;

    await user.save();

    return res.status(200).json({ history });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const getHistory = async (req, res) => {
  const { id } = req.params;

  try {
    const history = await History.findOne({ _id: id }).populate(
      "phrases user",
      "content name tag"
    );

    if (!history) throw "History doesn't exist";

    return res.status(200).json({ history });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const addToHistory = async (req, res) => {
  const { userId, phraseId } = req.params;

  try {
    const user = await User.findOne({ _id: userId }).populate("history");
    if (!user) throw "User doesn't exist";

    const history = await History.findOne({ _id: user.history }).populate(
      "phrases user",
      "content name tag"
    );

    if (!history) throw "History doesn't exist";

    const phrase = await Phrase.findOne({ _id: phraseId });
    if (!phrase) throw "Phrase doesn't exist";

    const phraseExist = history.phrases.find(
      (historyPhrase) => historyPhrase._id.toString() === phraseId
    );

    if (phraseExist)
      return res
        .status(409)
        .json({ code: 409, error: "Phrase already exists" });

    history.phrases.length === 10 && history.phrases.shift();
    history.phrases.push(phrase);

    await history.save();

    return res.status(200).json({ history });
  } catch (error) {
    return res.status(400).json({ error });
  }
  y;
};

export { createHistory, addToHistory, getHistory };
