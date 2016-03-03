/*
 grunt-getting-started 2016-02-25
 */



$(document).ready(function() {


    $('[data-toggle="popover"]').popover();


    var winwid = $(document).width();

    if (winwid > 768) {
        $(".toggle").click(function () {
            $(".left-bar,.display-bar").toggleClass("open");
        });
    }

    if (winwid < 768) {
        $(".left-bar,.display-bar").toggleClass("open");

        $(".toggle").click(function () {
            $(".left-bar,.display-bar").toggleClass("open");
        });
    }


    var data = {
        labels: ["Financial Performance", "Health", "Environmental Sustainability", "Safety", "Usability"],
        datasets: [
            {
                label: "My Second dataset",
                fillColor: "rgba(34,39,82,0.9)",
                strokeColor: "rgba(151,187,205,0)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [5, 50, 5, 25, 30]
            }
        ]
    };

    var data1 = [
        {
            value: 8,
            color: "#222752",
        },
        {
            value: 100,
            color: "#aaa",
        }
    ];
    function chart(){
        if($("#myChart").length){
            var ctx = $("#myChart").get(0).getContext("2d");
            var myRadarChart = new Chart(ctx).Radar(data, {
                pointDot : false,
                angleLineColor : "rgba(0,0,0,0)",
                scaleLineColor: "rgba(0,0,0,0.26)"
            });
        }
        if($("#myChart1").length){

            var ctx1 = $("#myChart1").get(0).getContext("2d");
            var myDoughnutChart = new Chart(ctx1).Doughnut(data1, {
                scaleLineWidth: 1,
                percentageInnerCutout : 50,
                showTooltips: false
            });

            $("#myChart1").after("<span>"+ data1[0].value +"<sup>/"+ data1[1].value +"</sup></span>");

        }
    }
    chart();
    $(".toggle").click(function(){
        setTimeout(function(){
            chart();
        }, 300);

    });

});