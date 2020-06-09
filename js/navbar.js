let navOffset = $(".B-navbar").offset().top;

$(window).scroll(function(){
    
    let scrollTop = $(window).scrollTop();
    
    if(scrollTop > navOffset)
    {
        $(".B-navbar").addClass("fixed-top");
    }
    
    else
        {
    $(".B-navbar").removeClass("fixed-top");

        }
})

