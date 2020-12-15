$(document).ready(function(){


    let $btns = $('.project-area .button-group button');

    $btns.click(function(e){

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');


    })


})