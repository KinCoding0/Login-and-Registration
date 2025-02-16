const btnRegister = document.getElementById('btnRegister');
const btnLogin = document.getElementById('btnLogin');
const formRegistrator = document.getElementById('registrator');
const formLogin = document.getElementById('login');
const panel = document.getElementById('toggle-panel');
const container = document.getElementById('container');
btnRegister.querySelector('button').addEventListener('click', () => {
  container.classList.add('active');
});
btnLogin.querySelector('button').addEventListener('click', () => {
  container.classList.remove('active');
});
