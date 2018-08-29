import $ from 'jquery';

$(function () {
	$('.course-alert').parent().each(function(){
		const $this = $(this);
		const $bounds = $('.courses').first().parent().parent().parent();
		$this.popover({
			title: '',
			content: 'This course requires a prerequisite<br><a href="#">Add One.</a>',
			html: true,
			// trigger: 'hover',
			template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body callout callout-red"></div></div>',
			placement: 'top',
		});
	});
});
