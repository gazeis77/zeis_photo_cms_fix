





var error_list = [];

    function validate_form() {
        // Get a list of all values from the DOM
        // Quick trim to cleanup spaces before and after
        var firstname = document.getElementById('firstname').value.trim();
        var lastname = document.getElementById('lastname').value.trim();
        var email = document.getElementById('email').value.trim();
        var phone = document.getElementById('phone').value.trim();

        // Reset the error_list in case it had something in it before
        // Reset the error box and set it to blank if it had something in it before
        error_list = [];
        reset_errors();

        // Start validation

        // Firstname
        if(!is_required(firstname)) {
            error_list.push("Firstname is required");
        } else if(!max_length(firstname,25)) {
            error_list.push("Firstname cannot be longer than 25 characters");
        } else if(!min_length(firstname,2)) {
            error_list.push("Firstname cannot be shorter than than 2 characters");
        }

        // Lastname
        if(!is_required(lastname)) {
            error_list.push("Lastname is required");
        } else if(!max_length(lastname,25)) {
            error_list.push("Lastname cannot be longer than 25 characters");
        } else if(!min_length(lastname,2)) {
            error_list.push("Lastname cannot be shorter than than 2 characters");
        }

         // Email
        if(!is_required(email)) {
            error_list.push("Email is required");
        } else if(!valid_email(email)) {
            error_list.push("Email is not valid");
        }

         // Phone Number
        if(phone != "") {
            // If it's not empty, validate it
            if(!valid_na_phone(phone)) {
                error_list.push("Phone is not valid");
            }
        }

        // If no error, return true
        if(error_list.length == 0) {
            return true;
        }
        
        // Assume they have errors if they made it here
        display_errors(error_list);

        return false;

    }

    function display_errors(error_list) {
        var i = 0;
        var len = error_list.length;
        var output = "";
        while(i < len) {
            output += '<div class="error">'+ error_list[i] +'</div>';
            i++;
        }
        // Display the outputs in the pre-made container
        document.getElementById("errors").innerHTML = output;
        // Make the div visible
        document.getElementById("errors").style.display = "";
        // cleanup potentially large elements
        output = "";
    }

    function reset_errors() {
        document.getElementById("errors").style.display = "none";
        document.getElementById("errors").innerHTML = "";
    }

    function is_required(val) {
        // If blank, return false because this required to have something in it
        if(val == "") {
            return false;
        }
        return true;
    }

    function max_length(val,length) {
        // Javascript shortcut... if length exists (was sent), use that, else set it to 30 as the default
        length = length || 30;
        // if greater than length, return false
        if(val.length > length) {
            return false;
        }
        return true;
    }

    function min_length(val,length) {
        // Javascript shortcut... if length exists (was sent), use that, else set it to 30 as the default
        length = length || 3;
        // if less than length, return false
        if(val.length < length) {
            return false;
        }
        return true;
    }

    function valid_na_phone(val) {
        // This is for a valid NORTH AMERICAN phone number only
        
        // Strip out everything that isn't a number
        // var tmp = val.replace(/\D/g,''); <-- another working regex example
        var tmp = val.replace(/[^0-9]/g,'');

        // Get the total numbers of digits - convert to string and get the string length
        var len = String(tmp).length;

        // If it's 7 characters
        // 555 - 1234
        // If it's 10 characters
        // (859) 555 - 1234
        if(len == 7 || len == 10) { 
            return true;
        } if(len == 11) { 
            // If it's 11 characters, AND the first character is a "1", that's a valid American pre-digit.
            // 1 - (859) 555 - 1234
            if(String(tmp)[0] == 1) {
                return true;
            }
        }
        return false;
    }

    function valid_email(val) {
        // This is an email i got forever ago online that matches MUCH better than most validators and is far far more specific.  You can use almost anything people have posted on stack overflow
        var re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        return re.test(val);
    }


















    


