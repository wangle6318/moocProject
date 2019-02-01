$(function(){
	IndexAction()
	
})

function IndexAction(){
	change_login_style();
	LoginView();
	RegisterView();
	
	function change_login_style(){
		var c = $(".top-title")
		c.on("click",".mooc-login-wraper > .mooc-login-top > p > span",function(){
			var login = $(".mooc-login-mid > div")
			if($(this).hasClass("login-bottom-border")){
				return false;
			}else{
				$(this).addClass("login-bottom-border").siblings().removeClass("login-bottom-border")
				login.eq($(this).index()).css({
					"display":"block"
				}).siblings().css({
					"display":"none"
				})
			}
		})
	}
	
	function LoginView(){
		var _mooc_wraper_str = '<div class="mooc-login-wraper">'+
						        	'<div class="wraper-close">'+
							        	'<img src="img/close.svg"/>'+
									'</div>'+
									'<div class="mooc-login-top">'+
										'<p><span class="login-bottom-border">手机登陆</span><span>邮箱登陆</span><span>账号登陆</span></p>'+
									'</div>'+
									'<div class="mooc-login-mid">'+
										'<div class="phone-login" style="display: block;">'+
											'<form action="." method="post">'+
												'<ul class="login-form">'+
													'<li>'+
														'<input class="login-input" type="text" name="" id="" value="" placeholder="请输入手机号"/>'+
													'</li>'+
													'<li>'+
														'<input class="login-code" type="text" name="" id="" value="" placeholder="请输入验证码"/>'+
														'<button class="code-btn">获取验证码</button>'+
													'</li>'+
													'<li>'+
														'<input class="login-submit" type="submit" value="登陆"/>'+			
													'</li>'+
													'<li>'+
														'<p><a href="javascript:void(0);">去注册</a></p>'+
													'</li>'+
												'</ul>'+
											'</form>'+
										'</div>'+
										'<div class="email-login" style="display: none;">'+
											'<form action="." method="post">'+
												'<ul class="login-form">'+
													'<li>'+
														'<input class="login-input" type="text" name="" id="" value="" placeholder="网易邮箱/常用邮箱"/>'+
													'</li>'+
													'<li>'+
														'<input class="login-code" type="text" name="" id="" value="" placeholder="请输入验证码"/>'+
														'<button class="code-btn">获取验证码</button>'+
													'</li>'+
													'<li>'+
														'<input class="login-submit" type="submit" value="登陆"/>'+				
													'</li>'+
													'<li>'+
														'<p><a href="javascript:void(0);">去注册</a></p>'+
													'</li>'+
												'</ul>'+
											'</form>'+
										'</div>'+
										'<div class="acct-login" style="display: none;">'+
											'<form action="login" method="post" id="form1">'+
												'<ul class="login-form">'+
													'<li>'+
														'<input class="login-input" type="text" name="" id="" value="" placeholder="请输入账号"/>'+
													'</li>'+
													'<li>'+
														'<input class="login-input" type="text" name="" id="" value="" placeholder="请输入密码"/>'+
													'</li>'+
													'<li>'+
														'<input class="login-submit" type="submit" value="登陆" style="cursor: pointer"/>'+
													'</li>'+
													'<li>'+
														'<p><a href="javascript:void(0);">去注册</a></p>'+
													'</li>'+
												'</ul>'+
											'</form>'+
										'</div>'+
									'</div>'+
									'<div class="mooc-login-bot">'+
										'<p>'+
											'<span>其它登陆方式</span>'+
											'<a href=""><img src="img/qq.png"/></a>'+
											'<a href=""><img src="img/wechat.png"/></a>'+
											'<a href=""><img src="img/miniblog.png"/></a>'+
										'</p>'+
									'</div>'+
								'</div>'
		var _mooc_all_str = '<div class="mooc-all">'+
						'</div>'
		
		
		var o = $(".top-login > a")
		var c = $(".top-title")
		
		o.on("click",function(){
			$("body").append(_mooc_all_str)
			c.append(_mooc_wraper_str)
		})
				
		c.on("click",".wraper-close > img",function(){
			c.children(".mooc-login-wraper").remove()	
			$("body").children(".mooc-all").remove()
		})
	}
	
	function RegisterView(){
		var _rtop_phone_str = '<div class=".mooc-register-wraper">'+
						        	'<div class="wraper-close">'+
							        	'<img src="img/close.svg"/>'+
									'</div>'+
									'<div class="mooc-login-top">'+
										'<p><span class="login-bottom-border">手机号注册</span></p>'+
									'</div>'+
									'<div class="mooc-login-mid">'
									
		var _rtop_email_str = '<div class=".mooc-register-wraper">'+
						        	'<div class="wraper-close">'+
							        	'<img src="img/close.svg"/>'+
									'</div>'+
									'<div class="mooc-login-top">'+
										'<p><span class="login-bottom-border">邮箱注册</span></p>'+
									'</div>'+
									'<div class="mooc-login-mid">'
		
		var _rtop_acct_str = '<div class=".mooc-register-wraper">'+
						        	'<div class="wraper-close">'+
							        	'<img src="img/close.svg"/>'+
									'</div>'+
									'<div class="mooc-login-top">'+
										'<p><span class="login-bottom-border">账号注册</span></p>'+
									'</div>'+
									'<div class="mooc-login-mid">'
		
		var _rtype_phone_str = '<div class="phone-login" style="display: block;">'+
							'<form action="." method="post">'+
								'<ul class="login-form">'+
									'<li>'+
										'<input class="login-input" type="text" name="" id="" value="" placeholder="请输入手机号"/>'+
									'</li>'+
									'<li>'+
										'<input class="login-code" type="text" name="" id="" value="" placeholder="请输入验证码"/>'+
										'<button class="code-btn">获取验证码</button>'+
									'</li>'+
									'<li>'+
										'<input class="login-submit" type="submit" value="注册并登陆"/>'+			
									'</li>'+
								'</ul>'+
							'</form>'+
						'</div>'
		
		var _rtype_email_str = '<div class="email-login" style="display: block;">'+
							'<form action="." method="post">'+
								'<ul class="login-form">'+
									'<li>'+
										'<input class="login-input" type="text" name="" id="" value="" placeholder="请输入邮箱号"/>'+
									'</li>'+
									'<li>'+
										'<input class="login-code" type="text" name="" id="" value="" placeholder="请输入验证码"/>'+
										'<button class="code-btn">获取验证码</button>'+
									'</li>'+
									'<li>'+
										'<input class="login-submit" type="submit" value="注册并登陆"/>'+			
									'</li>'+
								'</ul>'+
							'</form>'+
						'</div>'
		
		var _rtype_acct_str = '<div class="acct-login" style="display: block;">'+
									'<form action="." method="post">'+
										'<ul class="login-form">'+
											'<li>'+
												'<input class="login-input" type="text" name="username" id="acct_username" value="" placeholder="请输入账号"/>'+
											'</li>'+
											'<li>'+
												'<input class="login-input" type="password" name="password" id="acct_password" value="" placeholder="请输入密码"/>'+
											'</li>'+
											'<li>'+
												'<input class="login-input" type="password" name="rpassword" id="acct_rpassword" value="" placeholder="请再次输入密码"/>'+
											'</li>'+
											'<li>'+
												'<input class="login-submit" type="submit" value="注册并登陆" style="cursor: pointer"/>'+
											'</li>'+
										'</ul>'+
									'</form>'+
								'</div>'+
							'</div>'+
						'</div>'
		
		var _mooc_all_str = '<div class="mooc-all">'+
						'</div>'
						
		var _phone_str = _rtop_phone_str + _rtype_phone_str
		var c = $(".top-title")
		
		c.on("click",".phone-login li a",function(){
			var loginview = $(".top-title > .mooc-login-wraper")
			$("body").append(_mooc_all_str)
			c.children(".mooc-login-wraper").children().remove()	
			c.children(".mooc-login-wraper").append(_phone_str)
		})
		
		var _email_str = _rtop_email_str + _rtype_email_str
		
		c.on("click",".email-login li a",function(){
			var loginview = $(".top-title > .mooc-login-wraper")
			$("body").append(_mooc_all_str)
			c.children(".mooc-login-wraper").children().remove()	
			c.children(".mooc-login-wraper").append(_email_str)
		})
		
		var _acct_str = _rtop_acct_str + _rtype_acct_str
		
		c.on("click",".acct-login li a",function(){
			var loginview = $(".top-title > .mooc-login-wraper")
			$("body").append(_mooc_all_str)
			c.children(".mooc-login-wraper").children().remove()	
			c.children(".mooc-login-wraper").append(_acct_str)
		})
		
	}
}
