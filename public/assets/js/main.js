

/* --------------------------- SUBMENU CATEGORIAS --------------------------- */
var menuItems = document.querySelectorAll('.item_1');
menuItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.stopPropagation(); 
        var subMenu = this.querySelector('.sub_menu');
        $('.sub_menu').slideUp();
        $('.sub_btn').slideUp();
        
        if (subMenu.style.display === 'block') {
            subMenu.slideUp();
            $('.sub_menu').slideUp();
        } else {
            subMenu.style.display = 'block';
        }
    });
    var subItems = item.querySelectorAll('.item_2');
    subItems.forEach(function(subItem) {
        subItem.addEventListener('click', function(event) {
            event.stopPropagation(); 
            var subMenu = this.closest('.sub_menu');
            if (subMenu) {
                subMenu.slideUp();
            }
        });
    });
});
$('.sub_menu').click(function(event) {
    event.stopPropagation();
});
document.addEventListener('click', function(event) {
    $('.sub_menu').slideUp();
});


/* ----------------------------- BOTONES HEADER ----------------------------- */

$(document).ready(function() {
    $('.sub_btn').slideUp();

    $('button[id^="btn_"]').click(function(event) {
        event.stopPropagation();
        var subBtn = $(this).find('.sub_btn');
        $('.sub_btn').not(subBtn).slideUp();
        subBtn.slideToggle();
        $('.sub_menu').slideUp();
        

        if ($(this).attr('id') !== 'btn_menu') {
            $('.navbar_1').slideUp();
        }

    });

    $('.sub_btn').click(function(event) {
        event.stopPropagation();
    });
    $(document).click(function(event) {
        if (!$(event.target).closest('.navbar_btns').length) {
            $('.sub_btn').slideUp();
        }
    });
});




/* -------------------------------- NAVBAR_1 -------------------------------- */
$(document).ready(function () {
    $('#btn_menu').click(function (event) {
        event.stopPropagation();
        $('.navbar_1').slideToggle();
    });
});


$(document).click(function (event) {
    if ($(window).width() <= 768) {
        if (!$(event.target).closest('.navbar_1, #btn_menu').length) {
            $('.navbar_1').slideUp();
        }
    }
});


