import '../scss/main.scss'

require('../img/bimdata_logo.svg');

document.getElementById('themeSwitch').addEventListener('change', function(event){
  $(document.body).toggleClass('theme-dark');
});

