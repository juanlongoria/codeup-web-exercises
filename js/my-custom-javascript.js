"use strict";



$(document).ready(function() {
    alert( 'The DOM has finished loading!' );

    $('.important').css('background-color', 'yellow');
    $('p').css('font-size', '35px');

    //Multiple Selectors Example
    //$("selector1, selector2, ...")
    $('.important, p')
    $('.important, p').css('background-color', '#FF0');

    //All selector
    // $('*')
    // $('*').css('border', '1px solid #F00');

    //JQUERY Exercise
    //Alert the contents of element, only can alert one id
    alert($('#mainHeading').html())
    // alert($('#mainList').html())
    // var mainHeading=$('h1#mainHeading')
    // var
    // mainHeading.html('hello there');
    $('#mainHeading').css('border', 'solid 1px black')
    $('#mainList').css('font-family', 'Comic Sans, sans-serif')
    $('.codeup').css('border', 'solid 1px red')
    $('li').css('font-size', '50px')
    // $('h1,p,li').css('background-color', 'lightcyan')
    // $('h1').css('background-color', 'lightcyan')
    // $('p').css('background-color', 'lightcyan');
    // $('li').css('background-color', 'lightcyan');
     var highlighted = $('h1,p,li')
    highlighted.css('background-color', 'lightcyan')


});