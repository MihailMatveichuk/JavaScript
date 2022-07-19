/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
const advBlock = document.querySelectorAll('.promo__adv img'),
      backGr = document.querySelector('.promo__bg'),
      genre = backGr.querySelector('.promo__genre'),
      filmsList = document.querySelectorAll('.promo__interactive-item');

for(let i = 0; i < advBlock.length; i++){
advBlock[i].remove();
}

genre.textContent = "драма";

backGr.style.backgroundImage =  "url('img/bg.jpg')";

const {movies} = movieDB;
let sortMovies = movies.sort();
for(let i = 0; i < filmsList.length; i++){
        filmsList[i].textContent = `${i + 1}. ${sortMovies[i]}`;
    }

