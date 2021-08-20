// Заверстать микроверсию google: поле ввода и кнопка найти!
// Стилизация: кнопка должна быть зеленая, вокруг инпута должна быть красная граница, размер кнопки и инпута - больше стандартного. Добавить паддинги в инпут.
// кликаем по кнопке - видим в alert-е то, что введено в поле поиска. Не использовать onclick атрибут в разметке кода.
// Если ввести в поиск слово google и нажать кнопку НАЙТИ, то нужно показать в алерте “Yandex круче. Но это не точно”

let search = document.getElementById("search");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	let a = search.value;
	if (a === 'google') {
		setTimeout(() => alert('yandex круче, но это не точно'), 3000);
	} else if (a != 'google') {
		setTimeout(() => alert(a), 0);
	}
	let people = [
		{ name: 'Sasha', age: 28 },
		{ name: 'Anna', age: 22 },
		{ name: 'Denis', age: 24 }
	];
	newLength = people.unshift('Sasha');
	setTimeout(() => alert(people[0]), 3000);
});

function superSum(a, b) {
	a = Number(a);
	b = Number(b);
	console.log(a + b);
}


let minNum = [92392, 3, 40, -23232, 17, -123];
let min = minNum[0];
let max = minNum[0];

for (let i = 1; i < minNum.length; i++) {
	if (minNum[i] < min) {
		min = minNum[i];
	}
	if (minNum[i] > max) {
		max = minNum[i];
	}
}

console.log(min);
console.log(max);


let a = 15;
let b = 20;
a = a + b;
b = a - b;
a = a - b;
console.log(a)
console.log(b)
