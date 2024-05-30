document.addEventListener('DOMContentLoaded', function() {
    const usersContainer = document.getElementById('users');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.classList.add('user');

                userDiv.innerHTML = `
                    <p><strong>ID:</strong> ${user.id}</p>
                    <p><strong>Nombre:</strong> ${user.name}</p>
                    <p><strong>Nombre de usuario:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Sitio web:</strong> ${user.website}</p>
                    <button class="view-tasks-btn" data-user-id="${user.id}">Ver tareas</button>
                    <div class="tasks" id="tasks-${user.id}"></div>
                `;

                usersContainer.appendChild(userDiv);

                const tasksContainer = document.getElementById(`tasks-${user.id}`);
                const viewTasksBtn = userDiv.querySelector('.view-tasks-btn');

                viewTasksBtn.addEventListener('click', () => {
                    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`)
                        .then(response => response.json())
                        .then(tasks => {
                            tasksContainer.innerHTML = '';

                            tasks.forEach(task => {
                                const taskDiv = document.createElement('divisor');
                                taskDiv.classList.add('tarea');
                                taskDiv.textContent = task.title;

                                if (task.completed) {
                                    taskDiv.classList.add('completado');
                                } else {
                                    taskDiv.classList.add('no completado');
                                }

                                tasksContainer.appendChild(taskDiv);
                            });
                        })
                        .catch(error => {
                            console.error('Error recuperando tareas:', error);
                        });
                });
            });
        })
        .catch(error => {
            console.error('Error recuperando usuarios:', error);
        });
});
