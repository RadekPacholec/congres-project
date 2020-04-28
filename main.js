const mobileMenuActionsHandler = () => {
	const menuBtn = document.querySelector('#menu-btn'),
		  navMenu = document.querySelector('#nav-menu');

    let opened = false;
	
	const classActionTrigger = (addClassName, removeClassName) => {
		menuBtn.classList.remove(removeClassName);
		menuBtn.classList.add(addClassName);
	};
	
	const menuActionsTrigger = () => {
		opened = !opened;
        opened ? classActionTrigger('fa-times', 'fa-bars') : classActionTrigger('fa-bars', 'fa-times');
        navMenu.classList.toggle('nav-mobile-menu-active');
	};

    menuBtn.addEventListener('click', menuActionsTrigger);
};

window.addEventListener('load', mobileMenuActionsHandler);
