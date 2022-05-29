// 'use strict'

// Файлы в которых выполнять ДЗ прикреплены ниже.
// У нас есть дерево, структурированное как вложенные списки ul/li.
// Напишите код, который выведет каждый элемент списка в консоль :

// 1 Вытянуть все атрибуты которые есть в теге ul, перебрать их (for..of) и записать значение каждого атрибута в массив — вывести этот массив в консоль
// 2 Так-же записать в отдельный массив каждое имя атрибута — вывести массив в консоль
// 3 С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
// 4 Добавить первому элементу li атрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
// 5 Удалить у тега ul атрибут ‘data-dog-tail‘
// Вернуться к уроку

(function () {
    let UL = document.getElementById('ulId');

    let name = 'Dog';

    const attr = UL.attributes;
    const arrAttValue = [];
    const arrAttName = [];

    //1,2
    for (let i = 0, length = attr.length; i < length; i++) {
        arrAttValue.push(attr[i].value);
        arrAttName.push(attr[i].name);
    }

    console.log(`Значение каждого атрибута тега UL`);
    console.log(arrAttValue);

    console.log(`Имя каждого атрибута тега UL`);
    console.log(arrAttName);

    //3
    UL.lastElementChild.innerHTML =  `Привет, меня зовут ${name}`;
    //4
    UL.firstElementChild.setAttribute('data-my-name', name);
    //5
    UL.removeAttribute('data-dog-tail');

})();