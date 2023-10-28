const btnDarkMode = document.querySelector('.dark-mode-btn');
const section = document.querySelector('.section');


// 1. Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
	btnDarkMode.classList.add('dark-mode-btn--active');
	document.body.classList.add('dark');
}

// 2. Проверка темной темы в local storage
if (localStorage.getItem('darkMode') === 'dark') {
	btnDarkMode.classList.add('dark-mode-btn--active');
	document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
	btnDarkMode.classList.remove('dark-mode-btn--active');
	document.body.classList.remove('dark');
}


// Меняем тему при изменении системных настроек
window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener('change', (event) => {
		const newColorScheme = event.matches ? "dark" : "light";

		if (newColorScheme === 'dark') {
			btnDarkMode.classList.add('dark-mode-btn--active');
			document.body.classList.add('dark');
		} else {
			btnDarkMode.classList.remove('dark-mode-btn--active');
			document.body.classList.remove('dark');
		}
	})

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
	btnDarkMode.classList.toggle('dark-mode-btn--active');
	section.classList.toggle('dark');
	
	const isDark = document.body.classList.toggle('dark');

	if (isDark) {
		localStorage.setItem('darkMode', 'dark');
	} else {
		localStorage.setItem('darkMode', 'light');
	}
}