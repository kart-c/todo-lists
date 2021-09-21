const input = document.querySelector('input');
const list = document.querySelector('.todo-list');
const button = document.querySelector('.add');
let checkBox = document.querySelectorAll('input[type=checkbox]');
let arr = Array.from(checkBox);

function add() {
	const newLi = document.createElement('li');
	const newCheckBox = document.createElement('input');
	newCheckBox.type = 'checkbox';
	if (input.value.length > 0) {
		newLi.innerHTML = input.value;
		list.append(newLi);
		newLi.append(newCheckBox);
		arr.push(newCheckBox);
		input.value = '';
		remove();
	}
}

button.addEventListener('click', () => {
	add();
});

input.addEventListener('keydown', (e) => {
	if (e.code === 'Enter') {
		add();
	}
});

function remove() {
	arr.forEach((el) =>
		el.addEventListener('click', (select) => {
			select.target.parentElement.remove();
		})
	);
}

remove();
