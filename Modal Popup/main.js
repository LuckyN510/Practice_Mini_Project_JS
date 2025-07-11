var btnOpenModel = document.querySelector('.open-model-btn');
var model = document.querySelector('.model');
var iconClose = document.querySelector(".model_header i");
var btnClose = document.querySelector(".model_footer button");

function toggleModel() {
    model.classList.toggle('hide'); // toggle la them class neu nhu chua co, xoa class neu co
}

btnOpenModel.addEventListener('click', toggleModel);
iconClose.addEventListener('click', toggleModel);
btnClose.addEventListener('click', toggleModel);
model.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) toggleModel();
});
