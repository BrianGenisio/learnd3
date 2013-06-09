d3.json('/videos.json', function(error, data) {
  var navs = d3.select('.lessons')
    .selectAll('li')
    .data(data);

  var action = navs.enter()
    .append('li')
    .append('a');

  action.attr('href', '#')
    .text(function(d) { return d.title; });

  action.on('click', function(d) {
  	navs.attr('class', '');
  	var selected = d3.select(d3.event.toElement.parentElement);

  	selected.attr('class', 'active');

  	d3.select('.title').text(d.title);

    d3.select('.youtube iframe')
      .attr('src', 'http://www.youtube.com/embed/' + d.youtube);
  });
});