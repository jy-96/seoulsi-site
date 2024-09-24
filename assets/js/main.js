// 메인슬라이드
const mainSlide = new Swiper('.main-slide', {
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false, // 사용자가 직접 슬라이드 후 자동재생할지 안할지
    },
    navigation: {
        prevEl: '.prev',
        nextEl: '.next',
    },
    pagination: {
        el: ".fraction",
        type: "fraction" // pagination의 종류 설정(bullets, progressbar 등)
    },
})

// 주요뉴스, 시민참여
$('.sc-visual .slide-btn button').click(function(){
    idx = $(this).data('idx');
    $(this).addClass('on').siblings().removeClass('on');
    mainSlide.slideToLoop(idx);
})
mainSlide.on("slideChange", function(){
    if (this.realIndex >= 4) {
        $('.btn-citizen').addClass('on').siblings().removeClass('on');
    } else {
        $('.btn-news').addClass('on').siblings().removeClass('on');
    }
})

// 날씨, 닫기버튼
$('.weather-area .btn-close').click(function(e){
    e.preventDefault();
    $(this).siblings('.weather-layer').slideUp(200);
})




// 배너슬라이드
const bannerSlide = new Swiper(".banner-slide", {
	loop: true,
	autoplay: {
		delay: 2000,
        
        // 사용자가 직접 슬라이드 후 자동재생할지 안할지
		disableOnInteraction: false, 
	},
	slidesPerView: 3,
	spaceBetween: 43,
	navigation: {
		prevEl: ".prev",
		nextEl: ".next",
	},
	pagination: {
		el: ".fraction",
		type: "fraction", // pagination의 종류 설정(bullets, progressbar 등)
	},
});


//? 이 코드의 위치를 옮기니까 시민참여버튼이 on이 먹힌다
// 자동재생
slideArr = [mainSlide, bannerSlide];
$(".control .autoplay").click(function () {
	slideIdx = $(this).data("slide");
	if ($(this).hasClass("on")) {
		slideArr[slideIdx].autoplay.start();
	} else {
		slideArr[slideIdx].autoplay.stop();
	}
    
    // 이 코드 위치 중요
	$(this).toggleClass("on"); 
});


$('.sc-relate .btn-relate').click(function(){
    url = $(this).data("url");
    if (url) {
        window.open(url);
    }
    
    if ($(this).hasClass('on')) {
        $('.sc-relate .btn-relate').removeClass('on').siblings().slideUp(200);
    } else {
        $(".sc-relate .btn-relate").removeClass("on").siblings().slideUp(200);
        $(this).addClass('on').siblings().slideDown(200);

    }
})
$('.sc-relate .sub li:first-child').keydown(function(e){
    code = e.keyCode;
    if (code  === 9 && e.shiftKey) {
        $('.sc-relate .btn-relate').removeClass('on').siblings().slideUp();
    }
})
$(".sc-relate .sub li:last-child").keydown(function (e) {
	code = e.keyCode;
	if (code === 9 && !e.shiftKey) {
		$(".sc-relate .btn-relate").removeClass("on").siblings().slideUp();
	}
});



$(window).scroll(function(){
    curr = $(this).scrollTop();

    if (curr >= 10) {
        $(".fix-top").addClass("on");
    } else {
        $(".fix-top").removeClass("on");
    }
})

$(".fix-top").click(function () {
	// window.scrollTo({ top: 0, behavior: "smooth" });
    $("html, body").animate({ scrollTop: 0 },  200);
});