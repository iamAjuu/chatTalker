$(document).ready(function(){
    $('.to-go').click(function(e){
        e.preventDefault();
        $('html,body').animate(
            {scrollTop: 0,},600);
    });
    
    $('.btn-c2').click(function(e){
        e.preventDefault();
        $(this).toggleClass('act');
        $(this).parent().siblings().find('.btn-c2').removeClass('act');
        if($(this).text()== '15000位'){
            $(this).parent().parent().siblings().find('.plan-user p').text('15000');
            $(this).parent().parent().siblings().find('.basic-month-average p').text('500');
            $(this).parent().parent().siblings().find('.standard-month-average p').text('1500');
        }else {
            $(this).parent().parent().siblings().find('.plan-user p').text('10000');
            $(this).parent().parent().siblings().find('.basic-month-average p').text('600');
            $(this).parent().parent().siblings().find('.standard-month-average p').text('1600');
        }
        if($(this).text()== '20000位'){
            $(this).parent().parent().siblings().find('.plan-user p').text('20000');
            $(this).parent().parent().siblings().find('.basic-month-average p').text('400');
            $(this).parent().parent().siblings().find('.standard-month-average p').text('1400');
        }if($(this).text()== '25000位'){
            $(this).parent().parent().siblings().find('.plan-user p').text('25000');
            $(this).parent().parent().siblings().find('.basic-month-average p').text('300');
            $(this).parent().parent().siblings().find('.standard-month-average p').text('1300');
        }if($(this).text()== '>25000位'){
            $(this).parent().parent().siblings().find('.plan-user p').text('>25000');
            $(this).parent().parent().siblings().find('.basic-month-average p').text('200');
            $(this).parent().parent().siblings().find('.standard-month-average p').text('1200');
        }
    });

    
    $('.qa-title').click(function () {
        $(this).siblings('.ans').slideToggle();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).find('button').find('.plus').attr("src", "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/icon_minus.svg");
        } else {
            $(this).find('button').find('.plus').attr("src", "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/icon_plus.svg");
        }
        $(this).parent().siblings().find('.ans').slideUp();
        $(this).parent().siblings().find('.qa-title').removeClass('active');
        $(this).parent().siblings().find('button').find('.plus').attr("src", "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/icon_plus.svg");
    });

});
