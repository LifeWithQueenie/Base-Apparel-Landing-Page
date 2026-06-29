
document.addEventListener('DOMContentLoaded', function(){
	const form = document.querySelector('form');
	const email = form.querySelector('input[type="email"]');

	function showError(message){
		let err = form.querySelector('.error-message');
		if(err) err.remove();

		const div = document.createElement('div');
		div.className = 'error-message';
		div.textContent = message;
		form.insertAdjacentElement('afterend', div);
		email.classList.add('input-error');
	}

	function clearError(){
		const err = document.querySelector('.error-message');
		if(err) err.remove();
		email.classList.remove('input-error');
	}

	function isValidEmail(v){
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
	}

	form.addEventListener('submit', function(e){
		e.preventDefault();
		clearError();
		const val = email.value.trim();
		if(!val){
			showError('Please enter your email');
			return;
		}
		if(!isValidEmail(val)){
			showError('Please provide a valid email address');
			return;
		}

		alert('Thanks — you\'re subscribed!');
		form.reset();
	});

	
	email.addEventListener('input', function(){
		clearError();
	});
});

