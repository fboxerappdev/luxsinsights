/*
 grunt-getting-started 2016-02-25
 */



$(document).ready(function() {


    $('[data-toggle="popover"]').popover();


    var winwid = $(document).width();


    $(".toggle").click(function () {
        $(".left-bar,.display-bar").toggleClass("open");
    });


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
            color: "#d4e5f7",
        }
    ];
    var data2 = [
        {
            value: 100,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Financial Performance"
        },
        {
            value: 20,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Health"
        },
        {
            value: 60,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Environmental Sustainability"
        },
        {
            value: 30,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Safety"
        },
        {
            value: 70,
            color: "#4D5360",
            highlight: "#616774",
            label: "Usability"
        }

    ];

    function chart(){
        if($("#myChart").length){
            var ctx = $("#myChart").get(0).getContext("2d");
            var myRadarChart = new Chart(ctx).Radar(data, {
                pointDot : false,
                angleLineColor : "rgba(0,0,0,0)",
                scaleLineColor: "rgba(0,0,0,0.26)",
            });
        }

        if($("#myChart2").length){
            var ctx = $("#myChart2").get(0).getContext("2d");
            var myRadarChart = new Chart(ctx).PolarArea(data2, {
                pointDot : false,
                angleLineColor : "rgba(0,0,0,0)",
                scaleLineColor: "rgba(0,0,0,0.15)",
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
            });
            document.getElementById('js-legend').innerHTML = myRadarChart.generateLegend();
        }

        if($("#myChart1").length){
            var ctx1 = $("#myChart1").get(0).getContext("2d");
            var myDoughnutChart = new Chart(ctx1).Doughnut(data1, {
                scaleLineWidth: 1,
                percentageInnerCutout : 80,
                showTooltips: false,
            });
            $(".canvas-box span").html(data1[0].value +"<sup>/"+ data1[1].value +"</sup>");

        }
    }
    chart();
    $(document).on("click",".toggle",function(){
        setTimeout(function(){
            chart();
        }, 300);

    });


    if($("#show-data").length){
        $("#show-data>thead").click(function(){
           $(this).next().toggle();
           $(this).find("i").toggleClass("open");

        });
    }

});