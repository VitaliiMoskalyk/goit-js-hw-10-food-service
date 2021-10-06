import './sass/main.scss';
import switcherOfTheme from './js/theme-switcher';
import menu from './menu_data/menu.json';
import create from './js/create_menu';


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

switcherOfTheme({ Theme });


create(menu);