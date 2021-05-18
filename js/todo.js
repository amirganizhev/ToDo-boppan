let listInput = document.querySelector(".listInput");

let listAdd = document.querySelector(".listAdd");

let todoList = document.querySelector("#todoList");

let total = document.querySelector(".total");

listAdd.onclick = () => {
	todoList.innerHTML += `<div class="todo-list">
						   		<h2>Номер 1</h2>
						   		<textarea>${listInput.value}</textarea>
						   		<button class="delete-button">Удалить ✗</button>
						   		<button class="edit-button">Сохранить ジ</button>
						   		<button class="marker-button">Отметить ✓</button>
						   </div>`;
	listInput.value = "";

	/*let deleteButton = document.querySelectorAll(".delete-button");

	for(let i = 0, i <= )

	deleteButton.onclick = () => {
		console.log('log');
	}*/
}
