function OpenLinks(str) {
    if (str == "home") {
        document.getElementById("Links").setAttribute("src", "./pages/home-page.html");
    }

    if (str == "salads") {
        document.getElementById("Links").setAttribute("src", "./pages/salads.html");
    }

    if (str == "meals") {
        document.getElementById("Links").setAttribute("src", "./pages/meals.html");
    }

    if (str == "baked") {
        document.getElementById("Links").setAttribute("src", "./pages/bakary.html");
    }
    if (str == "desserts") {
        document.getElementById("Links").setAttribute("src", "./pages/deserts.html");
    }

    if (str == "about") {
        document.getElementById("Links").setAttribute("src", "./pages/about.html");
    }
}
