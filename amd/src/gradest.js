define(['jquery', 'core/str'], function ($, str) {


    var Gradest = function () {
        this.originalState = originalstate;
    };

    return {
        init: function () {
            $(document).ready(function () {
                $('i.fa-minus').click(function (event) {
                    console.log(event);
                    var top = event.target.parentNode.parentNode.offsetTop;
                    var left = event.target.parentNode.parentNode.offsetLeft;
                    var width = event.target.parentNode.parentNode.offsetWidth;
                    var height = event.target.parentNode.parentNode.offsetHeight;
                    $('.grade').each(function( index ) {
                        var x = $(this).position();
                        if(x.left > left && x.left < x.left+width && x.top>top && !$(this).hasClass('cat')) {
                            $(this).hide();
                        }

                    });
                    $('th.item').each(function( index ) {
                        var x = $(this).position();
                        if(x.left > left && x.left < x.left+width && x.top>top && !$(this).hasClass('cat')) {
                            $(this).hide();
                        }

                    });

                });
            });
            $(document).ready(function () {
                $('i.fa-plus').click(function (event) {
                    console.log(event);
                    var top = event.target.parentNode.parentNode.offsetTop;
                    var left = event.target.parentNode.parentNode.offsetLeft;
                    var width = event.target.parentNode.parentNode.offsetWidth;
                    var height = event.target.parentNode.parentNode.offsetHeight;
                    $('.grade').each(function( index ) {
                        var x = $(this).position();

                            $(this).show();


                    });
                    $('th.item').each(function( index ) {
                        var x = $(this).position();

                            $(this).show();


                    });

                });
            });
        }
    };
});

