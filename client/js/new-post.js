$(document).ready(function () {
	var btn = '#submit',
		formSubmit = '#formSubmit';

	$(document).on('click', btn, function (e) {
		e.preventDefault();

		$(this).toggleClass('btn-open')

		$(document).find('#submitDiv').toggleClass('form-shown');
	});

	$(document).on('click', formSubmit, function () {
		$(btn).removeClass('btn-open');
		$(document).find('#submitDiv').removeClass('form-shown');
	});
});