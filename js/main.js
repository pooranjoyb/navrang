
// Fixing BS Scroll Navbar Glitch 
document.addEventListener("DOMContentLoaded", function () {
    var myOffcanvas = document.getElementById('offcanvasExample');
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    document.getElementById("btn").addEventListener('click', function (e) {
        bsOffcanvas.toggle();
    });
});