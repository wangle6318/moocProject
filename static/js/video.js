$(function(){	
	collectVideo()
	commentVideoScore()
	pointUpvoteCpvote()
	replyAreaChoose()
})

function collectVideo(){
	var collectbtn = $(".video-collect > p > .video-like")
	collectbtn.on("click",function(){
		var cur_img = $(this).children("img").attr("src")
		var cur_char = cur_img.split(".")[0].split("-")[1]
		
//		console.log(cur_img)
//		console.log(cur_img.split(".")[0].split("-")[1])
//		console.log(cur_img.slice(-5))
//		console.log(cur_img.split("-")[0]+"-b.svg")
//		console.log($(this).text())
		
		if (cur_char == 'a') {
			cha_img = cur_img.split("-")[0]+"-b.svg"
			$(this).children("img").attr("src",cha_img);
			$(this).children("span").text("取消喜欢")
		} else{
			
			cha_img = cur_img.split("-")[0]+"-a.svg"
			$(this).children("img").attr("src",cha_img);
			$(this).children("span").text("点击喜欢")
		}
	})	
}

function commentVideoScore(){
	var scorebtn = $(".video-score > img");
	scorebtn.on("mouseover",function(){
		var score_val = $("#com-score").val()
		var cur = $(".video-score")
		if (score_val == "") {
			$(this).attr("src","static/img/star-b.svg").prevAll().attr("src","static/img/star-b.svg")
		} else{
			cur.children("img").attr("src","static/img/star-a.svg")
			$(this).attr("src","static/img/star-b.svg").prevAll().attr("src","static/img/star-b.svg")
		}
		
//		console.log(img_index);
//		console.log($("#com-score").val())
	})
	
	scorebtn.on("mouseleave",function(){
		var cur = $(".video-score")
		var score_val = $("#com-score").val()
		if (score_val == "") {
			$(this).attr("src","static/img/star-a.svg").siblings().attr("src","static/img/star-a.svg");
		} else{
			$(this).attr("src","static/img/star-a.svg").siblings().attr("src","static/img/star-a.svg");
			for(var i=0;i<score_val; i++){
				cur.children("img").eq(i).attr("src","static/img/star-b.svg")
			}
		}
	})
	
	scorebtn.on("click",function(){
		var img_index = $(this).index();
		$("#com-score").val(img_index)
		
		console.log($("#com-score").val())
	})
}



function pointUpvoteCpvote(){
	flag = 0
	var upbtn = $(".upvote > a")
	var cpbtn = $(".cpvote > a")
	
	upbtn.on("click",changeImg)
	cpbtn.on("click",changeImg)
	
//	upbtn.on("mouseover",mouseOverVote)
//	cpbtn.on("mouseover",mouseOverVote)
//	
//	upbtn.on("mouseleave",mouseLeaveVote)
//	cpbtn.on("mouseleave",mouseLeaveVote)
	
	
	function mouseLeaveVote(){
		var cur_img = $(this).children("img").attr("src")
		var cur_cha = cur_img.split("-")[1].split(".")[0]
		
		if (cur_cha == 'b') {
			cha_img = cur_img.split("-")[0] + "-a.svg";
			$(this).children("img").attr("src",cha_img)
		} else{
			return false;
		}
	}
	
	function mouseOverVote(){
		var cur_img = $(this).children("img").attr("src")
		var cur_cha = cur_img.split("-")[1].split(".")[0]
		
		if (cur_cha == 'a') {
			cha_img = cur_img.split("-")[0] + "-b.svg";
			$(this).children("img").attr("src",cha_img)
		} else{
			return false;
		}
	}
	
	function changeImg(){		
		var cur_img = $(this).children("img").attr("src")
//		console.log(cur_img)
		var cur_cha = cur_img.split("-")[1].split(".")[0]
		
		if (cur_cha == 'a') {
			if (flag == 1) {
				return false;
			}
			cha_img = cur_img.split("-")[0] + "-b.svg";
			$(this).children("img").attr("src",cha_img)
			flag = 1
		} else{
			cha_img = cur_img.split("-")[0] + "-a.svg";
			$(this).children("img").attr("src",cha_img)
			flag = 0
		}	
	}	
}

function replyAreaChoose(){
	var choosebtn = $(".comment-list-bottom > .reply")
	var area_str =  '<div class="reply-area">' +
					'<textarea name="" rows="" cols=""></textarea>' +
					'<p><a href="javascript:void(0);">回复</a></p>' +
					'</div>'
	
	choosebtn.on("click",function(){
		var cur_com = $(this).parentsUntil(".comment-list").eq(1)
		if (cur_com.children().hasClass("reply-area")) {
			cur_com.children(".reply-area").slideToggle(function(){
				$(this).remove(".reply-area");
			});
		}else{
			cur_com.append(area_str)
			cur_com.children(".reply-area").slideToggle();
		}
//		console.log(a)
	})
	
}
