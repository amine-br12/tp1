function addTodo() {
    const name = document.getElementById('name').value;
    const content = document.getElementById('content').value;

    const list = document.getElementById('list');
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = `${name}: ${content} <i onclick='deleteTodo(this)' class="bi bi-trash"></i>`;
    list.appendChild(li);
    document.getElementById('name').value = '';
    document.getElementById('content').value = '';
}

function deleteTodo(element) {
    element.parentElement.remove();
}
const submitButton = document.getElementById('submitButton');

form.addEventListener('input', () => {
    const isFormValid = document.getElementById('name').value !='' && document.getElementById('content').value != '';
    submitButton.disabled = !isFormValid;
});