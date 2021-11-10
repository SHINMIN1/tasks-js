var i=1;
for (var prop in window) // Перебор всех свойств объекта window
{
	if (i%2 != 0){ // Условие 
		document.write(prop + "<br><td color=blue></td>") ; // Выводит в столбик все свойства объекта window
				}
}





