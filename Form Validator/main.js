const username = document.querySelector('#username');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const email = document.querySelector('#email');
const form = document.querySelector('form');

function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('success');
    parent.classList.add('error');
    small.innerText = message;
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    parent.classList.add('success');
    small.innerText = '';
}

function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();
        if (!input.value) {
            isEmptyError = true;
            showError(input, 'Không được để trống');
        } else {
            showSuccess(input);
        }
    });
    return isEmptyError;
}

function checkEmail(input) {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    input.value = input.value.trim();

    let isEmailError = !re.test(input.value);
    if (isEmailError) {
        showError(input, "Email không hợp lệ");
    } else {
        showSuccess(input);
    }
    return isEmailError;
}

function checkMatchPassword(passwordInput, confirmPasswordInput) {
    if (passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, "Mật khẩu không khớp");
        return true;
    } else {
        showSuccess(confirmPasswordInput);
        return false;
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const isEmpty = checkEmptyError([username, email, password, confirmPassword]);
    const isEmailInvalid = checkEmail(email);
    const isPasswordMismatch = checkMatchPassword(password, confirmPassword);

    // Nếu không có lỗi thì có thể submit form hoặc xử lý tiếp
    if (!isEmpty && !isEmailInvalid && !isPasswordMismatch) {
        // Xử lý submit ở đây
        alert('Đăng ký thành công!');
        form.reset();
        document.querySelectorAll('.form-control').forEach(control => {
            control.classList.remove('success');
        });
    }
});