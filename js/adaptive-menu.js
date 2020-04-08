$(function () {

	$('.menuToggle').on('click', function () {
		$('.main-nav').slideToggle(500, function () {
			if ($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});

		// Спрятать мобильное меню после клика на пункте
		$('.main-nav__link').on('click', function () {
			$('.main-nav').hide(500);
		});
	});
});