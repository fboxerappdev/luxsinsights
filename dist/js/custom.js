/*
 grunt-getting-started 2016-02-25
 */



$(document).ready(function() {


    var winwid = $(document).width();


  //  var headerHi = $('header').outerHeight();

    //$("<div></div>").css({
    //    width:"100%",
    //    height:headerHi+"px"
    //}).insertAfter("header");


   // var footerHi = $('footer').outerHeight();



   // var displayHi = $('.display-bar').outerHeight();

   // var contentHi = displayHi-headerHi-footerHi-10;


    //$(".content-box").css("height",contentHi);

    $(".toggle").click(function(){
        $(".left-bar,.display-bar").toggleClass("open");
    });



    $(".dtl-box-item h3 span").click(function(){
        $(this).parent().next().slideToggle();
    });


    if($("#show-data").length){
        $("#show-data>thead").click(function(){
           $(this).next().toggle();
           $(this).find("i").toggleClass("open");
        });
    }

    $('.dtl-item-pt').slimScroll({
        height: '424px',
        railVisible: true,
        size: '6px',
        wheelStep: 3
    });
    $('.dtl-item-pt li i:last-child').click(function(){
        $(this).parent().css("background","gray").fadeOut(function(){
            $(this).remove();
        });
    });



    $('.chart').easyPieChart({
        lineWidth:40,
        barColor: '#4D5360',
        trackColor:"#EEEEEE",
        lineCap:"square",
        scaleColor:"#fff",
        size:"250",
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

});