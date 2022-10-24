import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      username: "francisco",
      email: "francisco@gmail.com",
      name: "Francisco",
      lastName: "Gimenez",
      password: bcrypt.hashSync("1234567"),
      country: "Argentina",
      isAdmin: false,
    },
  ],
  books: [

  ],
  posts: [
    
  ]
};

export default data;
