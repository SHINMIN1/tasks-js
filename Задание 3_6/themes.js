// Блок со всплывающим окном.
var number = prompt ("Введите число 1 или 2");
// Переменная
switch (number) {
// блок операторов
case "1": // if (number === 1)
	document.write("1"); // тогда выводим...
break;
	
case "2": // if (number === 2)
	document.write("2"); // тогда выводим...
break;
		
default: // else
	document.write("Вы ввели значение, отличное от 1 и 2"); // иначе выводим...

}