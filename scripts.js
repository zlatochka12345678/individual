// Функция для подсчёта фотографий
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

  // Перерасчёт общего числа лайков
  function recalcTotalLikes() {
    let total = 0;
    likeButtons.forEach(btn => {
      const likesSpan = btn.querySelector('.likes');
      const likes = likesSpan ? parseInt(likesSpan.textContent) || 0 : 0;
      total += likes;
    });
    if (totalLikesElement) totalLikesElement.textContent = total;
    return total;
  }

  likeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      let likesSpan = this.querySelector('.likes');
      if (!likesSpan) return;

      let currentLikes = parseInt(likesSpan.textContent) || 0;

      if (this.classList.contains('liked')) {
        // Убираем лайк (минимум 0)
        currentLikes = Math.max(currentLikes - 1, 0);
        this.classList.remove('liked');
      } else {
        // Добавляем лайк
        currentLikes++;
        this.classList.add('liked');
      }

      // Обновляем счётчики
      likesSpan.textContent = currentLikes;

      // Обновляем общий лайк
      const totalLikes = recalcTotalLikes();

      // Анимация
      this.style.transform = 'scale(1.2)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 300);

      console.log('Лайков всего:', totalLikes);
    });
  });

  // Начальное обновление общего числа лайков
  recalcTotalLikes();
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
