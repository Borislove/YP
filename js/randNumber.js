let phrases = [
    'отправить другу смешную гифку',
    'посмотреть скидки на авиабилеты',
    'разобраться, о чём поют рэперы',
    'Юрий Дудь',
    'расставить книги на полке по цвету',
    'читать про зарплаты в Сан-Франциско'
];

let randIndex = Math.random() *6;  //let randIndex =Math.floor(Math.random() * phrases.length);
console.log(randIndex);

console.log(phrases[randIndex]);


let randomNumber = Math.random() * 10;
let randomNumberInt = Math.floor(randomNumber);

console.log(randomNumber); // 9.315448768805199
console.log(randomNumberInt); // 9