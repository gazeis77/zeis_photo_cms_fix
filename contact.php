<?php
  include("inc/header.php");
?>

<div class="container">
  <div class="jumbotron">
    <h1>Contact Us</h1>
    <p class="lead">
      Feel free to contact us here!
    </p>
  </div>
</div>

<div class="container">
  <div class="row"> 
      <div class="col-md-6">
          <form class="form-horizontal" id="myform" onsubmit="return validate_form();" action="sucess.php">   
          <div id="errors" class="errors"></div>   
               <legend>Contact Us</legend>
                    <div class="form-group">
                        <label for="firstname">First name <span>*</span></label>
                        <input class="form-control" type="text" id="firstname" name="firstname" placeholder="First Name"/>
                    </div>
                    <div class="form-group">
                        <label for="lastname">Last name <span>*</span></label>
                        <input class="form-control" type="text" id="lastname" name="lastname" placeholder="Last Name"/>
                    </div>
                    <div class="form-group">
                       <label for="email">Email <span>*</span></label>
                        <input class="form-control" type="text" id="email" name="email" placeholder="Email"/>                 
                   </div>
                   <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input class="form-control" type="text" id="phone" name="phone" placeholder="Phone Number" />
                   </div>
                   <p>
                      <div>"<span class="red">*</span>" fields are required</div>
                      
                  </p>
                       <legend>What is your interest</legend>
                       <div>
                        <label>
                          <input type="radio" value="info">
                          Photobooth
                        </label>
                      </div>
                      <div>
                        <label>
                          <input type="radio" value="info">
                          Senior Photography
                        </label>
                      </div>
                      <div>
                        <label>
                          <input type="radio" value="info">
                          Baby/Child Photography
                        </label>
                      </div>
                      <div>
                        <label>
                          <input type="radio" value="info">
                          Maternity Photography
                        </label>
                      </div>
                      <div>
                         <label>
                          <input type="radio" value="info">
                          Modeling/Glamour/Vintage Glamour
                        </label>
                      </div>
                      <div>
                         <label>
                          <input type="radio" value="info">
                          Event - Sports, Marching Band, Birthday, etc.
                        </label>
                      </div>
                      <div>
                         <label>
                          <input type="radio" value="other">
                          Other
                        </label>
                      </div>
                      <div>
                       <button id="submit_btn" type="submit" name="submit" value="submit">Submit</button>
                      </div>
            </form>   
      </div>
        <div class="col-md-6">
                <legend>Contact Details</legend>
                  <ul>
                    <li class="glyphicon glyphicon-earphone"><a href="tel:513-797-4219">Office:513-797-4219</a></li>
                    <br>
                    <li class="glyphicon glyphicon-earphone"><a href="tel:513-368-3683">Cell:513-363-3683</a></li>
                    <br>
                    <li class="glyphicon glyphicon-envelope"><a href="mailto:zeisphoto@zeisphoto.com">zeisphoto@zeisphoto.com</a></li>
                    <br>
                    <li class="glyphicon glyphicon-envelope"><a href="mailto:debby@zeisphoto.com">debby@zeisphoto.com</a></li>
                  </ul>
              </div>
  </div>
</div>



 <?php
  include("inc/footer.php");
?>