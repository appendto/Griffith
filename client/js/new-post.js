$(document).ready(function () {
	var btn = '#submit',
		formSubmit = '#formSubmit';

	$(document).on('click', btn, function (e) {
		// Check if user is logged in
		if (! $(document).find('#login-sign-in-link').length > 0) {
			e.preventDefault();
			$(this).toggleClass('btn-open')
			$(document).find('#submitDiv').toggleClass('form-shown');
		}
	});

	$(document).on('click', formSubmit, function () {
		$(btn).removeClass('btn-open');
		$(document).find('#submitDiv').removeClass('form-shown');
		$(document).find('#submitDiv form')[0].reset();
	});

	
});