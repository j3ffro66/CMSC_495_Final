// Selects all task items avail
const tasks = document.querySelectorAll('.task-items li');
let dragTask = null;

tasks.forEach((task) => {
  // Waiting for task item to be dragged
  task.addEventListener('dragstart', (event) => {
    dragTask = event.target;
  });

  task.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  task.addEventListener('drop', (event) => {
    event.preventDefault();
    const targetList = event.target.closest('ul');
    // If valid list is found, task is appended to it
    if (targetList) {
      targetList.appendChild(dragTask);
    }
  });
});
