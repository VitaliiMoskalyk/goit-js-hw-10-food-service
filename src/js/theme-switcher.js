
export default function switchTheme({ Theme,themeSwitcher }) {
    
    themeSwitcher.addEventListener('input', toggerOfTheme);
    
    if (!localStorage.getItem('theme')) localStorage.setItem('theme', Theme.LIGHT);
    if (localStorage.getItem('theme') === Theme.DARK) themeSwitcher.checked = true;

    document.body.classList.add(localStorage.getItem('theme'));
    
        function toggerOfTheme(){
            document.body.classList.toggle(Theme.DARK,(themeSwitcher.checked));
            document.body.classList.toggle(Theme.LIGHT, (!themeSwitcher.checked));
            localStorage.setItem('theme', document.body.classList);    
} 
};
