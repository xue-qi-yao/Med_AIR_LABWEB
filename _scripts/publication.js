
{
    function filterElements(tag) {
        var elements = document.getElementsByClassName("publication");
        var years = document.getElementsByClassName("paper-year")
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (tag === "all" || element.classList.contains(tag)) {
                element.style.display = "flex";
            } else {
                element.style.display = "none";
            }
        }
        for (var i = 0; i < years.length; i++) {
            var year = years[i];
            if (tag === "all") {
                year.style.display = "";
                year.style.position = "absolute";
                year.style.left = "50%";
                year.style.transform = "translateX(-50%)";
            }
            else {
                year.style.display = "none";
            }
        }
    }
}