$(function(){
	/* 1) navigation */
	/*var menuH=400;
	$("nav > ul > li").hover(
		function(){
			$(this).addClass("actvie");
			$("nav").stop().animate({height : 400}, 300);
		},
		function(){
			$(this).removeClass("active");
			$("nav").stop().animate({height:menuH}, 300);
		}
	);
	$("nav > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");

		if($(this).parent().index() == 0){
			$("nav").stop().animate({height:menuH}, 300);
		}
	});
	
	$(window).trigger("resize");
	
	var total=$("nav > ul > li").length; 
	$("nav li li:last-child a").focusout(function(){
		var $depth1Li=$(this).parent().parent().parent();

		$depth1Li.removeClass("active");

		if($depth1Li.index() == (total-1)){
			$("nav").stop().animate({height:menuH}, 300);
		}
	});*/

	$("#GNB > ul > li").hover(
		function(){
			$(this).parent().addClass("active");
		},
		function(){
			$(this).parent().removeClass("active");
		}
	);
	
	$("#GNB > ul > li").focusin(function(){
		$(this).addClass("active");
	});
	$("#GNB > ul > li").focusout(function(){
		$(this).removeClass("active");
	});

	/*
	$("#GNB > ul > li:first-child").focusin(function(){
		$(this).parent().addClass("active");
	});
	$("#GNB li:last-child li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("active");
		$(this).parent().parent().parent().removeClass("active");
	});
	*/

	/* 2) keyvisual */
	var w;
	var total=4;
	var amount=0;

	$(window).resize(function(){
		w=$(window).width();

		if(w > 1200){
			distance=w;
		}
		else{
			distance=1200;
		}
		$(".hero .gallery").css({width:distance*total});
	});
	$(window).trigger("resize");

	$(".direction_nav .left").click(function(e){ // ���������� �̵�
		e.preventDefault();

		if($(".gallery").is(":animated")){
			return false;
		}

		$(".gallery").prepend($(".gallery li").last());
		amount-=distance;
		$(".gallery").css({left:amount});
		

		amount+=distance;
		$(".gallery").animate({left:amount}, 500);
	});
	$(".direction_nav .right").click(function(e){ // �������� �̵�
		e.preventDefault();

		if($(".gallery").is(":animated")){
			return false;
		}

		amount-=distance;
		$(".gallery").animate({left:amount}, 500, function(){
			$(this).append($(".gallery li").first());
			amount+=distance;
			$(this).css({left : amount});
		});
	});
	//3) ��������/�����ϴ����� ��
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

	//4) ķ�۽� ã��
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
	//console.log($dd); //������ ������, �۵��� ��

	//4) �����̴� ���
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

	//5) footer banner
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

});