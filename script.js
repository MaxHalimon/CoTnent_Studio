
 //Carousel
let currentIndex = 1;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

const carousel = document.querySelector('.carousel');
const firstClone = items[0].cloneNode(true);
const lastClone = items[items.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, items[0]);

const allItems = document.querySelectorAll('.carousel-item');
const itemWidth = allItems[0].clientWidth;
carousel.style.transform = `translateX(${-itemWidth}px)`;

nextBtn.addEventListener('click', () => {
  currentIndex++;
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;

  carousel.addEventListener('transitionend', () => {
    if (allItems[currentIndex].id === firstClone.id) {
      carousel.style.transition = 'none';
      currentIndex = 1;
      carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
    }
  });
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;

  carousel.addEventListener('transitionend', () => {
    if (allItems[currentIndex].id === lastClone.id) {
      carousel.style.transition = 'none';
      currentIndex = totalItems;
      carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
    }
  });
});

function autoShowNextItem() {
  currentIndex++;
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;

  carousel.addEventListener('transitionend', () => {
    if (allItems[currentIndex].id === firstClone.id) {
      carousel.style.transition = 'none';
      currentIndex = 1;
      carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
    }
  });

  setTimeout(autoShowNextItem, 7000);
}

setTimeout(autoShowNextItem, 7000);


  //Pop-up
const faqBlocks = document.querySelectorAll('.faq-block');

faqBlocks.forEach(block => {
    block.addEventListener('click', () => {
        const isActive = block.classList.contains('active');

        // Закриваємо всі активні блоки
        faqBlocks.forEach(b => {
            b.classList.remove('active');
        });

        // Якщо поточний блок був неактивний, робимо його активним
        if (!isActive) {
            block.classList.add('active');
        }
    });
});

/*

//Модальне вікно

// Відкриття модального вікна
document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('modalOverlay').style.display = 'block';
    document.getElementById('modalWindow').style.display = 'block';
});

// Закриття модального вікна
document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('modalWindow').style.display = 'none';
});

// Закриття модального вікна при кліку на фон
document.getElementById('modalOverlay').addEventListener('click', function() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('modalWindow').style.display = 'none';
});
*/



//Burger-menu 


document.querySelector('.burger-menu').addEventListener('click', function() {
  document.querySelector('.nav-list').classList.toggle('active');
});















