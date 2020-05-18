var $window, $body;

var project2UI={
	navigation: function(){
		var $depth1=$("#GNB > ul > li");

		$depth1.hover(
			function(){
				$(this).parent().addClass("active");
			},
			function(){
				$(this).parent().removeClass("active");
			}
		);
		
		$depth1.focusin(function(){
			$(this).addClass("active");
		});
		$depth1.focusout(function(){
			$(this).removeClass("active");
		});
	},
	slider: function(){
		var $gallery=$(".gallery");

		var w;
		var total=4;
		var amount=0;

		$window.resize(function(){
			w=$window.width();

			if(w > 1200){
				distance=w;
			}
			else{
				distance=1200;
			}
			$(".hero .gallery").css({width:distance*total});
		});
		$window.trigger("resize");

		$(".direction_nav .left").click(function(e){ // 오른쪽으로 이동
			e.preventDefault();

			if($gallery.is(":animated")){
				return false;
			}

			$gallery.prepend($gallery.find("li").last());
			amount-=distance;
			$gallery.css({left:amount});
			

			amount+=distance;
			$gallery.animate({left:amount}, 500);
		});
		$(".direction_nav .right").click(function(e){ // 왼쪽으로 이동
			e.preventDefault();

			if($gallery.is(":animated")){
				return false;
			}

			amount-=distance;
			$gallery.animate({left:amount}, 500, function(){
				$(this).append($gallery.find("li").first());
				amount+=distance;
				$(this).css({left : amount});
			});
		});
	},
	noticeTab: function(){
		var tabN=0;
		$(".banner1_title li").eq(tabN).addClass("active");
		$(".banner1_text div").eq(tabN).addClass("active");

		$(".banner1_title li").click(function(e){
			e.preventDefault();
			tabN=$(this).index();
			$(".banner1_title li").removeClass("active");
			$(".banner1_text div").removeClass("active");
			$(".banner1_title li").eq(tabN).addClass("active");
			$(".banner1_text div").eq(tabN).addClass("active");
		});
	},
	searchCampus: function(){
		$(".btn_subject dt a").click(function(e){
			e.preventDefault();
			
			//하단 리스트가 보이지 않는 경우
			if($(this).parent().next("dd").css("display") == "none"){
				$(this).addClass("active");
				$(".btn_subject dd").slideUp(300);
				$(this).parent().next("dd").slideDown(300);
			}
			//하단 리스트가 보이는 경우
			else{
				$(this).removeClass("active");
				$(this).parent().next("dd").slideUp(300);
			}
			//$(this).toggleClass("active");
			//$(this).parent().next("dd").slideToggle(300);
		});
		var listName="";
		console.log(listName); //"name"

		$(".btn_subject dd a").click(function(e){
			e.preventDefault();
			var $dd=$(this).parent().parent().parent();
			listName=$(this).text();

			$dd.slideUp(300);
			$dd.prev("dt").find("a").removeClass("active");
			$dd.prev("dt").find("a").text(listName); //글자만 써서 text로
		});
	},
	sliderBanner: function(){
		var mediaN=0;
		var mediaPos=0;
		$(".event_pager li").eq(mediaN).addClass("active");

		$(".event_pager li").click(function(e){
			e.preventDefault();
			$(".event_pager li").removeClass("active");
			$(this).addClass("active");
			mediaN=$(this).index();
			mediaPos=mediaN*(-1)*368; // 368은 배너 가로 크기입니다.
			$(".event_moving").animate({left : mediaPos}, 300);
		});
	},
	footerBanner: function(){
		var pos=0; //배너 위피 변수
		var bannerW=164; //배너 가로 변수

		$(".btn_R").click(function(e){
			e.preventDefault();
			pos=pos-bannerW; //좌측 이동
			//this 키워드는 function() 상위 대상입니다.
			//여기서의 this는 >> .prev
			$(".banner_img ul").animate({left : pos}, 500, function(){
				//this >> .site_wrapper ul
				$(this).append($(this).find("li:first-child")); //처음 노드를 마지막에 배치
				pos=pos+bannerW; //우측 이동
				$(this).css({left : pos});
			});
		});
		$(".btn_L").click(function(e){
			e.preventDefault();
			$(".banner_img ul").prepend($(".banner_img ul li:last-child")); //마지막 노드를 처음에 배치
			pos=pos-bannerW; //좌측 이동
			$(".banner_img ul").css({left : pos});

			pos=pos+bannerW; //우측 이동
			$(".banner_img ul").animate({left : pos}, 500);
		});
	}
}

