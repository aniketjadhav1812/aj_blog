
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
    .owl-dots {
    text-align: center;
    margin-top: 20px;
}

.owl-dot {
    height: 13px;
    width: 13px;
    margin: 0 5px;
    outline: none !important;
    border-radius: 50%;
    border: 2px solid crimson !important;
    transition: all 0.3s ease;
}

.owl-dot.active {
    width: 35px;
    border-radius: 14px;
}

.owl-dot.active,
.owl-dot:hover {
    background: crimson !important;
}

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
