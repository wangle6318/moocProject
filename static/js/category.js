$(function(){
	pagerNumChange();
})

function pagerNumChange(){
	$(".ys-pager-item").on("click",function(){
		if($(this).hasClass("ys-cur-pager")){
			return false;
		}else{
			$(this).addClass("ys-cur-pager").siblings().removeClass("ys-cur-pager")
		}
	})
}

