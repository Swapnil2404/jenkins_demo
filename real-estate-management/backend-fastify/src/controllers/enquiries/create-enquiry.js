import { Enquiry } from "../../models/enquiry.js";
import { v4 as uuidV4 } from "uuid";
import { authBearerToken } from "../../utils/requests.js";
import { userIdToken } from "../../utils/users.js";
import { User } from "../../models/user.js";

export const createEnquiry = async function (req, res) {
  const { title, topic, user } = req.body;
  if (!title || !topic || !user.to) {
    res.status(400).send({ message: "Some fields are missing!." });
    return;
  }

  const token = authBearerToken(req);
  const user_id = userIdToken(token);
  req.body.user.from = user_id;

  try {
    const newEnquiry = new Enquiry({
      enquiry_id: uuidV4(),
      read: false,
      ...req.body,
    });
    await newEnquiry.save();

    const { from, to } = newEnquiry.user;
    const users = await User.find({ user_id: { "$in": [from, to] } });
    users.forEach(async (user) => {
      user.enquiries.push(newEnquiry.enquiry_id);
      await user.save();
    });

    res.status(201).send({ data: newEnquiry });
  } catch (error) {
    res.status(400).send(error);
  }
};
