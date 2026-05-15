function countPhotos() {
 let photos = document.querySelectorAll('.photo');
 let counter = document.getElementById('count');

 if (counter) {
 counter.textContent = photos.length;
 }

 console.log('Найдено фотографий:', photos.length);
}
// Функция для работы с лайками
function setupLikes() {
 let likeButtons = document.querySelectorAll('.like-btn');
 let totalLikesElement = document.getElementById('total-likes');
 let totalLikes = 0;

 // Для каждой кнопки лайка
 likeButtons.forEach(function(button) {
 // При клике на кнопку
 button.addEventListener('click', function() {
 let likesSpan = this.querySelector('.likes');
 let currentLikes = parseInt(likesSpan.textContent);

 if (this.classList.contains('liked')) {
 // Убираем лайк
 currentLikes--;
 totalLikes--;
 this.classList.remove('liked');
 } else {
 // Добавляем лайк
 currentLikes++;
 totalLikes++;
 this.classList.add('liked');
 }

 // Обновляем счётчики
 likesSpan.textContent = currentLikes;
 totalLikesElement.textContent = totalLikes;

 // Анимация
 this.style.transform = 'scale(1.2)';
 setTimeout(() => {
 this.style.transform = 'scale(1)';
 }, 300);

 console.log('Лайков всего:', totalLikes);
 });
 });
}
// Когда страница загрузится
document.addEventListener('DOMContentLoaded', function() {
 console.log('Галерея загружена!');

 countPhotos();
 setupLikes();

 // Показываем, что JavaScript работает
 setTimeout(function() {
 console.log('✅ JavaScript работает правильно!');
 }, 1000);
});
