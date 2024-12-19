window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#000';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

document.querySelectorAll('.nav-item a').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#ff0';
    });
    item.addEventListener('mouseout', () => {
        item.style.color = '#fff';
    });
});
