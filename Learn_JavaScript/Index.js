// Заверстать микроверсию google: поле ввода и кнопка найти!
// Стилизация: кнопка должна быть зеленая, вокруг инпута должна быть красная граница, размер кнопки и инпута - больше стандартного. Добавить паддинги в инпут.
// кликаем по кнопке - видим в alert-е то, что введено в поле поиска. Не использовать onclick атрибут в разметке кода.
// Если ввести в поиск слово google и нажать кнопку НАЙТИ, то нужно показать в алерте “Yandex круче. Но это не точно”

// let search = document.getElementById("search");
// let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
// 	let a = search.value;
// 	if (a === 'google') {
// 		alert('YANDEX круче, но это не точно')
// 	} else if (a != 'google') {
// 		alert(a)
// 	}
// });







// Создать массив объектов. 3-4 объекта, каждый имеет свойства name и age. При нажатии на кнопку НАЙТИ также вывести ещё и св-во name первого объекта в массиве

// let people = [
// 	{ name: 'Sasha', age: 28 },
// 	{ name: 'Anna', age: 22 },
// 	{ name: 'Denis', age: 24 }
// ];
// newLength = people.unshift('Sasha')
// console.log(people[0]);







// Создать функцию superSum, которая будет в алерте показывать сумму ЛЮБЫХ двух чисел, переданных этой функции через параметры 


// function superSum(a, b) {
// 	a = Number(a);
// 	b = Number(b);
// 	console.log(a + b);
// }








// Создать массив из чисел в перемешку (не отсортированы). 
// С помощью цикла for найти максимальный и минимальный элементы в массиве

// let minNum = [92392, 3, 40, -23232, 17, -123];
// let min = minNum[0];
// let max = minNum[0];

// for (let i = 1; i < minNum.length; i++) {
// 	if (minNum[i] < min) {
// 		min = minNum[i];
// 	}
// 	if (minNum[i] > max) {
// 		max = minNum[i];
// 	}
// }

// console.log(min);
// console.log(max);







// Создать 2 переменные a и b… присвоить им любые значения. Потом программно поменять эти значения местами, не используя значения напрямую

// let a = 15;
// let b = 20;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a)
// console.log(b)





// Оформить алгоритм поиска максимального числа в массиве как функцию findMax (чтобы можно было передавать в неё любой массив чисел, а на выходе она возвращала нам максимальное число из массива)


// console.log(Math.max.apply(Math, [71, 29, 2]))


// показать alert с результатом поиска не сразу, а через 3 секунды после нажатия (всё то же самое, как и работало, в частности с “яндекс круче всех”, но с задержкой в 3 секунды)



let search = document.getElementById("search");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	let a = search.value;
	if (a === 'google') {
		setTimeout(() => { alert('yandex круче, но это не точно') }, 3000);
	} else if (a != 'google') {
		setTimeout(() => { alert(a) }, 3000);
	}
});