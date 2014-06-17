$(document).ready(function () {
	var btn = '#submit';

	$(document).on('click', btn, function (e) {
		e.preventDefault();

		$(this).toggleClass('btn-open')

		$(document).find('.submit').toggleClass('form-shown');
	});
});