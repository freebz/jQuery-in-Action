// Listing 3.1  Dynamically creating a full-featured img element

$('<img>',
  {
      src: 'images/little.bear.png',
      alt: 'Little Bear',
      title: 'I woof in your general direction',
      click: function() {
	  alert($(this).attr('title'));
      }
  })
  .appendTo('body');
