
$(document).ready(function() {
    $("#submit_btn").click(function() { 
       
        var validate_form = true;
       
        if(validate_form) //everything looks good! proceed...
        {
            //get input field values data to be sent to server
            post_data = {
                'firstname'     : $('input[firstname=firstname]').val(), 
                'lastname'     : $('input[lastname=lastname]').val(), 
                'email'    : $('input[name=email]').val(),  
                'phone'  : $('input[name=phone2]').val(), 
                'subject'       : $('intput[value=info]').val(), 
            };
            
            //Ajax post data to server
            $.post('contact_me.php', post_data, function(response){  
                if(response.type == 'error'){ //load json data from server and output message     
                    output = '<div class="error">'+response.text+'</div>';
                }else{
                    output = '<div class="success">'+response.text+'</div>';
                    //reset values in all input fields
                    $("#myform  input[required=true]").val(''); 
                    $("#myform #contact_body").slideUp(); //hide form after success
                }
                $("#myform #contact_results").hide().html(output).slideDown();
            }, 'json');
        }
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#myform  input[required=true], #myform textarea[required=true]").keyup(function() { 
        $(this).css('border-color',''); 
        $("#result").slideUp();
    });
});