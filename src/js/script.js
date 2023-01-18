const addLocal = document.querySelector('.js-addLocal');
const getLocal = document.querySelector('.js-getLocal');
const removeLocal = document.querySelector('.js-removeLocal');
const addSession = document.querySelector('.js-addSession');
const removeSession = document.querySelector('.js-removeSession');

const KEY_LOCAL = 'onAddLocal';

addLocal.addEventListener('click', onAddLocal);
getLocal.addEventListener('click', onGetLocal);
removeLocal.addEventListener('click', onRemoveLocal);
addSession.addEventListener('click', onAddSession);

function onAddLocal() {
  const arr = [1, 2, 3, 4];
  //   const str = 'JSON Statham';
  localStorage.setItem(KEY_LOCAL, JSON.stringify(arr));
  //   localStorage.setItem(KEY_LOCAL, str);
}

function onGetLocal() {
  //   try {
  //     const result = JSON.parse(localStorage.getItem(KEY_LOCAL));
  //     result.forEach(item => console.log(item));
  //     console.log(result);
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     console.log('hello');
  //   }

  const result = JSON.parse(localStorage.getItem(KEY_LOCAL)) ?? [];
  result.forEach(item => console.log(item));
  console.log(result);
}

function onRemoveLocal() {
  //   localStorage.removeItem(KEY_LOCAL);
  localStorage.clear();
}

function onAddSession() {
  const obj = {
    name: 'User',
    getName() {
      console.log(`Hello, I'm ${this.name}`);
    },
  };
  sessionStorage.setItem('sessionStorage', JSON.stringify(obj));
}
