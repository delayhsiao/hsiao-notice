/*!
 * Hsiao-Notice 0.2.0 (http://www.fackyou.org)
 * 自用JQuery轻量级提示插件
 * Author：Delay.Hsiao <fuck@fackyou.org/547084615>
 * Licensed under the MIT license
 */

$.notice = $.HsiaoNotice = function(options){
	var config = {
		type : null,
		message : null,
		callback : function(){},
		timeout : 1000,
		context : 'body',
		icon : '',  //加图标，可以是img标签，也可以是fonticon
	};

	init = function(){
		$('.dn-notice').remove();
		setting = $.extend({},config,options);
		if(typeof(setting.type) == 'undefined'){
			console.log('Error:The param "type" is null!');
			return false;
		}
		notice_box = '<div class="dn-notice '+setting.type+'" style="display:none"></div>';
		$(setting.context).append(notice_box);
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
		$('.dn-notice').html(notice_content).fadeIn();
		fadeout = setInterval(function(){
			$('.dn-notice').fadeOut();
			clearInterval(fadeout);
			setting.callback();
		},setting.timeout);
	}

	success = function(setting){
		content = '<div class="container dn-notice-content">'+setting.icon+setting.message+'</div>';
		return content;
	}

	error = function(setting){
		content = '<div class="container dn-notice-content">'+setting.icon+setting.message+'</div>';
		return content;
	}

	info = function(setting){
		content = '<div class="container dn-notice-content">'+setting.icon+setting.message+'</div>';
		return content;
	}

	init();
}

var HsiaoNoticeTimeout = 1000;

var HsiaoNotice = {
	outtime:function(time){
		HsiaoNoticeTimeout = time;
	},
	success:function(message,callback){
		$.HsiaoNotice({
			type:'success',
			message:message,
			timeout:HsiaoNoticeTimeout,
			callback:callback
		});
	},
	error:function(message,callback){
		$.HsiaoNotice({
			type:'error',
			message:message,
			timeout:HsiaoNoticeTimeout,
			callback:callback
		});
	},
	info:function(message,callback){
		$.HsiaoNotice({
			type:'info',
			message:message,
			timeout:HsiaoNoticeTimeout,
			callback:callback
		});
	},
}
