jQuery(function($) {

    //Preloader
    
    var preloader = $('.preloader');
    $('<img>').attr('src',function(){
        var imgUrl = $('.item').css('background-image');
        imgUrl = imgUrl.substring(imgUrl.length-7, imgUrl.length-6);
        return 'public/assets/images/slider/'+imgUrl+'.jpg';
    }).load(function(){
        preloader.remove();
    });
    /*$(window).load(function(){
        preloader.remove();
    });*/
    
    //#main-slider
    var slideHeight = $(window).height();
    $('#home-slider .item').css('height',slideHeight);
        
    $(window).resize(function(){
        $('#home-slider .item').css('height', slideHeight);
    });
    
    //Scroll Menu
    $(window).on('scroll', function(){
        if( $(window).scrollTop()>slideHeight ){
            $('.main-nav').css("opacity", "1");
        } else {
            $('.main-nav').css("opacity", "0.5");
        }
    });

    // Navigation Scroll
    $(window).scroll(function() {
        Scroll();
    });

    $('.navbar-collapse ul li a, #home_button').on('click', function() {  
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
        return false;
    });

    //Carousel
    
    $myCarousel =   $('#home-slider');
    $myCarousel.carousel();
    
    function doAnimations(elems) {
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            if($animationType == 'animated pulse' || $animationType == 'animated rubberBand' || $animationType == 'animated zoomInUp')
            {
                setTimeout(function() {
                    $this.removeClass('hideContent');
                    $this.addClass($animationType).one(animEndEv, function () {
                      $this.removeClass($animationType);
                    });
                }, 1500);
            }
            else if($animationType == 'animated fadeIn')
            {
                setTimeout(function() {
                    $this.removeClass('hideContent');
                    $this.addClass($animationType).one(animEndEv, function () {
                      $this.removeClass($animationType);
                    });
                }, 1000);
            }
            else
            {
                $this.addClass($animationType).one(animEndEv, function () {
                    $this.removeClass($animationType);
                });
            }
        });
    }

    // Select the elements to be animated
    // in the first slide on page load
    var $firstAnimatingElems = $myCarousel.find('.item:first').find('[data-animation ^= "animated"]');

    // Apply the animation using our function
    doAnimations($firstAnimatingElems);

    // Pause the carousel 
    $myCarousel.carousel('pause'); 

    $myCarousel.on('slide.bs.carousel', function (e) { 
        $('.itemRow3, .itemRow4, .ubu').addClass('hideContent');
        // Select the elements to be animated inside the active slide 
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });

    // User define function
    function Scroll() {
        var contentTop      =   [];
        var contentBottom   =   [];
        var winTop          =   $(window).scrollTop();
        var rangeTop        =   200;
        var rangeBottom     =   500;
        
        $('.navbar-collapse').find('.scroll a').each(function(){
            contentTop.push( $( $(this).attr('href') ).offset().top);
            contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
        });
        
        $.each( contentTop, function(i){
            if ( winTop > contentTop[i] - rangeTop ){
                $('.navbar-collapse li.scroll')
                .removeClass('active')
                .eq(i).addClass('active');			
            }
        });
    };

    $(document).ready(function(){
        //Services
        
        $('.MvisibleContent #concept_modal').fadeIn(300);

        $('.tabsDesk li').on('click', function(){
            var id  =   $(this).data('tgt');

            $('.tabsDesk li').css('-webkit-filter', 'none');
            $(this).css('-webkit-filter', 'hue-rotate(240deg) saturate(3.3)');
            $('.Mmodels').css('display', 'none');
            $(id).fadeIn(1000);
        });

        $('.features').fadeOut();
        $('#what').delay(300).fadeIn();
        
        $('.nav a').on('click', function () {
            $('.navbar-toggle').click();
        });

        // Progress Bar
        $('#about-us').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $.each($('div.progress-bar'),function(){
                    $(this).css('width', $(this).attr('aria-valuetransitiongoal')+'%');
                });
                $(this).off('inview');
            }
        });

        $('#features').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('h3').each(function () {
                    if($(this).data('id') == 9 || $(this).data('id') == 12)
                        $(this).removeClass('timer');
                });
                
                $(this).find('.timer').each(function () {
                    var $this = $(this);
                    $this.prop('Counter',0).animate({ Counter: $this.text() }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $this.text(Math.ceil(now));
                        }
                    });
                });
                
                $(this).off('inview');
            }
        });

        $('#learn').on('click', function(e){
            e.preventDefault();

            var src =   $(this).data('src');

            $('#video').fadeOut(1000,function(){
                $('#youtube_video').attr('src',src );
                $('.about-info').fadeOut(100);
                $('#video').removeClass('hide');
                $('#video').delay(1000).fadeIn(1000, function(){
                    $('#back_button').delay(1000).removeClass('hide');
                });
            });
        });

        $('#back_button').on('click', function(){
            $('#youtube_video').attr('src', $('#learn').data('src'));
            $('#video').fadeOut(100).addClass('hide');
            $('#back_button').addClass('hide');
            $('.about-info').fadeIn(100);
        });

        $('.headerImg .img_cont').hover(function(){
            $('.headerImg div').removeClass('imgTransition featured');
            $(this).find('.img_div').addClass('featured');
            $(this).addClass('imgTransition');
        }, function(){
            $('.headerImg div').removeClass('imgTransition featured');
        });

        $('#form_submit').on('click', function(e)
        {
            e.preventDefault();

            if( ! Form.validate())
                return;

            Form.saveForm();
        });
    });
    new WOW().init();
    //smoothScroll
    smoothScroll.init();
        
    var Form    =   {
        mm_pos_left :   0,
        
        validate : function()
        {
            var email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
            try
            {
                if( ! $('#name').val() || $('#name').val().length >= 90)
                    throw {'msg' : 'Please enter your name', 'elt' : '#name'};
                
                if( ! $('#email').val() || $('#email').val().length >= 200)
                    throw {'msg' : 'Please enter your email', 'elt' : '#email'};
                
                if( ! email_regex.test($('#email').val()))
                    throw {'msg' : 'Please enter the valid email', 'elt' : '#email'};
                
                if( ! $('#subject').val() || $('#subject').val().length >= 200)
                    throw {'msg' : 'Please enter the subject', 'elt' : '#subject'};
                
                if( ! $('#message').val() || $('#message').val().length >= 1000)
                    throw {'msg' : 'Please enter the message', 'elt' : '#message'};
                
                return true;
            }
            catch(err) {
                $('.error').text(err.msg).show();
                setTimeout(function(){ 
                    $('.error').hide();
                }, 5000);
                
                $(err.elt).focus();
                
                return false;
            }    
        },
        
        saveForm    :   function()
        {
            var form_status = $('<div class="form_status"></div>');
            
            $.ajax({
                type: "POST",
                url: "controller/ajaxHandler.php",
                cache: false,
                dataType: 'json',
                data: $('#main-contact-form').serializeArray(),
                beforeSend: function(){
                    $('#main-contact-form').prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
                },
                success: function(res){
                    if(res.name != 'error')
                    {
                        form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(5000).fadeOut();
                    }
                    else
                    {
                        form_status.html('<p class="text-danger">There is a problem with your entry. Please try again</p>').delay(5000).fadeOut();
                    }
                    
                    $('#main-contact-form').find("input[type=text], input[type=email], textarea").val("");
                },
                error: function(err){
                    $('.error').text(err.responseText).show();
                    setTimeout(function(){ 
                        $('.error').hide();
                    }, 5000);
                }
            });
        }
    };
});

