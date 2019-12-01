$(document).ready(function(){

// ANIMATED-PROGRESS-BAR
    $('#bar1').barfiller({
        barColor:'#10c9c3',
        tooltip:'false',
    });
    $('#bar2').barfiller({
        barColor:'#10c9c3',
        tooltip:'false'
    });
    $('#bar3').barfiller({
        barColor:'#10c9c3',
        tooltip:'false',
    });

// COUNTER-NUMBER
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
        parcent:true
    });


// SWIPER-SLIDER
    var mySwiper = new Swiper ('.swiper-container', {
        
       loop:true,

       pagination:{
        el:'.swiper-pagination',
        dynamicBullets:true,
        clickable:true
       },

       
        navigation : {
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
        },
        autoplay:{
            delay:1500,
            disableOnInteraction:false
        }
    }) 

// STICKY-NAV-VAR(HEADER SECCTION)
    $(".about").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        }else {
            $("nav").removeClass("sticky");
        }
    });

// SMOOTH SROLL FOR IE/EDGE/SAFARI
    $("a").click(function(event){
        if(this.hash !==""){
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
                },800,function(){
                    window.location.hash = hash;
            });
        }
    });


// ACTIVE-CLASS
    $("nav ul li ").click(function(){
        $("nav ul li ").removeClass("active");
        $(this).addClass("active");

    });
    $("nav .name").click(function(){
        $("nav ul li").removeClass("active");
        $("nav ul li:nth-child(1)").addClass("active");
    });


// HAM-BURGER-MENU
    $(".open-btn").click(function(){
        $(".overlay").css({
            "width":"100%",
        })
    });
    $(".close-btn").click(function(){
        $(".overlay").css({
            "width":"0%",
        })
    });
    $(".overlay a").click(function(){
        $(".overlay").css({
            "width":"0%",
        })
    });



});