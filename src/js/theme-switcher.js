
export default function switchTheme({ Theme }) {
   const themeSwitcher = document.querySelector('#theme-switch-toggle');
   themeSwitcher.addEventListener('input', toggerOfTheme);

    themeSwitcher.checked = JSON.parse(localStorage.getItem('theme'));
    localStorage.setItem('theme',themeSwitcher.checked);
    
    themeSwitcher.checked ? document.body.classList.add(Theme.DARK) : document.body.classList.add(Theme.LIGHT);
    
        function toggerOfTheme(){
            document.body.classList.toggle(Theme.DARK,(themeSwitcher.checked));
            document.body.classList.toggle(Theme.LIGHT, (!themeSwitcher.checked));
            localStorage.setItem('theme', themeSwitcher.checked);
} 
};
