var images = document.querySelectorAll(".wrapper .image img")
var galleryImg = document.querySelector(".gallery_inner img");
var gallery = document.querySelector(".gallery");
var gallery_close = document.querySelector(".gallery_close");
var gallery_inner = document.querySelector(".gallery_inner");
var btnPrev = document.querySelector(".prev");
var btnRight = document.querySelector(".right");
var btnClose = document.querySelector(".gallery_close");

var currentIndex = 0;

function showGallary() {
    if (currentIndex == 0) {
        btnPrev.classList.add('hide');
        btnRight.classList.remove('hide');
    }
    else {
        btnPrev.classList.remove('hide');
        btnRight.classList.add('hide');
    }
    if (currentIndex == images.length - 1) {
        btnRight.classList.add('hide');
    }
    else {
        btnRight.classList.remove('hide');
    }
    galleryImg.src = images[currentIndex].src;
    gallery.classList.add('show');
}

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        showGallary();
    });
});

btnClose.addEventListener('click', () => {
    gallery.classList.remove('show');
});

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
        // ESC để đóng gallery
        gallery.classList.remove('show'); 
    } else if (e.key === 'ArrowRight') {
        // Phím mũi tên phải
        if (currentIndex < images.length - 1) {
            currentIndex++;
            showGallary();
        }
    } else if (e.key === 'ArrowLeft') {
        // Phím mũi tên trái
        if (currentIndex > 0) {
            currentIndex--;
            showGallary();
        }
    }
});

btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showGallary();
    }

});

btnRight.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showGallary();
    }

});