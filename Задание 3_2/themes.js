// появляется всплывающее окно: "Введите ваш возраст"
var a = prompt("Введите ваш возраст", "0");
// если число <20 выдаёт ответ: "Вы слишком молоды"
if (a < 20){
	document.write("Вы слишком молоды");
}
// если число >=20 выдаёт ответ: "Вы нам подходите."
else {
   document.write("Вы нам подходите.");
}
