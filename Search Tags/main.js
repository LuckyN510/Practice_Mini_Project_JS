const content = document.querySelector('.search_input ul');
const input = document.querySelector('.search_input input');
const removeAllTags = document.querySelector('.remove_btn');
let tags = ['nodejs', 'reactjs'];

function renderTags() {
    content.innerHTML = '';
    tags.forEach((element, idx) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${element}
            <i class='bx bx-x' data-index="${idx}"></i>
        `;
        content.appendChild(li);
    });

    content.appendChild(input);
    input.focus();

    document.querySelectorAll('.bx-x').forEach(icon => {
        icon.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            removeTag(index);
        });
    });
}

function removeTag(index) {
    tags.splice(index, 1);
    renderTags();
}

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && input.value.trim() !== '') {
        const newTag = input.value.trim();
        if (!tags.includes(newTag)) {
            tags.push(newTag);
        }
        input.value = '';
        renderTags();
    }
});

removeAllTags.addEventListener('click', () => {
    tags = [];
    renderTags();
});

renderTags();
