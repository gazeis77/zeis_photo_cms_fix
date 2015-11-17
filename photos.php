<?php
  include("inc/header.php");
?>
<!--Carousel-->

<div class="container">
  <div class="jumbotron">
    <h1>Fine Art Gallery</h1>
    <p class="lead">With over 30 years of photograpich know how, Zeis Photography can fill any of your photographic needs.</p>
  </div>
</div>
       

<div class="container">
  <div class="fotorama"  data-auto="false"  data-autoplay="true"  data-allowfullscreen="native" data-arrows="true"
       data-click="true" data-swipe="false"  data-keyboard="true">
  </div>
</div>

<div class="container">
  <div class="row">
    <div id="lightbox"> 
      <div class="col-md-6"> 
          <div class="imgname">
         </div>
      </div>
      <div class="col-md-6"> 
          <div class="imgname2">
          </div>
      </div>
    </div>
</div>



<?php
  include("inc/footer.php");
?>