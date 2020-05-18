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

		$(".direction_nav .left").click(function(e){ // ���������� �̵�
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
		$(".direction_nav .right").click(function(e){ // �������� �̵�
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
			
			//�ϴ� ����Ʈ�� ������ �ʴ� ���
			if($(this).parent().next("dd").css("display") == "none"){
				$(this).addClass("active");
				$(".btn_subject dd").slideUp(300);
				$(this).parent().next("dd").slideDown(300);
			}
			//�ϴ� ����Ʈ�� ���̴� ���
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
			$dd.prev("dt").find("a").text(listName); //���ڸ� �Ἥ text��
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
			mediaPos=mediaN*(-1)*368; // 368�� ��� ���� ũ���Դϴ�.
			$(".event_moving").animate({left : mediaPos}, 300);
		});
	},
	footerBanner: function(){
		var pos=0; //��� ���� ����
		var bannerW=164; //��� ���� ����

		$(".btn_R").click(function(e){
			e.preventDefault();
			pos=pos-bannerW; //���� �̵�
			//this Ű����� function() ���� ����Դϴ�.
			//���⼭�� this�� >> .prev
			$(".banner_img ul").animate({left : pos}, 500, function(){
				//this >> .site_wrapper ul
				$(this).append($(this).find("li:first-child")); //ó�� ��带 �������� ��ġ
				pos=pos+bannerW; //���� �̵�
				$(this).css({left : pos});
			});
		});
		$(".btn_L").click(function(e){
			e.preventDefault();
			$(".banner_img ul").prepend($(".banner_img ul li:last-child")); //������ ��带 ó���� ��ġ
			pos=pos-bannerW; //���� �̵�
			$(".banner_img ul").css({left : pos});

			pos=pos+bannerW; //���� �̵�
			$(".banner_img ul").animate({left : pos}, 500);
		});
	}
}

