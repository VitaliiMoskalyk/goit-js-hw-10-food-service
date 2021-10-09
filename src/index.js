import './sass/main.scss';
import switcherOfTheme from './js/theme-switcher';
import './js/create_menu';
import './js/selectors';


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

switcherOfTheme({ Theme });


