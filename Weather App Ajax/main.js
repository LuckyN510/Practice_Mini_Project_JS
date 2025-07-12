const searchInput = document.querySelector('.search-input');
const city = document.querySelector('.city');
const country = document.querySelector('.country');
const temperature = document.querySelector('.temperature');
const value = document.querySelector('.value');
const shortDerc = document.querySelector('.short-derc'); // Đúng class với HTML
const visibility = document.querySelector('.visibility');
const wind = document.querySelector('.wind');
const cloud = document.querySelector('.cloud');
const time = document.querySelector('.time');
const body = document.querySelector('body');

async function changeWeatherUI(query) {
    if (!query) return;

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        if (data.cod !== 200) {
            alert("City not found!");
            return;
        }

        city.innerText = data.name;
        country.innerText = data.sys.country;
        const temp = Math.round(data.main.temp);
        value.innerText = temp;
        shortDerc.innerText = data.weather[0].main;

        // Hiển thị các thông số phụ nếu có phần tử con span
        if (visibility.querySelector('span')) {
            visibility.querySelector('span').innerText = data.visibility + ' m';
        }
        if (wind.querySelector('span')) {
            wind.querySelector('span').innerText = data.wind.speed + ' m/s';
        }
        if (cloud.querySelector('span')) {
            cloud.querySelector('span').innerText = data.clouds.all + ' %';
        }
        time.innerText = new Date().toLocaleString('vi');

        // Xóa tất cả class cũ trước khi thêm class mới
        body.className = '';

        // Gán class tùy theo nhiệt độ
        if (temp <= 10) {
            body.classList.add('cold');
        } else if (temp <= 22) {
            body.classList.add('cool');
        } else if (temp <= 30) {
            body.classList.add('warm');
        } else {
            body.classList.add('hot');
        }

    } catch (error) {
        console.error("Failed to fetch weather:", error);
        alert("Failed to fetch weather data. Please try again.");
    }
}

searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        changeWeatherUI(query);
    }
});

// Khởi tạo lần đầu với Hà Nội
changeWeatherUI('Ha noi');