import { conn } from "../db.js";

export const createUser = async ({
  firstName,
  secondName,
  paternalLastName,
  maternalLastName,
  email,
  phoneNumber,
  birthdate,
}) => {
  const query = `INSERT INTO testing_ali_fullstack.users_test_jose_morales
  ( firstName, secondName, paternalLastName, maternalLastName, email, phoneNumber, birthdate)
  VALUES (?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    firstName,
    secondName,
    paternalLastName,
    maternalLastName,
    email,
    phoneNumber,
    birthdate,
  ];

  const result = new Promise((resolve, reject) => {
    try {
      conn.query(query, values, (error, results, fields) => {
        if (error) console.error(error);
        console.log("results ", results);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });

  return result;
};
