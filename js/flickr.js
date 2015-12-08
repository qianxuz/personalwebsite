
 $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=137719964@N08&size=b&tags=shanghai&lang=en-us&format=json&jsoncallback=?", function(data){
		$.each(data.items, function(i,item){
			 var image = (item.media.m).replace("_m.jpg", "_d.jpg");
       var title = item.title;
		$("<div>")
          .attr({"style":"background-image: url("+image+")","class":"flickr-image", "data-title":title})
          .appendTo(".flickr").wrap("<a href='" + item.link + "'></a>");
			     
		});
});
