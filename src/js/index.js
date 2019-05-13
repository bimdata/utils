import '../scss/main.scss'

require('../img/bimdata_logo.svg');

const toggleSwitch = document.querySelector('#themeSwitch');
const body = document.querySelector('body');
let isDark = '';

document.addEventListener('DOMContentLoaded', function(){
  isDark = localStorage.getItem('state-dark');
  if(isDark == 'Dark'){
    toggleSwitch.setAttribute('checked', true);
    body.classList.add('theme-dark');
  }
  else{
    toggleSwitch.removeAttribute('checked');
    body.classList.remove('theme-dark');
  }

  toggleSwitch.onchange = (e) => {
    if(e.currentTarget.checked){
      body.classList.add('theme-dark');
      isDark = 'Dark';
    }
    else{
      body.classList.remove('theme-dark');
      isDark = '';
    }
    localStorage.setItem('state-dark', isDark);
  }
});
