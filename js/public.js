
 $(function() {

	$('.brand-origin-show').click(function() {
		$('#happy-skin').hide();
		$('#special-feature').hide();
		$('.navbar').removeClass('spceial_color');
		$('.navbar').addClass('origin_color');
		$('#brand-origin').show("slide", { direction: "left" }, 400);
		// window.scrollTo({ top: 0, behavior: 'smooth' });
	})

	$('.happy-skin-show').click(function() {
		$('#special-feature').hide();
		$('#brand-origin').hide();
		$('.navbar').removeClass('spceial_color');
		$('.navbar').removeClass('origin_color');
		$('#happy-skin').show("slide", { direction: "down" }, 10);
		// window.scrollTo({ top: 0, behavior: 'smooth' });
	})

	$('.special-feature-show').click(function() {
		$('#happy-skin').hide();
		$('#brand-origin').hide();
		$('.navbar').removeClass('origin_color');
		$('.navbar').addClass('spceial_color');
		$('#special-feature').show("slide", { direction: "right" }, 400);
		// window.scrollTo({ top: 0, behavior: 'smooth' });
	})

	$('.slick-items').slick({
		infinite: true,
		slidesToShow: 2,
  		slidesToScroll: 2,
		prevArrow:"<img class='a-left control-c prev slick-prev' src='img/arrow_l.svg'>",
      	nextArrow:"<img class='a-right control-c next slick-next' src='img/arrow_r.svg'>"
	});
	
	
	$('.btn_more').click(function() {
		$(".modal_mask").show();
		$('.modal_content').show();

		$(".modal_mask").click(function() {
			$(".modal_mask").hide();
			$('.modal_content').hide();	
		})
	})

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		
		if(scroll > ($('.banner').height() / 3)) {
			$('.slide-up-title').addClass('slide-up');
		}

		if(scroll > ($('.banner').height() / 2)) {
			$('.slide-up-itme-1').addClass('slide-up');
		}

		if(scroll > ($('.banner').height())) {
			$('.slide-up-itme-2').addClass('slide-up');
		}
		// if(scroll > ($('.happy_skin').offset().top)) {
		// 	$('.slide-up-title').addClass('slide-up');
		// }
	})
	
});
