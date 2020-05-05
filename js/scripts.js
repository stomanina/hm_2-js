//задание №1
var name = prompt ('Ваше имя'),
    age = prompt ('Ваш возраст'),
    city = prompt ('Ваш город'),
    company = prompt ('Ваша компания'),
    phone = prompt ('Ваш телефон'),
    email = prompt ('Ваш электронный адрес');

document.write('Меня зовут ' + name);
document.write('. Мне  лет ' + age);
document.write('. Я проживаю в городе '+ city);
document.write(' и работаю в компании ' + company);
document.write('. Мои контактные данные: ' + phone + email);


//задание №2
var n=2020,
    i=n-age;
    console.log(name + ' родил(а)ся в '+ n + ' году');


//задание №3
var stroka,
    q = prompt('Введите 1-ое число'),
    w = prompt('Введите 2-ое число'),
    e = prompt('Введите 3-ое число'),
    r = prompt('Введите 4-ое число'),
    t = prompt('Введите 5-ое число'),
    y = prompt('Введите 6-ое число'),
    stroka = q + w + e + r + t + y;

console.log("");
console.log('Введенная шестизначная строка - ' + stroka);

    if ((q + w + e)==( r + t + y )) {
    alert( 'Сумма первых трех цифр строки равна сумме трех последних' );
    } else { 
    alert ( 'Сумма первых трех цифр строки НЕ равна сумме трех последних' );
    }


//задание №4
var s = prompt('введите число');
    if (s>0) {
        alert ("переменная больше нуля - верно");  
    } else {
        alert ('значение меньше нуля - неверно');
    }

    
//задание №5
var a=10,
    b=2;
console.log(a+b);
console.log(a-b);    
console.log(a*b);    
console.log(a/b);    

var c=a+b;
    d = Math.pow(c,2);
if (c>1){
    alert (d);
}

//задание №6
if (a>2 && a<11 || b>=6 && b<14) {
    alert ('ВЕРНО');
} else {
    alert ('НЕВЕРНО');
}
                                    
//задание №7
let n = 0;
    for (; n<=59; n++) {
        if (n<=15){
            console.log (n + ' - первая четверть');
        } else if (n>15 && n<=30){
            console.log (n + ' - вторая четверть');
        } else if (n>30 && n<=45){
            console.log (n + ' - третья четверть');
        } else {
            console.log (n + ' - четвертая четверть');
        }
}

//задание №8
let day = 1;
    for (; day<=31; day++){
        if (day<=10){
            console.log (day + ' - первая декада');
        } else if (day>10 && day<=20){
            console.log (day + ' - вторая декада');
        } else 
            console.log (day + ' - третья декада');
        } 

//задание №9 !!!Обязательно к проверке

let days = prompt ('введите любое значение количества дней'),
    years = days/365,
    month = days/12,
    weeks = days/7,
    hours = days*24,
    minutes = days*24*60,
    seconds = days*24*360;    

console.log(years);
        if(days%365!=0){                
            console.log('Меньше года');
        }
console.log(month);          // вывести "меньше месяца", если недостаточно дней.
        switch(days){
            case days%31!=0: //для месяцев с 31 днем;
            case days%30!=0: //для 30 дней;
            case days%28!=0: //для февраля;
            console.log('Меньше месяца');
        }
console.log(weeks);
        if (days/7!=4){                      
            console.log('Меньше недели');
        }

console.log(hours);
console.log(minutes);
console.log(seconds);

//задание №10           
console.log("");

 if (days > 1 && days <= 31){
        days = 'январь';
        console.log (days);
 }  else if (days>31 && days<=59){
        days = 'февраль';
        console.log (days);
 }  else if (days>59 && days<=90){
        days = 'март';  
        console.log (days);
 }  else if (days>90 && days<=120){
        days = 'апрель';
        console.log (days);
 }  else if (days>120 && days<=151){
        days = 'май';
        console.log (days);
 }  else if (days>151 && days<=181){
        days ='июнь'; 
        console.log (days);
 }  else if (days>181 && days<=212){
        days ='июль';
        console.log (days);
 }  else if (days>212 && days<=243){
        days = 'август'; 
        console.log (days);
 }  else if (days>243 && days<=273){
        days = 'сентябрь';
        console.log (days);
 }  else if (days>273 && days<=304){
        days = 'октябрь'; 
        console.log (days);
 }  else if (days>304 && days<=334){  
        days = 'ноябрь';
        console.log (days);
 }  else { 
        days = 'декабрь';  
        console.log (days);
 }    
 

switch(days) {
        case 'декабрь':
        case 'январь':
        case 'февраль':
    console.log('zima');
    break;
        case 'март':
        case 'апрель':
        case 'май':
    console.log('vesna');
    break;
        case 'июнь':
        case 'июль':
        case 'август':
    console.log('leto');
    break;
        default:
            console.log('ocen');
    break;
}
