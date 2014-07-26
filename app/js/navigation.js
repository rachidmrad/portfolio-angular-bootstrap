$(document).ready(function () {
  /*
  CSS Browser Selector v0.4.0 (Nov 02, 2010)
  Rafael Lima (http://rafael.adm.br)
  http://rafael.adm.br/css_browser_selector
  License: http://creativecommons.org/licenses/by/2.5/
  Contributors: http://rafael.adm.br/css_browser_selector#contributors
  */
  function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);

  

  //if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    //$('.custom-view1 .work-item .inner .inner-inner').css('-webkit-backface-visibility','visible');
    //$('.inner-inner').attr('style','-webkit-backface-visibility: visible');
  //}
  
  $('[data-toggle=open-contacts]').click(function () {
    $('.hidden-contacts').toggleClass('active');
    $('.contact').toggleClass('active');
    // $('.contact-screen').toggleClass('active');
    closeThis('.modal-screen');
    if ($('.about').hasClass('active')) {
		  $('#myModal').modal('hide');
		  closeThis('.about');
	  }
	toggleSortActivation();
  });
  
  $('.about').click(function () {
    $(this).toggleClass('active');
    $('.modal-screen').toggleClass('active');
    closeThis('.contact');
    closeThis('.hidden-contacts');
    // closeThis('.contact-screen');
    $('#myModal').modal('toggle');
    toggleSortActivation();
  });
  
  $('.home').click(function () {
    $(this).toggleClass('active');
    closeThis('.contact');
    closeThis('.hidden-contacts');
    // closeThis('.contact-screen');
    closeThis('.modal-screen');
    if ($('.about').hasClass('active')) {
		  $('#myModal').modal('hide');
		  closeThis('.about');
	  }
	toggleSortActivation();
  });
  
  $('.modal-dismiss').click(function () {
    $('.about').toggleClass('active');
    closeThis('.modal-screen');
    $('#myModal').modal('toggle');
    toggleSortActivation();
  });
  
  // $('.contact-screen').click(function () {
  //   $('.hidden-contacts').toggleClass('active');
  //   $('.contact').toggleClass('active');
  //   $('.contact-screen').toggleClass('active');
  //   toggleSortActivation();
  // });
  

function closeThis(itemToClose) {
	if ($(itemToClose).hasClass('active')) {
		$(itemToClose).toggleClass('active');
	}
}
function toggleSortActivation() {
	if ( $('.about').hasClass('active') || $('.hidden-contacts').hasClass('active') ) {
		$('.sort-portfolio').addClass('disabled');
	} else {
		$('.sort-portfolio').removeClass('disabled');
	}
}

});
