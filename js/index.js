/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const ul = document.getElementsByTagName('ul')[0];
const content = document.querySelector('input');
const form = document.querySelector('form');

const makeList = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
  ul.insertBefore(li, ul.firstChild);
  content.value = '';

  if (li.textContent.match(/react/i)) {
    li.className = 'react';
  }
  if (li.textContent.match(/vue/i)) {
    li.className = 'vue';
  }
  if (li.textContent.match(/javascript/i)) {
    li.className = 'javascript';
  }
  li.addEventListener('click', () => {
    li.className = 'done';
    ul.appendChild(li);
    if (li.className === 'done') {
      li.addEventListener('click', () => {
        ul.removeChild(li);
      });
    }
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (content.value === '') {
    content.placeholder = 'Please enter something';
  } else {
    newArray.push(content.value);
    localStorage.setItem('items', JSON.stringify(newArray));
    makeList(content.value);
  }
});
