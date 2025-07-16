const content = document.querySelector('.search_input ul');
const input = document.querySelector('.search_input input');
const removeAllTags = document.querySelector('.remove_btn');

let tags = ['nodejs', 'reactjs'];


function renderTags() {
    content.innerHTML = ''
    tags.forEach((element, index) => {
        content.innerHTML += `
            <li>
                ${element}
                <i class='bx bx-x' data-index="${index}"></i>
            </li>
        `;
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

function removeTag(index){
    tags.splice(index, 1);
    renderTags();
}

input.addEventListener('keydown', (e) => {
    if(e.key == 'Enter' && input.value.trim() != ''){
        value = input.value.trim();
        if(!tags.includes(value)){
            tags.push(value);
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