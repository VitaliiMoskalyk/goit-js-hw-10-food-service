import './sass/main.scss';
import menuTemplate  from './templates/template_menu.hbs';
import menu from './menu_data/menu.json';
import switcherOfTheme from './js/theme-switcher';

//---------------------------------------------------//
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
//--------------------------------------------------//

const menuList = document.querySelector('ul.js-menu');
const MenuMarkup=creatingMenuMarkup(menu);
    menuList.insertAdjacentHTML('beforeend', MenuMarkup);

function creatingMenuMarkup(menu) {
    return menu.map(menuTemplate).join('');
};

const themeSwitcher = document.querySelector('#theme-switch-toggle');
switcherOfTheme({ Theme,themeSwitcher });


