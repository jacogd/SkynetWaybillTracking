$(document).ready(function () {



    $("#btnSearch").click(function () {

        $("#divDisplay").hide();


        $("#divDisplay").html('<object data="http://www.crossroads.co.za/tracking2/ajax/Default.aspx?id=trackDetail&type=way&wb=' + $("#txtWbnr").val() + '&suser=webuser"/>');
        $("#divDisplay").show();
        //        $.ajax({
        //            //method: "get",
        //            //cache: false,
        //            url: "http://www.crossroads.co.za/tracking2/ajax/Default.aspx?id=trackDetail&type=way&wb=019909095565&suser=webuser",
        //            dataType: 'jsonp',
        //            success: function (jsonp) {
        ////                $("#divDisplay").html(data);
        ////                $("#divDisplay").show();
        //            }
        //        });

    });
});

