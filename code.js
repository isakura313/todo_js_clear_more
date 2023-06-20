const app = document.getElementById("app");
const input = document.getElementById("input");
const button = document.getElementById("button");

button.onclick = () => {
  if (input.value === "") {
    return;
  }
  const newTodoText = input.value;
  input.value = "";

  const newTodo = document.createElement("div");
  newTodo.classList.add('todo-item') // добавил тут новую строку
  newTodo.textContent = newTodoText;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "x";
  deleteButton.className = "deleteButton";
  newTodo.appendChild(deleteButton);
  app.appendChild(newTodo);

  const deleteButtons = document.querySelectorAll(".deleteButton");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = () => {
      deleteButtons[i].parentElement.remove();
    };
  }
};
// Кликаем по кнопке удалить, элемент выше по дереву удаляется
