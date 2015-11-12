<?php 
  include("inc/header.php");
?>
<!--Carousel-->

  <div id="myCarousel" class="carousel slide jumbotron" data-ride="carousel">
    <div class="container">
        <ol class="carousel-indicators">
          <li class="active" data-target="#myCarousel" data-slide-to="0">

          </li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="item active">
             <div class="container"> 
              <img src="img/untitled-34_2.jpg" class="img-responsive">
               <div class="carousel-caption">
                   <img id="logo" src="img/White_Logo.svg">
                 <p class="lead">Based in Cincinnati Ohio. Here for all of your Photography needs. 
                 </p>
            </div>
          </div>
        </div>

        <div class="item">
            <div class="container">
              <img src="img/4105820.jpg" class="img-responsive">
                <div class="carousel-caption">
                  <h1><a class="car-text" href="booth.html">Services</a></h1>
                  <p class="lead">We cater to many types of needs</p>
            </div>
          </div>
        </div>
         <div class="item">
          <div class="container">
            <img src="img/untitled-12_2.jpg" class="img-responsive">
              <div class="carousel-caption">
                <h1><a class="car-text" href="photos.html">Photography</a></h1>
                <p class="lead">Fine Art and Photography</p>
            </div>
            </div>
        </div>

      </div>
    </div>
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="icon-prev"></span>
    </a>
       <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="icon-next"></span>
    </a>
  </div>

 <!--Photobooth-->
<div class="container">
  <div class="row">
    <div class="col-sm-6">
        <h1><a href="booth.html">Photobooth</h1>
        <img src="img/9145336.jpg"></a>
        <p>The Zeis photo booth is not like the rest. We can custom quote you on anything you would like. Our Photobooth has no hidden fees at all. What you <a href="booth.html">see</a> is what you get. 
        </p>   
      </div>


 <!--Photography-->

    <div class="col-sm-6">
        <h1><a href="photos.html">Fine Art Photography</h1>
        <img src="img/untitled-4_2.jpg" class="width-adjust"></a>
        <p>
          With over 30 years of doing fine art photography we have amassed quite the <a href="photos.html">collection</a>.
        </p> 
      </div>
  </div>
</div>


<?php
  include("inc/footer.php");
?>