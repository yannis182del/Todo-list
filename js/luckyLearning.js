/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function randomLearning() {
  const randomNumber = Math.floor(Math.random() * luckyLearning.length);
  const li = document.createElement('li');

  li.innerHTML = ` ${luckyLearning[randomNumber]}`;
  li.className = 'web';
  ul.insertBefore(li, ul.firstChild);
  content.value = '';

  li.addEventListener('click', () => {
    li.className = 'done';
    ul.appendChild(li);

    if (li.className === 'done') {
      li.addEventListener('click', () => {
        ul.removeChild(li);
      });
    }
  });
}
