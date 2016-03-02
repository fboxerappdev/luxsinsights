/*
 grunt-getting-started 2016-02-25
 */



$(document).ready(function(){


         var winwid= $(document).width();

        if(winwid>768){
             $(".toggle").click(function(){
              $(".left-bar,.display-bar").toggleClass("open");
             });
        }

        if(winwid<768){
            $(".left-bar,.display-bar").toggleClass("open");

            $(".toggle").click(function(){
                $(".left-bar,.display-bar").toggleClass("open");
            });
        }



    var data = {
        labels: ["Financial Performance", "Health", "Environmental Sustainability", "Safety", "Usability"],
        datasets: [
            {
                label: "My Second dataset",
                fillColor: "rgba(34,39,82,0.9)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [5, 50, 5, 25, 30]
            }
        ]
    };

    var ctx = $("#myChart").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.



    var myRadarChart = new Chart(ctx).Radar(data, {
        pointDot : false
    });




});