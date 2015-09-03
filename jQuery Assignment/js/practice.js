

    jQuery(document).ready(function($){


    $("#pass").keyup(function(){
        var count=$(this).val().length;
        if(count<1){
             $("#alert_msg").text("");
            $("#alert_msg").removeClass("red");
            $("#alert_msg").removeClass("green");
            $("#alert_msg").removeClass("orange");
        }
        else if(count<8){
            $("#alert_msg").text("Password Must be at least 8 charecters");
            $("#alert_msg").addClass("red");
            $("#alert_msg").removeClass("green");
            $("#alert_msg").removeClass("orange");
        }
        else if(count<=9){
            $("#alert_msg").text("Password strength is good.");
            $("#alert_msg").addClass("orange");
            $("#alert_msg").removeClass("green");
            $("#alert_msg").removeClass("red");
        }
        else{
            $("#alert_msg").text("Password Strength is strong");
            $("#alert_msg").addClass("green");
            $("#alert_msg").removeClass("red");
            $("#alert_msg").removeClass("orange");
        }
    });
        
       
        
    $(".single-image ").mouseover(function(){
    
        $(".overlay").css("display",block);
        
    }); 
    


    });