(function() {
	d3.json('/videos.json', function(error, data) {
	  var navs = d3.select('.lessons-nav .lessons')
	    .selectAll('li')
	    .data(data);

	  var action = navs.enter()
	    .append('li')
	    .append('a');

	  action.attr('href', '#')
	    .text(function(d) { return d.title; });

	  action.on('click', function(d) {
	  	d3.select('.welcome-message').classed('hidden', true);

	  	navs.classed('active', false);
	  	d3.select(d3.event.toElement.parentElement)
	  		.classed('active', true);

	  	d3.select('.title').text(d.title);

	    d3.select('.youtube iframe')
	      .attr('src', 'http://www.youtube.com/embed/' + d.youtube);

	    d3.select('.codepen-container')
	    	.classed('hidden', false)
	    	.html('<p data-slug-hash="' + d.codepen + '" data-default-tab="js" class="codepen"></p>');
	    CodePenEmbed.init();

	  });
	});

	var navBar = d3.select('.navbar .nav');
	var lessons = navBar.select('.lessons');
	var about = navBar.select('.about');

	function selectNav() {
		navBar.selectAll('li').classed('active', false);
		d3.select(d3.event.toElement.parentElement)
			.classed('active', true);
	}

	lessons.on('click', function() {
		selectNav();
		d3.select('.lessons-container').classed('hidden', false);
		d3.select('.about-container').classed('hidden', true);
	});

	about.on('click', function() {
		selectNav();
		d3.select('.lessons-container').classed('hidden', true);
		d3.select('.about-container').classed('hidden', false);
	});
})();