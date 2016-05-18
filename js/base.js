$(function(){
	
	//显示隐藏地区
	$('.area-check').mouseover(function(){
		$('.area-all').show();
	});
	$('.area-all').mouseleave(function(){
		$(this).hide();		
	});
	
})
