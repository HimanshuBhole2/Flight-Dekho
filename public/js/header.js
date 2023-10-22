var navbar = document.getElementById("mobile_head");
var user = document.getElementsByClassName("sing_in_option")[0];
var singpop = document.getElementById('singinPop');
    function printsome(){
    
    if(navbar.style.display === "none" || navbar.style.display === ""){
        navbar.style.display = "block";
    }
    else{
        navbar.style.display ="none";
    }
    console.log("printed out style");
    }

    function printsome2(){
    
    if(user.style.display === "none" || user.style.display === ""){
        user.style.display = "block";
    }
    else{
        user.style.display ="none";
    }
    console.log("printed out style");
    }

    function show_sign_pop(){
        if(singpop.style.display==="")
        {
            singpop.style.display = "flex";
            console.log('function done')
        }
        user.style.display ="none";
        
        console.log(singpop.style.display)
    }