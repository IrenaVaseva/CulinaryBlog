function OpenLinks(str) {
    if (str == "home") {
        document.getElementById("Links").setAttribute("src", "./pages/home-page.html");
    }

    if (str == "salads") {
        document.getElementById("Links").setAttribute("src", "./pages/salads.html");
    }

    if (str == "main-meal") {
        document.getElementById("Links").setAttribute("src", "");
    }

    if (str == "baked") {
        document.getElementById("Links").setAttribute("src", "");
    }
    if (str == "desserts") {
        document.getElementById("Links").setAttribute("src", "");
    }

    if (str == "about") {
        document.getElementById("Links").setAttribute("src", "./pages/about.html");
    }
}
