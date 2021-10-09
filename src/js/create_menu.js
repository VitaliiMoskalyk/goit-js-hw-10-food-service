import menuTemplate  from '../templates/template_menu.hbs';
import menu from '../menu_data/menu.json';
import menuList from './selectors';


const MenuMarkup=creatingMenuMarkup(menu)
    menuList.insertAdjacentHTML('beforeend', MenuMarkup);

function creatingMenuMarkup(menu) {
    return menu.map(menuTemplate).join('');
};


creatingMenuMarkup(menu);

 

