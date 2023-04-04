
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["Student", "Coder", "Developer"],
        typeSpeed: 40,
        backSpeed: 40,
        loop: true
    });
    
    var typed = new Typed(".typing-2", {
        strings: ["Student", "Coder", "Developer"],
        typeSpeed: 40,
        backSpeed: 40,
        loop: true
    });

    function warning(){
        alert("Projects are not uploaded yet....!");
    }
    function warning1(){
        alert("               Sorry....!\n CV is not uploaded yet...!");
   }
