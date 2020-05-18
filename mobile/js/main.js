

var project2M={
	/*header_tab_menu*/

	tabMenu: function(){
		$(".tab_menu").click(function(e){
			e.preventDefault();
			$(".menu").addClass("active");
		});
		$(".close").click(function(e){
			e.preventDefault();
			$(".menu").removeClass("active");
			$("#gnb > ul > li ").each(function(){
				if($(this).hasClass("active") == true){
					$(this).removeClass("active");
					$(this).find("ul").slideUp(300);
				}
			});
		});
	
		$("#gnb .gnb_inner > ul > li").click(function(e){
			e.preventDefault();
			if($(this).hasClass("active") == false){
				$("#gnb .gnb_inner > ul > li").removeClass("active");
				$(this).addClass("active");
				$(".sub").removeClass("active");
				$(this).find(".sub").addClass("active");
			}else{
				$(this).removeClass("active");
				$(this).find(".sub").removeClass("active");
			}
		});
	},


	/*notice&qna*/
	notice: function(){
		$(".banner_btn li a").click(function(e){
			e.preventDefault();

			if($(this).parent().hasClass("active") == false){
				$(".banner_btn li").removeClass("active");
				$(this).parent().addClass("active");
			}
			if($(this).hasClass("notice") == true){
				$(".banner_list .noti_list").show();
				$(".banner_list .qna_list").hide();
			}
			else{
				$(".banner_list .noti_list").hide();
				$(".banner_list .qna_list").show();
			}
		});
	},
	
	/*help_online*/
	online: function(){
		$(".online").click(function(e){
			e.preventDefault();
			clickStatus=e.type;

			if($(this).hasClass("on") == false){
				$(this).addClass("on");
				$(this).next(".on_desc").slideDown(300);
			}
			else{
				$(this).removeClass("on");
				$(this).next(".on_desc").slideUp(300);
			}
		});
	},
};