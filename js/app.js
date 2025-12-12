const toggleButton = document.getElementById("theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function setTheme(theme) {
    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", theme);
}

const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    setTheme(currentTheme);
} else if (prefersDarkScheme.matches) {
    setTheme("dark");
}

toggleButton.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    setTheme(isDark ? "light" : "dark");
});
