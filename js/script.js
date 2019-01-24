(function () {
    // side menu
    let burger = document.querySelector('#burger-menu');
    let sideMenu = document.querySelector('.main-menu--list');
    burger.addEventListener('click', toggleSideMenu);

    function toggleSideMenu(e) {
        e.preventDefault();
        sideMenu.classList.toggle('open');
    }

    $(function () {
        if ("ontouchstart" in window) {
            $(document).swipe({
                swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                    
                    if (direction == "left") {
                        $(sideMenu).addClass('open');
                    }
                    if (direction == "right") {
                        $(sideMenu).removeClass('open');
                    }
                },
                threshold: 20
            });
        }
    });

})();