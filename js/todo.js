/*Кнопка добавления задания*/
const listAdd = document.querySelector(".listAdd");

listAdd.onclick = () => {

	/*Форма добавления задания*/
	const taskInput = document.querySelector(".task-input");
	/*Блок списка дел*/
	const todoList = document.querySelector("#todoList");

	if(taskInput.value == "") {
		return false;
	}

	todoList.innerHTML += `<div class="todo-task">
						   		<h2>Номер 1</h2>
						  		<p>${taskInput.value}</p>
						   		<button class="delete-button">Удалить ✗</button>
						   		<button class="marker-button">Отметить ✓</button>
						   	</div>`;

	taskInput.value = "";

	/*Карточка задания*/
	const todoTask = document.querySelectorAll(".todo-task");
	/*Удаление задания*/
	const deleteButton = document.querySelectorAll(".delete-button");
	/*Отметка задания*/
	const markerButton = document.querySelectorAll(".marker-button");
	
	setTimeout(function() {
		for(let i = 0; i <= deleteButton.length; i++) {
		deleteButton[i].onclick = () => {
			for(let j = 0; j <= todoTask.length; j++) {
				todoTask[i].style.display = 'none';
			}
		}
	}
	}, 0)
	
	setTimeout(function() {
		for(let k = 0; k <= markerButton.length; k++) {
		markerButton[k].onclick = () => {
			for(let l = 0; l <= todoTask.length; l++) {
				todoTask[k].style.backgroundColor = 'red';
			}
		}
	}
	}, 0)

}