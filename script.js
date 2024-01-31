function addTask() {
    const taskName = document.getElementById('taskName').value;
    const deadline = document.getElementById('deadline').value;
    const priority = document.getElementById('priority').value;
    const label = document.getElementById('label').value;

    if (taskName === '' || deadline === '' || priority === '') {
        alert('Please fill in all required fields.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.textContent = `${taskName} - Deadline: ${deadline} - Priority: ${priority}`;
    newTask.classList.add(priority.toLowerCase());

    if (label !== '') {
        const labelSpan = document.createElement('span');
        labelSpan.textContent = ` - Label: ${label}`;
        newTask.appendChild(labelSpan);
    }

    taskList.appendChild(newTask);

    document.getElementById('taskForm').reset();
}
