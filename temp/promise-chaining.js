require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("61438166b0e20f424fbe92fd", { age: 31 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 31 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const updateAgeCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeCount("61438166b0e20f424fbe92fd", 30)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
