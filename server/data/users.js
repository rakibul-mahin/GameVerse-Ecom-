import bcrypt from "bcrypt";

const users = [
  {
    name: "Mahin",
    email: "mahin@gmail.com",
    password: bcrypt.hashSync("pass123", 10),
    isAdmin: true,
  },
  {
    name: "Rafid",
    email: "rafid@gmail.com",
    password: bcrypt.hashSync("pass123", 10),
    isAdmin: true,
  },
  {
    name: "Customer",
    email: "cus1@gmail.com",
    password: bcrypt.hashSync("pass123", 10),
  },
];

export default users;
