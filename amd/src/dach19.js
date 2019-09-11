define(['jquery'], function($) {

    return {
        init: function() {


             $(".cell.topleft.cell.c0").html('<select id="widthSelector"></select>');

            $(document).ready(function() {
                $("<option/>").val("wide").text("Standard").appendTo("#widthSelector");
            });
            $(document).ready(function() {
                $("<option/>").val("slim").text("Slim").appendTo("#widthSelector");
            });


            $('#widthSelector').change(function() {
                if ($('#widthSelector').val() === 'slim') {
                    $('.item.catlevel2.highlightable.cell').css({
                        "writing-mode": "vertical-lr"
                    });
                    $('.cell').not('.user, .userreport, .userfield').css({
                        "max-width": "40px",
                        "min-width": "40px"
                    });
                } else {
                    $('.item.catlevel2.highlightable.cell').css({
                        "writing-mode": "horizontal-tb",
                    });
                    $('.cell').not('.user, .userreport, .userfield').css({
                        "max-width": "400px",
                        "min-width": "100px"
                    });
                }
            });
        }
    };
});