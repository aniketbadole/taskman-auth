require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("614382647eec289739658444")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("61436e190e774b033abaecf6")
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
