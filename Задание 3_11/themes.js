var a = prompt("Введите '1' - текстовое поле, '2' - кнопка, '3' - radio"); // Инициализируем переменную a, введённым пользователем в модальное окно
var kolvo = prompt ("Введите количество"); // Инициализируем переменную kolvo, введённым пользователем в модальное окно
kolvo = parseInt(kolvo); // Преобразовываем строковое значение в числовое
// Организовываем цикл, в котором выводим теги для списка <br>
	if (a =='1') 
	for (var i=1; i<=kolvo; i++)
		document.write('<br><input type="text"></br>');	
	else if (a =='2') 
	for (var i=1; i<=kolvo; i++)
		document.write('<br><input type="button"></br>');
	else if (a =='3') 
	for (var i=1; i<=kolvo; i++)
		document.write('<br><input type="radio"></br>');