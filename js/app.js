 













 $(document).ready(function () {
  $('.fotorama').fotorama({
    data: [
      {img: 'img/untitled-1.jpg'},
      {img: 'img/untitled-2.jpg'},
      {img: 'img/untitled-3.jpg'},
      {img: 'img/untitled-5.jpg'},
      {img: 'img/untitled-6.jpg'},
      {img: 'img/untitled-7.jpg'},
      {img: 'img/untitled-8.jpg'},
      {img: 'img/untitled-10.jpg'},
      {img: 'img/untitled-11.jpg'},
      {img: 'img/untitled-12.jpg'},
      {img: 'img/untitled-13.jpg'},
      {img: 'img/untitled-14.jpg'},
      {img: 'img/untitled-15.jpg'},
      {img: 'img/untitled-16.jpg'},
      {img: 'img/untitled-17.jpg'},
      {img: 'img/untitled-18.jpg'},
      {img: 'img/untitled-19.jpg'},
      {img: 'img/untitled-20.jpg'},
      {img: 'img/untitled-21.jpg'},
      {img: 'img/untitled-22.jpg'},
      {img: 'img/untitled-23.jpg'},
      {img: 'img/untitled-24.jpg'},
      {img: 'img/untitled-25.jpg'},
      {img: 'img/untitled-26.jpg'},
      {img: 'img/untitled-27.jpg'},
      {img: 'img/untitled-28.jpg'},
      {img: 'img/untitled-29.jpg'},
      {img: 'img/untitled-30.jpg'},
      {img: 'img/untitled-31.jpg'},
      {img: 'img/untitled-32.jpg'},
      {img: 'img/untitled-33.jpg'},
      {img: 'img/untitled-34.jpg'},
      {img: 'img/untitled-35.jpg'},
      {img: 'img/untitled-36.jpg'},
      {img: 'img/untitled-37.jpg'},
      {img: 'img/untitled-38.jpg'},
      {img: 'img/untitled-39.jpg'},
      {img: 'img/untitled-40.jpg'},
      {img: 'img/untitled-41.jpg'},
      {img: 'img/untitled-42.jpg'},
      {img: 'img/untitled-43.jpg'},
 	    {img: 'img/untitled-44.jpg'},
    	{img: 'img/untitled-45.jpg'},
    	{img: 'img/untitled-46.jpg'},
    	{img: 'img/untitled-47.jpg'},
    	{img: 'img/untitled-48.jpg'},
 	    {img: 'img/untitled-49.jpg'},
    	{img: 'img/untitled-50.jpg'},
     	{img: 'img/untitled-51.jpg'},
 	    {img: 'img/untitled-52.jpg'}, 
 	    {img: 'img/untitled-53.jpg'},
      {img: 'img/untitled-54.jpg'},
      {img: 'img/untitled-55.jpg'},
      {img: 'img/untitled-56.jpg'},
      {img: 'img/untitled-57.jpg'},
      {img: 'img/untitled-58.jpg'},
      {img: 'img/untitled-59.jpg'},
      {img: 'img/untitled-60.jpg'},
      {img: 'img/untitled-61.jpg'},
      {img: 'img/untitled-62.jpg'},
      {img: 'img/untitled-63.jpg'},
      {img: 'img/untitled-64.jpg'},
      {img: 'img/untitled-65.jpg'},
      {img: 'img/untitled-66.jpg'},
      {img: 'img/untitled-67.jpg'},
      {img: 'img/untitled-68.jpg'},
      {img: 'img/untitled-69.jpg'},
      {img: 'img/untitled-70.jpg'},
      {img: 'img/untitled-71.jpg'},
      {img: 'img/untitled-72.jpg'},
      {img: 'img/untitled-73.jpg'},
      {img: 'img/untitled-74.jpg'},
      {img: 'img/untitled-75.jpg'},

      



    ]
  });
});

 function catchImage ($frame) {
  var $img = $('.fotorama__img', $frame);
  // do something smart with $img
}

$('.fotorama')
    .on('fotorama:showend', function (e, fotorama) {
      var $frame = fotorama.activeFrame.$stageFrame;

      if (!$frame.data('state')) {
        $frame.on('f:load', function () {
          catchImage($frame);
        });
      } else {
        catchImage($frame);
      }
    })
    .fotorama();



var imgname =   
[ 
  'img/untitled-75.jpg',
  'img/untitled-74.jpg',
  'img/untitled-73.jpg',
  'img/untitled-72.jpg',
  'img/untitled-71.jpg',
  'img/untitled-70.jpg',
  'img/untitled-69.jpg',
  'img/untitled-68.jpg',
  'img/untitled-67.jpg',
  'img/untitled-66.jpg',
  'img/untitled-65.jpg',
  'img/untitled-64.jpg',
  'img/untitled-63.jpg',
  'img/untitled-62.jpg',
  'img/untitled-61.jpg',
  'img/untitled-50.jpg',
  'img/untitled-51.jpg',
  'img/untitled-52.jpg',
  'img/untitled-53.jpg',
  'img/untitled-54.jpg',
  'img/untitled-55.jpg',
  'img/untitled-56.jpg',
  'img/untitled-57.jpg',
  'img/untitled-58.jpg',
  'img/untitled-59.jpg',
  'img/untitled-49.jpg',
  'img/untitled-48.jpg',
  'img/untitled-47.jpg',
  'img/untitled-46.jpg',
  'img/untitled-45.jpg',
  'img/untitled-44.jpg',
  'img/untitled-43.jpg',
 ]


 var imgname2 =     
  [
  'img/untitled-42.jpg',
  'img/untitled-41.jpg',
  'img/untitled-40.jpg',
  'img/untitled-30.jpg',
  'img/untitled-31.jpg',
  'img/untitled-32.jpg',
  'img/untitled-33.jpg',
  'img/untitled-34.jpg',
  'img/untitled-35.jpg',
  'img/untitled-36.jpg',
  'img/untitled-37.jpg',
  'img/untitled-38.jpg',
  'img/untitled-39.jpg',
  'img/untitled-11.jpg',
  'img/untitled-12.jpg',
  'img/untitled-13.jpg',
  'img/untitled-14.jpg',
  'img/untitled-15.jpg',
  'img/untitled-16.jpg',
  'img/untitled-17.jpg',
  'img/untitled-18.jpg',
  'img/untitled-19.jpg',
  'img/untitled-20.jpg',
  'img/untitled-21.jpg',
  'img/untitled-22.jpg',
  'img/untitled-23.jpg',
  'img/untitled-24.jpg',
  'img/untitled-25.jpg',
  'img/untitled-26.jpg',
  'img/untitled-27.jpg',
  'img/untitled-28.jpg',
  'img/untitled-29.jpg',
  'img/untitled-2.jpg',
  'img/untitled-3.jpg',
  'img/untitled-5.jpg',
  'img/untitled-6.jpg',
  'img/untitled-7.jpg',
  'img/untitled-8.jpg',
  'img/untitled-10.jpg'
  ] 



    var $div = $(".imgname");

    $.each(imgname, function(i, val) {
        $("<img />").attr("src", val).appendTo($div);
    });

    var $div = $(".imgname2");

    $.each(imgname2, function(i, val) {
        $("<img />").attr("src", val).appendTo($div);
    });

     












