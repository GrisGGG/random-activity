let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-change');
const changetheme = document.querySelector('#change-mode');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
};
const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
};
if (darkMode === 'enabled'){
    enableDarkMode();
};

darkModeToggle.addEventListener('click', themeDark);
changetheme.addEventListener('click', themeDark);

function themeDark (){
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled"){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
}

