AOS.init({
	duration: 800,
	easing: 'slide'
});

(function($) {

   "use strict";

   var isMobile = {
	   Android: function() {
		   return navigator.userAgent.match(/Android/i);
	   },
		   BlackBerry: function() {
		   return navigator.userAgent.match(/BlackBerry/i);
	   },
		   iOS: function() {
		   return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	   },
		   Opera: function() {
		   return navigator.userAgent.match(/Opera Mini/i);
	   },
		   Windows: function() {
		   return navigator.userAgent.match(/IEMobile/i);
	   },
		   any: function() {
		   return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	   }
   };


   $(window).stellar({
   responsive: true,
   parallaxBackgrounds: true,
   parallaxElements: true,
   horizontalScrolling: false,
   hideDistantElements: false,
   scrollProperty: 'scroll'
 });


   var fullHeight = function() {

	   $('.js-fullheight').css('height', $(window).height());
	   $(window).resize(function(){
		   $('.js-fullheight').css('height', $(window).height());
	   });

   };
   fullHeight();

   // loader
   var loader = function() {
	   setTimeout(function() { 
		   if($('#ftco-loader').length > 0) {
			   $('#ftco-loader').removeClass('show');
		   }
	   }, 1);
   };
   loader();

// Product Modal Functions (Đã sửa màu)
function openProductModal(imgSrc, title, price, description) {
   const modal = document.getElementById('productModal');
   const modalImg = document.getElementById('modalImage');
   const modalTitle = document.getElementById('modalTitle');
   const modalPrice = document.getElementById('modalPrice');
   const modalDesc = document.getElementById('modalDescription');

   modalImg.src = imgSrc;
   modalTitle.textContent = title;
   modalPrice.textContent = price; // Đảm bảo giá không có màu mặc định từ JS
   modalPrice.style.color = '#CF0106'; // Thay đổi màu giá thành đỏ đậm
   modalDesc.innerHTML = description;
   modal.style.display = 'block';
}

function closeProductModal() {
   const modal = document.getElementById('productModal');
   modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
   const modal = document.getElementById('productModal');
   if (event.target == modal) {
	   modal.style.display = 'none';
   }
}

// Initialize product click handlers
document.addEventListener('DOMContentLoaded', function() {
   const products = document.querySelectorAll('.product');

   products.forEach(product => {
	   product.addEventListener('click', function(e) {
		   e.preventDefault();

		   const imgSrc = this.querySelector('img').src;
		   const title = this.querySelector('h3 a').textContent;
		   const priceElement = this.querySelector('.price');
		   let price = '';

		   if (priceElement.querySelector('.price-sale')) {
			   price = priceElement.querySelector('.price-sale').textContent;
		   } else {
			   price = priceElement.querySelector('span').textContent;
		   }

		   // Cập nhật phần mô tả sản phẩm
		   const descriptions = {
			   'Cá Hồi Mayo': '🥢 <b>𝑶𝒏𝒊𝒃𝒊𝒕𝒆?</b> – Chỉ ~150 kcal nhưng vẫn đủ tinh bột, đạm, chất béo & chất xơ để khởi động ngày mới!<br><br>' +
							  '🍙 <b>Vì Sao Chọn Cá Hồi Mayo?</b><br>' +
							  '✅ Tinh bột từ gạo dẻo – Năng lượng bền vững, không gây nặng bụng.<br>' +
							  '✅ 15-20g đạm từ cá hồi – Giúp não bộ tỉnh táo, tập trung.<br>' +
							  '✅ Chất béo tốt từ xốt mayo – Hấp thụ dinh dưỡng hiệu quả.<br>' +
							  '✅ Chất xơ từ rong biển – Hỗ trợ tiêu hóa, giúp cơ thể khỏe mạnh.<br>' +
							  '✅ Tiện lợi tối đa – Ăn nhanh, không lo dầu mỡ!',
			   
			   'Cá Ngừ Mayo': '🥢 <b>𝑶𝒏𝒊𝒃𝒊𝒕𝒆?</b> – Chỉ ~150 kcal nhưng vẫn đầy đủ dưỡng chất!<br><br>' +
							 '🍙 <b>Vì Sao Chọn Cá Ngừ Mayo?</b><br>' +
							 '✅ Cá ngừ giàu Omega-3 – Tốt cho trí não & tim mạch.<br>' +
							 '✅ Tinh bột từ gạo dẻo – Nạp năng lượng nhanh mà không nặng bụng.<br>' +
							 '✅ Xốt mayo béo ngậy – Giúp hấp thu dinh dưỡng tối ưu.<br>' +
							 '✅ Rong biển bổ sung chất xơ – Tốt cho tiêu hóa.<br>' +
							 '✅ Tiện lợi – Ăn ngay, không lo dầu mỡ!',
			   
			   'Tôm Thịt Mayo': '🥢 <b>𝑶𝒏𝒊𝒃𝒊𝒕𝒆?</b> – Đầy đủ tinh bột, đạm, chất béo & chất xơ chỉ trong ~150 kcal!<br><br>' +
								'🍙 <b>Vì Sao Chọn Tôm Thịt Mayo?</b><br>' +
								'✅ Đạm từ tôm và thịt – Cung cấp năng lượng dồi dào.<br>' +
								'✅ Xốt mayo béo ngậy – Giúp hấp thu dinh dưỡng hiệu quả.<br>' +
								'✅ Rong biển & rau củ – Bổ sung chất xơ, hỗ trợ tiêu hóa.<br>' +
								'✅ Tinh bột từ gạo Nhật – Không gây đầy bụng.<br>' +
								'✅ Tiện lợi – Dễ ăn, nhanh chóng, không lo dầu mỡ!',
			   
			   'Gà Teriyaki': '🥢 <b>𝑶𝒏𝒊𝒃𝒊𝒕𝒆?</b> – Một lựa chọn cân bằng dinh dưỡng chỉ với ~150 kcal!<br><br>' +
							  '🍙 <b>Vì Sao Chọn Gà Teriyaki?</b><br>' +
							  '✅ Gà sốt Teriyaki đậm đà – Giàu protein giúp cơ thể tràn đầy năng lượng.<br>' +
							  '✅ Gạo Nhật dẻo thơm – Hấp thu nhanh mà không nặng bụng.<br>' +
							  '✅ Xốt mayo bổ sung chất béo tốt – Không lo tăng cân.<br>' +
							  '✅ Rong biển tươi – Tăng chất xơ, hỗ trợ tiêu hóa.<br>' +
							  '✅ Dễ mang theo – Ăn gọn nhẹ, không cần hâm nóng!',
			   
			   'Xúc xích Mayo': '🥢 <b>𝑶𝒏𝒊𝒃𝒊𝒕𝒆?</b> – Chỉ ~150 kcal nhưng vẫn cung cấp đủ dưỡng chất cho bữa sáng!<br><br>' +
							   '🍙 <b>Vì Sao Chọn Xúc Xích Mayo?</b><br>' +
							   '✅ Xúc xích giàu đạm – Giúp duy trì năng lượng lâu dài.<br>' +
							   '✅ Tinh bột từ gạo Nhật – Tiêu hóa dễ dàng, không gây đầy bụng.<br>' +
							   '✅ Xốt mayo béo ngậy – Tăng hấp thu vitamin và khoáng chất.<br>' +
							   '✅ Rong biển – Giàu chất xơ, hỗ trợ tiêu hóa.<br>' +
							   '✅ Nhanh gọn – Ăn nhanh, tiện lợi, không lo dầu mỡ!'
		   };

		   const description = descriptions[title] || '🥢 <b>𝑶𝒏𝒊𝒃𝒊𝒕𝒆?</b> – Bữa sáng thông minh với chỉ ~150 kcal nhưng vẫn đủ dinh dưỡng!<br><br>' +
							   '✅ Tinh bột từ gạo Nhật – Nạp năng lượng nhanh.<br>' +
							   '✅ 15-20g đạm từ cá, gà, tôm… – Giúp não bộ tỉnh táo.<br>' +
							   '✅ Chất béo tốt từ xốt mayo – Không lo béo phì.<br>' +
							   '✅ Chất xơ từ rong biển – Hỗ trợ tiêu hóa.<br>' +
							   '✅ Siêu tiện lợi – Ăn nhanh, không mất thời gian!';

		   openProductModal(imgSrc, title, price, description);
	   });
   });
});


   // Scrollax
  $.Scrollax();

   var carousel = function() {
	   $('.home-slider').owlCarousel({
	   loop:true,
	   autoplay: true,
	   margin:0,
	   animateOut: 'fadeOut',
	   animateIn: 'fadeIn',
	   nav:false,
	   autoplayHoverPause: false,
	   items: 1,
	   navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	   responsive:{
		 0:{
		   items:1
		 },
		 600:{
		   items:1
		 },
		 1000:{
		   items:1
		 }
	   }
	   });
	   $('.carousel-testimony').owlCarousel({
		   center: true,
		   loop: true,
		   items:1,
		   margin: 30,
		   stagePadding: 0,
		   nav: false,
		   navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
		   responsive:{
			   0:{
				   items: 1
			   },
			   600:{
				   items: 3
			   },
			   1000:{
				   items: 3
			   }
		   }
	   });
	   $('.carousel-founders').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});

   };
   carousel();

   $('nav .dropdown').hover(function(){
	   var $this = $(this);
	   // 	 timer;
	   // clearTimeout(timer);
	   $this.addClass('show');
	   $this.find('> a').attr('aria-expanded', true);
	   // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
	   $this.find('.dropdown-menu').addClass('show');
   }, function(){
	   var $this = $(this);
		   // timer;
	   // timer = setTimeout(function(){
		   $this.removeClass('show');
		   $this.find('> a').attr('aria-expanded', false);
		   // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
		   $this.find('.dropdown-menu').removeClass('show');
	   // }, 100);
   });


   $('#dropdown04').on('show.bs.dropdown', function () {
	 console.log('show');
   });

   // scroll
   var scrollWindow = function() {
	   $(window).scroll(function(){
		   var $w = $(this),
				   st = $w.scrollTop(),
				   navbar = $('.ftco_navbar'),
				   sd = $('.js-scroll-wrap');

		   if (st > 150) {
			   if ( !navbar.hasClass('scrolled') ) {
				   navbar.addClass('scrolled');	
			   }
		   } 
		   if (st < 150) {
			   if ( navbar.hasClass('scrolled') ) {
				   navbar.removeClass('scrolled sleep');
			   }
		   } 
		   if ( st > 350 ) {
			   if ( !navbar.hasClass('awake') ) {
				   navbar.addClass('awake');	
			   }
			   
			   if(sd.length > 0) {
				   sd.addClass('sleep');
			   }
		   }
		   if ( st < 350 ) {
			   if ( navbar.hasClass('awake') ) {
				   navbar.removeClass('awake');
				   navbar.addClass('sleep');
			   }
			   if(sd.length > 0) {
				   sd.removeClass('sleep');
			   }
		   }
	   });
   };
   scrollWindow();

   
   var counter = function() {
	   
	   $('#section-counter').waypoint( function( direction ) {

		   if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

			   var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
			   $('.number').each(function(){
				   var $this = $(this),
					   num = $this.data('number');
					   console.log(num);
				   $this.animateNumber(
					 {
					   number: num,
					   numberStep: comma_separator_number_step
					 }, 7000
				   );
			   });
			   
		   }

	   } , { offset: '95%' } );

   }
   counter();

   var contentWayPoint = function() {
	   var i = 0;
	   $('.ftco-animate').waypoint( function( direction ) {

		   if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
			   
			   i++;

			   $(this.element).addClass('item-animate');
			   setTimeout(function(){

				   $('body .ftco-animate.item-animate').each(function(k){
					   var el = $(this);
					   setTimeout( function () {
						   var effect = el.data('animate-effect');
						   if ( effect === 'fadeIn') {
							   el.addClass('fadeIn ftco-animated');
						   } else if ( effect === 'fadeInLeft') {
							   el.addClass('fadeInLeft ftco-animated');
						   } else if ( effect === 'fadeInRight') {
							   el.addClass('fadeInRight ftco-animated');
						   } else {
							   el.addClass('fadeInUp ftco-animated');
						   }
						   el.removeClass('item-animate');
					   },  k * 50, 'easeInOutExpo' );
				   });
				   
			   }, 100);
			   
		   }

	   } , { offset: '95%' } );
   };
   contentWayPoint();


   // navigation
   var OnePageNav = function() {
	   $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
			e.preventDefault();

			var hash = this.hash,
					navToggler = $('.navbar-toggler');
			$('html, body').animate({
		   scrollTop: $(hash).offset().top
		 }, 700, 'easeInOutExpo', function(){
		   window.location.hash = hash;
		 });


		 if ( navToggler.is(':visible') ) {
			 navToggler.click();
		 }
	   });
	   $('body').on('activate.bs.scrollspy', function () {
		 console.log('nice');
	   })
   };
   OnePageNav();


   // magnific popup
   $('.image-popup').magnificPopup({
   type: 'image',
   closeOnContentClick: true,
   closeBtnInside: false,
   fixedContentPos: true,
   mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	gallery: {
	 enabled: true,
	 navigateByImgClick: true,
	 preload: [0,1] // Will preload 0 - before current, and 1 after the current image
   },
   image: {
	 verticalFit: true
   },
   zoom: {
	 enabled: true,
	 duration: 300 // don't foget to change the duration also in CSS
   }
 });

 $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
   disableOn: 700,
   type: 'iframe',
   mainClass: 'mfp-fade',
   removalDelay: 160,
   preloader: false,

   fixedContentPos: false
 });



   var goHere = function() {

	   $('.mouse-icon').on('click', function(event){
		   
		   event.preventDefault();

		   $('html,body').animate({
			   scrollTop: $('.goto-here').offset().top
		   }, 500, 'easeInOutExpo');
		   
		   return false;
	   });
   };
   goHere();


   function makeTimer() {

	   var endTime = new Date("7 March 2025 23:59:00 GMT+01:00");			
	   endTime = (Date.parse(endTime) / 1000);

	   var now = new Date();
	   now = (Date.parse(now) / 1000);

	   var timeLeft = endTime - now;

	   var days = Math.floor(timeLeft / 86400); 
	   var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
	   var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
	   var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

	   if (hours < "10") { hours = "0" + hours; }
	   if (minutes < "10") { minutes = "0" + minutes; }
	   if (seconds < "10") { seconds = "0" + seconds; }

	   $("#days").html(days + "<span style='color: #CF0106;'>Ngày</span>");
	   $("#hours").html(hours + "<span style='color: #CF0106;'>Giờ</span>");
	   $("#minutes").html(minutes + "<span style='color: #CF0106;'>Phút</span>");
	   $("#seconds").html(seconds + "<span style='color: #CF0106;'>Giây</span>");	

}

setInterval(function() { makeTimer(); }, 1000);



})(jQuery);
$(document).ready(function() {
	setInterval(function() {
	  $('.time').css('color', '#CF0106 !important');
	}, 100); // Cập nhật mỗi 100ms để đảm bảo màu luôn đỏ
  });