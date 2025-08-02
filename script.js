var typed = new Typed('#element', {
    strings: ['FrontEnd Developer', 'Python Developer.'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("show");
}

function downloadFile() {
    const link = document.createElement("a");
    link.href = "./static/My_Resume.pdf";
    link.download = "ShaheerKashif_Resume.pdf"; // optional filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function downloadFile() {
        const link = document.createElement("a");
        link.href = "/static/Python_Developer_Roadmap_2025.pdf";
        link.download = "Python_Developer_Roadmap_2025.pdf"; // Optional: filename for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }
