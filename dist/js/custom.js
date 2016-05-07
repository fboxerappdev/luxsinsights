/*
 grunt-getting-started 2016-02-25
 */








function filterGlobal () {
    $('#list-tabledata').DataTable().search(
        $('#global_filter').val()
    ).draw();
}

function filterColumn ( i ) {
    $('#list-tabledata').DataTable().column( i ).search(
        $('#col_filter').val()
    ).draw();
}


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
        alwaysVisible: true,
        size: '11px',
        wheelStep: 3,
    });



    $('.dtl-item-pt li i:last-child').click(function(){
        $(this).parent().css("background","gray").fadeOut(function(){
            $(this).remove();
        });
    });



    var hit = $('.dtl-item-pt').height();
    $('.dtl-item-pt').slimScroll({
        height: '368px',
        railVisible: true,
        alwaysVisible: true,
        size: '11px',
        wheelStep: 14,
    });

    setTimeout(function(){
        $('.dataTables_scrollBody').slimScroll({
            height: '370px',
            railVisible: true,
            alwaysVisible: true,
            size: '11px',
            wheelStep: 14
        });
    }, 1000);






    $("#tabid .chart-list-item").on("click",function(){
        $("#tabid .chart-list-item").removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $(".main-detail-item").hide();
        $(".main-detail-item:eq('"+index+"')").fadeIn();
    });


    $(".tab-list ul li").on("click",function(){
        $(".tab-list ul li").removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $(".main-detail-item").hide();
        $(".main-detail-item:eq('"+index+"')").fadeIn(function(){
            $.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
        });
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


    var src = $(this).children("img").attr("src");


    $(".dtl-item-pt a").each(function() {
        var mytxt = $(this).find("span").text();
        var cont = '<div><b></b></div>';
        $(this).find("span").after(cont);
        $(this).find("b").animate({
            width:mytxt+"%"
        },400);
    });

    var colors = ["#FDB45C","#46BFBD","#ACD651","#949FB1","#AE80BA"];

    $(".bar-chart").each(function() {
        $(">span",this).each(function(index){
            var spanval= $(this).text();
            var spanvalsing = spanval/5+"%";
            $(this).css({
                width:spanvalsing,
                backgroundColor:colors[index]
            });
            $(this).empty();
        })
    });







    $('#list-tabledata').DataTable( {
        scrollY:        370,
        scrollCollapse: true,
        paging:         false
    });



    $('input.global_filter').on('keyup click', function(){
        filterGlobal();
    });

    var srcCol = "0";


    $("#getvalue").val($("#getvalue option:first").val());

    $("#getvalue").on("change",function () {

            $( "#list-tabledata th" ).each(function( index ) {
                var index = index.toString();
                $('#list-tabledata').DataTable().column( index ).search('').draw();
            });

            var cc =$("#getvalue option:selected").val();
            srcCol = cc.toString();

            $('#list-tabledata').DataTable().column( srcCol ).search(
                $('#col_filter').val()
            ).draw();

    });

    $('input.column_filter').on('keyup click', function () {
        filterColumn(srcCol);
    });
    $("#drowid").on("click",function(){
        $("#drowmenu").toggle();
    });
    $("#drowid2").on("click",function(){
        $("#drowmenu2").toggle();
    });

});