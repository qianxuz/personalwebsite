jQuery(document).ready(function($){
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('cd-fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });

});

jQuery('#cody-info ul li').eq(1).on('click', function(){
$('#cody-info').hide();
});



function flytoshanghai(){
  $("#shanghaicircle").css({display: 'block'});
  $("#pittscircle").css({display: 'none'});
  $("#japancircle").css({display: 'none'});
	$('#girl').html("<img src = 'images/fly1.png' width = '300px'>");
	$("#girl").animate({left: '910px', top: '300px'}, 1500,function(){
		$('#girl').html ("<img src = 'images/girl.gif'  height = '150px'>");
		$('#circle').html ("<img src = 'images/shanghai.png' height = '200px'>");
	});
  $(".photo-link").attr("href", "shanghai.html");
}

function flytopitts(){
  $("#pittscircle").css({display: 'block'});
  $("#shanghaicircle").css({display: 'none'});
  $("#japancircle").css({display: 'none'});
	$('#girl').html("<img src = 'images/fly2.png' width = '300px'>");
	$("#girl").animate({left: '280px', top: '300px'}, 1500,function(){
		$('#girl').html ("<img src = 'images/girl.gif'  height = '150px'>");
		$('#circle').html ("<img src = 'images/pittsburgh.png' id='pittscircle' height = '200px'>");
	});
  $(".photo-link").attr("href", "pitts.html");
}

function flytojapan(){
  $("#japancircle").css({display: 'block'});
  $("#pittscircle").css({display: 'none'});
  $("#shanghaicircle").css({display: 'none'});
  $('#girl').html("<img src = 'images/fly1.png' width = '300px'>");
  $("#girl").animate({left: '1030px', top: '260px'}, 1500,function(){
    $('#girl').html ("<img src = 'images/girl.gif' height = '150px'>");
    $('#circle').html ("<img src = 'images/japan.png' id='japancircle' height = '200px'>");
  });
  $(".photo-link").attr("href", "japan.html");
}

window.onload = function() {
  setTimeout(function(){ 
    $('.wrapperloading').css({display:'none'}); 
    $('#main-content').css({display:'block'});
    $('body').css({backgroundColor:'#F3F3F3'});
  }, 500);


  $("#shanghai").hover(function(){
    $("#shanghai-text").css({display:'block'});
  }, function(){
    $("#shanghai-text").css({display:'none'});
  });

  $("#pitts").hover(function(){
    $("#pitts-text").css({display:'block'});
  }, function(){
    $("#pitts-text").css({display:'none'});
  });

  $("#japan").hover(function(){
    $("#japan-text").css({display:'block'});
  }, function(){
    $("#japan-text").css({display:'none'});
  });

	$("#shanghai").on("click", function(event) {
    $("#down-japan").css({display: 'none'});
    $("#down-shanghai").css({display: 'none'});
    $("#down-pitts").css({display: 'none'});
    flytoshanghai();
  });
	$("#pitts").on("click", function(event) {
    $("#down-japan").css({display: 'none'});
    $("#down-shanghai").css({display: 'none'});
    $("#down-pitts").css({display: 'none'});
    flytopitts();
  });
  $("#japan").on("click", function(event) {
    $("#down-japan").css({display: 'none'});
    $("#down-shanghai").css({display: 'none'});
    $("#down-pitts").css({display: 'none'});
    flytojapan();
  });

	$("#shanghaicircle").on("click", function(event) {
      $("#down-japan").css({display: 'none'});
   		$("#down-shanghai").css({display: 'block'});
      $('.SectionText').addClass('wow fadeInUp');
   		$('#leaf1').addClass('wow rotateOut');
   		$('#leaf2').addClass('wow rotateOut');
   		$('#leaf3').addClass('wow rotateOut');
   		$('#cloud1').addClass('wow bounceInUp');
   		$('#cloud2').addClass('wow bounceInUp');
   		window.location = "#down-shanghai";
   		window.loadGoogleMaps(); 		
  });

  $("#japancircle").on("click", function(event) {
      $("#down-japan").css({display: 'block'});
      $("#down-shanghai").css({display: 'none'});
      $('.SectionText').addClass('wow fadeInUp');
      $('#sakura1').addClass('wow rotateIn');
      $('#sakura2').addClass('wow rotateIn');
      window.location = "#down-japan";
      window.loadGoogleMaps();    
  });

  $("#pittscircle").on("click", function(event) {
      $("#down-japan").css({display: 'none'});
      $("#down-shanghai").css({display: 'none'});
      $("#down-pitts").css({display: 'block'});
      $('.SectionText').addClass('wow fadeInUp');
      window.location = "#down-pitts";
      window.loadGoogleMaps();    
  });


}

$(window).scroll(function(){
  if($(window).scrollTop()<500){
    $("figure#drop").css({display:'none'});
  }
  else{
    $("figure#drop").css({display:'block'});
  }
	$("#leaf1").css({
  		top: function(index, value) {
    		return 2800- $(window).scrollTop()*1.2;
  		}
  	});	
  	$("#leaf2").css({
  		top: function(index, value) {
    		return 1200- $(window).scrollTop()/2;
  		}
  	});
  	$("#leaf3").css({
  		top: function(index, value) {
    		return 2500- $(window).scrollTop();
  		}
  	});
  	$("#cloud1").css({
  		top: function(index, value) {
    		return 3000- $(window).scrollTop();
  		}
  	});	
  	$("#cloud2").css({
  		top: function(index, value) {
    		return 1700- $(window).scrollTop()/2;
  		}
  	});	
    $("#sakura1").css({
      top: function(index, value) {
        return 2200- $(window).scrollTop();
      }
    }); 
    $("#sakura2").css({
      top: function(index, value) {
        return 1400- $(window).scrollTop()/2;
      }
    });	
 
});