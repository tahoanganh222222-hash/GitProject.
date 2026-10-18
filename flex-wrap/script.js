const select = document.querySelector('#wrap-select');
const container = document.querySelector('#demo-container');
const currentValue = document.querySelector('#current-value');
const resultNote = document.querySelector('#result-note');

const descriptions = {
    wrap: 'Các item được phép xuống dòng mới khi không đủ chỗ.',
    nowrap: 'Tất cả item ở trên một dòng; có thể cuộn ngang để xem phần bị tràn.',
    'wrap-reverse': 'Các dòng được xếp theo hướng ngược của cross axis; thứ tự item vẫn giữ nguyên.',
    initial: 'flex-wrap trở về giá trị ban đầu là nowrap.'
};

function updateDemo() {
    const value = select.value;
    container.classList.remove('is-wrap', 'is-nowrap', 'is-wrap-reverse', 'is-initial');
    container.classList.add(`is-${value}`);
    currentValue.textContent = `flex-wrap: ${value};`;
    resultNote.textContent = descriptions[value];
}

select.addEventListener('change', updateDemo);
updateDemo();
