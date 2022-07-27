/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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

    for (let i = 0; i < advBlock.length; i++) {
        advBlock[i].remove();
    }

    genre.textContent = "драма";

    backGr.style.backgroundImage = "url('img/bg.jpg')";

    const { movies } = movieDB;
    let sortMovies = movies.sort();
    for (let i = 0; i < filmsList.length; i++) {
        filmsList[i].textContent = `${i + 1}. ${sortMovies[i]}`;
    }
});