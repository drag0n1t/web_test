document.querySelector('.menu-hamb').addEventListener('click', function() {
    document.querySelector('.menu-hamb span:nth-of-type(1)').classList.toggle('active');
    document.querySelector('.menu-hamb span:nth-of-type(2)').classList.toggle('active');
    document.querySelector('.menu-hamb span:nth-of-type(3)').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');

    document.querySelector('.menu').addEventListener('click', function() {
        document.querySelector('.menu-hamb span').classList.remove('active');
        document.querySelector('.menu').classList.remove('active');
    });
});