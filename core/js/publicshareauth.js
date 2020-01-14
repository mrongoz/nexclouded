function ready(fn) {
	if (document.readyState !== 'loading') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

ready(function() {
	var passwordInput = document.getElementById('password');
	var passwordButton = document.getElementById('password-submit');
	var eventListener = function() {
		passwordButton.disabled = passwordInput.value.length === 0;
	};

	passwordInput.addEventListener('click', eventListener);
	passwordInput.addEventListener('keyup', eventListener);
	passwordInput.addEventListener('change', eventListener);
});
