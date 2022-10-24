import db from "../../../../utils/db";
import User from "../../../../models/User";

const handler = async (req, res) => {
  if (req.method === "GET") {
    return getUser(req, res);
  } else {
    return res.status(400).send({ message: "Method not allowed" });
  }
};

const getUser = async (req, res) => {
  await db.connect();
  const user = await User.findById(req.query.id);
  await db.disconnect();
  res.send(user);
};

export default handler;
