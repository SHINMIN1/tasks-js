document.write('<table border="1" width="30%">'); // Выводит на экран таблицу с ячейками
for (var i=0;i<9;i++){ // Отрисовывает данную таблицу 9 ячеек по вертикали
	document.write('<tr></tr>');  
	for (var j=0;j<9;j++){ // Отрисовывает данную таблицу в 9 ячеек по горизонтали
		document.write('<td>-</td>') //  Вписывает "-" во все ячейки 
	}
}
