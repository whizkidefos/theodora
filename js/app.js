$(document).ready(function() {
    $('.hamburger-menu').on('click', function () {
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
    });
});

// Initialize AOS
AOS.init({
    easing: 'ease',
    duration: 1200
    
});

// Display date and time
var dt = new Date();
document.getElementById("datetime").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));