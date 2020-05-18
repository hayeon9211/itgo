$(function(){
	//전역변수 대입
	$window=$(window);
	$body=$("body");

	//명령어 호출
	project2UI.navigation();
	project2UI.slider();
	project2UI.noticeTab();
	project2UI.searchCampus();
	project2UI.sliderBanner();
	project2UI.footerBanner();
});