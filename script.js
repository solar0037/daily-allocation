function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.name = 'taskCheckbox';
    li.appendChild(checkBox);
    
    const taskTextBox = document.createElement('span');
    taskTextBox.textContent = taskText;
    li.appendChild(taskTextBox);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.onclick = function() {
        taskList.removeChild(li);
        saveTasks();
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = '';

    saveTasks();
}

function saveTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = [];
    taskList.querySelectorAll('li').forEach(li => {
        const taskText = li.querySelector('span').textContent;
        const isChecked = li.querySelector('input[type="checkbox"]').checked;
        tasks.push({ text: taskText, checked: isChecked });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.name = 'taskCheckbox';
        checkBox.checked = task.checked;
        checkBox.addEventListener('change', saveTasks); // 체크박스 상태 변경 시 saveTasks 호출
        li.appendChild(checkBox);
        
        const taskTextBox = document.createElement('span');
        taskTextBox.textContent = task.text;
        li.appendChild(taskTextBox);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.onclick = function() {
            taskList.removeChild(li);
            saveTasks();
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

document.addEventListener('DOMContentLoaded', loadTasks);
