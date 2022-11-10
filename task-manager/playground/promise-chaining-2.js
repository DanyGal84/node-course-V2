require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('6369e06e4936d7c3b5545303').then(task => {
//   console.log(task);
//   return Task.countDocuments({ completed: false });
// }).then(result => {
//   console.log(result);
// }).catch(err => {
//   console.log(err);
// })

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('6369bb47c751f9f3a627a846').then(count => {
  console.log(count);
}).catch(err => {
  console.log(err);
});