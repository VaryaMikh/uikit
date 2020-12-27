function toggleDropdown(event) {
	if (!event.target.parentElement.classList.contains('-active')) {
		closeAllDropdowns();
	}
	event.target.parentElement.classList.toggle('-active');
}

document.addEventListener('keyup', event => {
    if (event.keyCode === 27) {
        closeAllDropdowns();
    }

    if (event.keyCode === 38) {
        if (checkForFocusedDropdownElements(event.target)) {
            focusUp(event.target);
        }
    }

    if (event.keyCode === 40) {
        if (checkForFocusedDropdownElements(event.target)) {
            focusDown(event.target);
        }
    }
})


window.onclick = event => {
	if (!event.target.classList.contains('dropdown__toggler')) {
		closeAllDropdowns();
	}
}

function focusUp(target) {
	console.log('Here we go up');

	if (target.classList.contains('dropdown__menu-item')) {
		const menuParent = target.closest('.dropdown__menu');
		const nodes = Array.prototype.slice.call( menuParent.children );

		const menuItemIndx = nodes.indexOf(target.parentNode);
		const buttons = menuParent.getElementsByClassName('dropdown__menu-item');

		if (menuItemIndx > 0) {
			buttons[menuItemIndx - 1].focus();
		} else {
			buttons[buttons.length - 1].focus();
		}
	}
}

function focusDown(target) {
	console.log('Here we go down');

	if (target.classList.contains('dropdown__toggler')) {
		const parent = target.parentElement;
		const buttons = parent.getElementsByClassName('dropdown__menu-item');
		console.log(buttons[0]);
		buttons[0].focus();
	} else {
		const menuParent = target.closest('.dropdown__menu');
		const nodes = Array.prototype.slice.call( menuParent.children );

		const menuItemIndx = nodes.indexOf(target.parentNode);
		const buttons = menuParent.getElementsByClassName('dropdown__menu-item');
		if (menuParent.children.length - menuItemIndx > 1) {    
			buttons[menuItemIndx + 1].focus();
		} else {
			buttons[0].focus();
		}
	}
}

function checkForFocusedDropdownElements(target) {
	return target.classList.contains('dropdown__toggler') || target.classList.contains('dropdown__menu-item');
}

function closeAllDropdowns() {
	const dropdowns = document.getElementsByClassName('dropdown -active');
	if (!dropdowns || !dropdowns.length) {
		return;
	}

	if (dropdowns.length > 1) {
		[...dropdowns].forEach(dropdown => {
			dropdown.classList.remove('-active');
		})
	} else {
		dropdowns[0].classList.remove('-active');
	}
}