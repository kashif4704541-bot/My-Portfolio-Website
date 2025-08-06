var typed = new Typed('#element', {
    strings: ['FrontEnd Developer', 'Python Developer.'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    // menu.classList.toggle("show");
    menu.style.display = menu.style.display === "block" ? "none" : "block"; 
}
function closeMenu() {
    document.getElementById("nav-menu").style.display = "none";
}

function downloadFile() {
    const link = document.createElement("a");
    link.href = "./static/ShaheerKashif_Resume.pdf";
    link.download = "ShaheerKashif_Resume.pdf"; // optional filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

