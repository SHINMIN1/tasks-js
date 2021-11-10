var counter = prompt("Введите число"); // Инициализируем переменную counter значением, введённым пользователем в модальное окно
var factorial = 1; // Начальное значение переменной factorial
var i = 2; // Начальное значение переменной i
document.write("Факториал числа: " + counter + "! = ");
// Создаём цикл, который выполняет указанное выражение до тех пор, пока условие не станет ложным
do {
	if(counter == 0) {
		factorial = 1;
		break;
	}
	if(counter == 1) {
		break;
	}
	else {
		factorial = factorial * i;
	}
	i++; // Значение переменной i +1
	counter--; // Значение переменной counter -1
}
while (counter > 1);
document.write(factorial);