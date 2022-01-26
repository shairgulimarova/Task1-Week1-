/*1. Простое сообщение: сохраните текстовое сообщение в переменной и выведите его в браузере

let sayHello = "Привет, проверяющий!"
document.write(sayHello)


 2. Простые сообщения: сохраните сообщение в переменной и выведите это сообщение. Затем замените значение переменной другим сообщением и выведите новое сообщение

let message;
message ="Hello, Javascript"
message ="Learn Javascript!"
document.write(message);

3. Напишите несколько строк кода, выводящих на экран ваше имя и почтовый адрес.

let userName="Shairgul"
let userAddress="Kashar str, Issyk-Kul, Kyrgyzstan"
document.write("My name is" + " " + userName + " " + "and my address is" +" " + userAddress); 

//4.Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.

let souvenir = prompt("Сколько сувениров вы выбрали? Напишите, пожалуйта, количество.");
let bauble = prompt("Сколько безделушек выбрали? Напишите, пожалуйта, количество. "); 

document.write("Общий вес товара, выбранных вами составляет:" + (72*souvenir + 112*bauble)/1000 + " " +"кг");*/ 

let a = +prompt("Напишите, пожалуйта, одно целое число.");
let b = +prompt ("Напишите, пожалуйта, еще одно целое число");
let sum = a + b; 
let difference = a - b;
let multiplication = a * b; 
let division = a / b ; 
let surplus = a % b 
let degree = a ** b ; 



document.write(` <h2> Математические операции с введенными вами числами: <br> <h2> 
<h3> 
1) ${a} + ${b} = ${sum. toFixed(2)} <br>
2) ${a} - ${b} = ${difference. toFixed(2)}  <br>
3) ${a} * ${b} = ${multiplication. toFixed(2)} <br>
4) ${a} / ${b} = ${division. toFixed(2)} <br> 
5) ${a} % ${b} = ${surplus. toFixed(2)} <br> 
6) ${a} ** ${b} =${degree. toFixed(2)}
<h3>`)

