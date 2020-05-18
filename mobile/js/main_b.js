$(function(){
	/*header_tab_menu*/
	$(".tab_menu").click(function(e){
		e.preventDefault();
		$(".menu").addClass("active");
	});
	$(".close").click(function(e){
		e.preventDefault();
		$(".menu").removeClass("active");
		$("#gnb > ul > li").each(function(){
			if($(this).hasClass("active") == true){
				$(this).removeClass("active");
				$(this).find("ul").slideUp(300);
			}
		});
	});
	

	/* header_key */
	var video=document.getElementById("start");
	video.muted=true; 
	video.play(); 

	var winw;
	var winh;
	var videow, videoh; 

	$(window).resize(function(){
		$("#start").removeAttr("style"); 
		winw=$(window).width();
		winh=$(window).height();

		if(winw > winh){ //가로방향
			$("#start").css({"width" : winw});
			$("#start").css({"margin-left" : (-1)*winw/2});
			//$("#start").css({"margin-top" : -10}); 
		}
		else{ //세로방향
			$("#start").css({"height" : winh});
			videow=$("#start").width();
			$("#start").css({"margin-left" : (-1)*videow/2});
			//$("#start").css({"margin-top" : -30});
		}
	});
	$(window).trigger("resize");

	/*infor*/
	$(".info .info_btn .btn_title ul li a").click(function(e){
		e.preventDefault();

		if($(this).parent().hasClass("active") == false){
			$(".info .info_btn .btn_title ul li").removeClass("active");
			$(this).parent().addClass("active");
		}
		if($(this).hasClass("time") == true){
			$(".btn_text .time").show();
			$(".btn_text .tel").hide();
		}
		else{
			$(".btn_text .time").hide();
			$(".btn_text .tel").show();
		}
	});


	/*online*/
	$(".online").click(function(e){
		e.preventDefault();
		clickStatus=e.type;

		if($(this).hasClass("on") == false){
			//$(".online").removeClass("on");
			$(this).addClass("on");
			//$(".online_desc").slideUp(300);
			$(this).next(".online_desc").slideDown(300);
		}
		else{
			$(this).removeClass("on");
			$(this).next(".online_desc").slideUp(300);
		}
	});
	

	/*map*/
	$(".map").click(function(e){
		e.preventDefault();
		clickStatus=e.type;

		if($(this).hasClass("on") == false){
			//$(".online").removeClass("on");
			$(this).addClass("on");
			//$(".online_desc").slideUp(300);
			$(this).next(".map_desc").slideDown(300);
		}
		else{
			$(this).removeClass("on");
			$(this).next(".map_desc").slideUp(300);
		}
	});
});