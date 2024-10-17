// Ambil elemen dari HTML
const todoInput = document.getElementById('todo-input');
const addTaskBtn = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

// Fungsi untuk menambahkan tugas baru
function addTask() {
    const taskText = todoInput.value.trim(); // Ambil teks tugas dari input

    if (taskText !== "") {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div class="buttons">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        // Tambahkan event listener untuk tombol edit
        li.querySelector('.edit-btn').addEventListener('click', function() {
            const newTaskText = prompt("Edit your task:", taskText);
            if (newTaskText !== null && newTaskText.trim() !== "") {
                li.querySelector('.task-text').textContent = newTaskText.trim();
            }
        });

        // Tambahkan event listener untuk tombol delete
        li.querySelector('.delete-btn').addEventListener('click', function() {
            todoList.removeChild(li);
        });

        // Tambahkan tugas ke dalam list
        todoList.appendChild(li);

        // Kosongkan input setelah menambahkan tugas
        todoInput.value = '';
    }
}

// Event listener untuk tombol tambah tugas
addTaskBtn.addEventListener('click', addTask);

// Event listener untuk menambahkan tugas dengan menekan Enter
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
