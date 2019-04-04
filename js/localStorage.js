/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const deleteButton = document.getElementById('remove-storage');

const newArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
const data = JSON.parse(localStorage.getItem('items'));

data.forEach((item) => {
  makeList(item);
});

deleteButton.addEventListener('click', () => {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});
