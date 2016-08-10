/*!
 * Hsiao-Notice 0.1.0 (http://www.fackyou.org)
 * 自用JQuery轻量级提示插件
 * Author：Delay.Hsiao <fuck@fackyou.org/547084615>
 * Licensed under the MIT license
 */

$.notice = function(options){
	var config = {
		type : null,
		message : null,
		callback : function(){},
		timeout : 1000,
		context : 'body',
	};

	init = function(){
		$('.api-notice').remove();
		setting = $.extend({},config,options);
		if(typeof(setting.type) == 'undefined'){
			console.log('Error:The param "type" is null!');
			return false;
		}
		notice_box = '<div class="api-notice '+setting.type+'" style="display:none"></div>';
		$(setting.context).append(notice_box);
		/*if($(document).scrollTop() > $('.api-nav').height()){
			$('.api-notice').css('top',0);
		}*/
		switch(setting.type){
			case 'success':
				notice_content = this.success(setting);
				break;
			case 'error':
				notice_content = this.error(setting);
				break;
			case 'info':
				notice_content = this.info(setting);
				break;
		}
		$('.api-notice').html(notice_content).fadeIn();
		fadeout = setInterval(function(){
			$('.api-notice').fadeOut();
			clearInterval(fadeout);
			setting.callback();
		},setting.timeout);
	}

	success = function(setting){
		content = '<div class="container api-notice-content"><i class="fa fa-check"></i>'+setting.message+'</div>';
		return content;
	}

	error = function(setting){
		content = '<div class="container api-notice-content"><i class="fa fa-exclamation-triangle"></i>'+setting.message+'</div>';
		return content;
	}

	info = function(setting){
		content = '<div class="container api-notice-content"><i class="fa fa-info-circle"></i>'+setting.message+'</div>';
		return content;
	}

	init();
}
