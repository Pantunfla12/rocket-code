import { createUser } from "../services/user.service.js";

export const register = async (req, res) => {
  console.log("body: ", req.body);
  try {
    const {
      firstName,
      secondName,
      paternalLastName,
      maternalLastName,
      email,
      phoneNumber,
      birthdate,
    } = req.body;

    const data = await createUser({
      firstName,
      secondName,
      paternalLastName,
      maternalLastName,
      email,
      phoneNumber,
      birthdate,
    });

    res.status(200).json({ message: "Successfully created UwU!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
