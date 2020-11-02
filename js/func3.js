let phrases = [
    'отправить другу смешную гифку',
    'посмотреть скидки на авиабилеты',
    'разобраться, о чём поют рэперы',
    'Юрий Дудь',
    'расставить книги на полке по цвету',
    'читать про зарплаты в Сан-Франциско'
];

/*function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}*/

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let randomElement = getRandomElement(phrases);
console.log(randomElement);