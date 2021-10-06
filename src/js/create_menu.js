import menuTemplate  from '../templates/template_menu.hbs';


export default function create(menu) {
const menuList = document.querySelector('ul.js-menu');
    const MenuMarkup=creatingMenuMarkup(menu)
    menuList.insertAdjacentHTML('beforeend', MenuMarkup);

function creatingMenuMarkup(menu) {
    return menu.map(menuTemplate).join('');
};

}

        

 

