const toggleBtn = document.getElementById("theme-toggle")
      lightIcon = document.getElementById("light-icon")
      darkIcon = document.getElementById("dark-icon");

toggleBtn.addEventListener("click", () => {
    const html = document.documentElement;
    
    if(html.getAttribute("switch-theme") === "dark") {
        html.removeAttribute("switch-theme"); // back to light
        darkIcon.style.display = "none"
        lightIcon.style.display = "inline-block"
    } else {
        html.setAttribute("switch-theme", "dark"); //enable dark mode
        lightIcon.style.display = "none"
        darkIcon.style.display = "inline-block"
    }
});