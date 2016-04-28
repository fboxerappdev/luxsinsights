/*
 grunt-getting-started 2016-02-25
 */



$(document).ready(function() {

    $('[data-toggle="popover"]').popover();

    var winwid = $(document).width();



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

    var hie = $('.dtl-item-pt').height();

    $('.dtl-item-pt').slimScroll({
        height: hie,
        railVisible: true,
        size: '6px',
        wheelStep: 3
    });


    $('.dtl-item-pt li i:last-child').click(function(){
        $(this).parent().css("background","gray").fadeOut(function(){
            $(this).remove();
        });
    });



    $(".chart-list-item").on("click",function(){
        $(".chart-list-item").removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();

        $(".main-detail-item").hide();
        $(".main-detail-item:eq('"+index+"')").fadeIn();
    });



    $('.chart').easyPieChart({
        lineWidth:40,
        barColor: '#4D5360',
        trackColor:"#EEEEEE",
        lineCap:"square",
        scaleColor:"transparent",
        size:"250",
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    function piechart(selecter,color){
        $(selecter).easyPieChart({
            lineWidth:50,
            barColor: color,
            trackColor:"#EEEEEE",
            lineCap:"square",
            scaleColor:"transparent",
            size:"300",
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }




    piechart("#financial","#FDB45C");
    piechart("#health","#46BFBD");
    piechart("#sustainability","#ACD651");
    piechart("#safety","#949FB1");
    piechart("#usability","#AE80BA");

});